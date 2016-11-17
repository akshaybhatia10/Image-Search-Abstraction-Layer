var express = require("express"),
    mongoose = require("mongoose"),
    Latest = require("./models/latest"),
    bingSearch = require("bing.search"),
    app     = express();
    
    
mongoose.Promise = global.Promise;

//for local development
//mongoose.connect("mongodb://localhost/imagesearch");

//on mongo lab
mongoose.connect("mongodb://image-search-api:image-search-api@ds157247.mlab.com:57247/image-search-api");
   
var search = new bingSearch("B19fx6nXcipELSH4uCwxcdxKHhhogPZx4HydA4bcUqc");
    
app.set("view engine", "ejs");
app.get("/",function(req,res){
    
    res.render("index");
});

app.get("/search/:query",function(req,res){
    var query = req.params.query;
    var offset = req.params.offset || 10;
    var info = {query:query};
    search.images(query, {top : offset}, function(err,result){
        if(err){
            console.log(err);
        }else{
            //console.log(result);
            res.json(result);
        }
    });

    Latest.create(info,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });

});

app.get("/latest",function(req, res) {
    Latest.find({},{"limit":10,
                    "sort":{
                        "when":-1
                    }
                },function(err,data){
    if(err){
        console.log(err);
    }else{
        res.json({
            data
            //term: data.query
            //when: data.created
            });
    }
        });

});  

// function show(text){
//     return {
         
//             url : text.url,
//             snippet : text.title,
//             thumbnail : text.thumbnail.url,
//             context : text.sourceUrl 
//     }
// }

app.listen(process.env.PORT, process.env.IP);