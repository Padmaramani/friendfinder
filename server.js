// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRouter = require("./app/routing/apiRoutes");
var htmlRouter = require("./app/routing/htmlRoutes");


var app = express(); 
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);
app.use('/', htmlRouter);
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})