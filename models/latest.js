var mongoose = require("mongoose");
var latestSchema = new mongoose.Schema({
    query: String ,
    created :{ type:Date,default:Date.now() }
   
});

var latest = mongoose.model("Latest",latestSchema);

module.exports = latest ;