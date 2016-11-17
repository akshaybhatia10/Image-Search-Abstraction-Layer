var express = require("express"),
    mongoose = require("mongoose"),
    Latest = require("./models/latest"),
    app     = express();
    
    
mongoose.Promise = global.Promise;

//for local development
mongoose.connect("mongodb://localhost/imagesearch");

//on mongo lab
//mongoose.connect("mongodb://image-search-api:image-search-api@ds157247.mlab.com:57247/image-search-api");
   
    
app.set("view engine", "ejs");
app.get("/",function(req,res){
    
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP);