// SERVE UP INDEX AND ADD.HTML IN THIS FILE AT THE PORT OF YOUR CHOICE. 

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "public/add.html"));
})

app.listen(PORT, function () {
    console.log("App listening to PORT: " + PORT)
}); 