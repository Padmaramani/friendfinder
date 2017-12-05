// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express(); 
var PORT = process.env.PORT || 8080;

require('./app/routing/htmlRoutes')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})