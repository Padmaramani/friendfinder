
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

module.exports = function(app){
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,'../public', "survey.html"));
  });
    

app.get("/:anything?", function(req, res) {
    res.sendFile(path.join(__dirname, '../public',"home.html"));
  });
  

};
    
     
    




