// 1. Configure Server

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function evenLetters(str) {

    var letters = "";
    var objLetters = {};
    for (var i = 0; i < alphabet.length; i++){
        objLetters[alphabet[i]] = 0;
    }

    for (var i = 0; i < str.length; i++) {
        objLetters[str[i]] += 1;
    }
    for (var i = 0; i < alphabet.length; i++){
        if(objLetters[alphabet[i]] % 2 === 0){
            letters += alphabet[i];
        }
    }

    return letters;
}

console.log(evenLetters("chicken"))

app.get("/:input", function (req, res) {
    var input = req.params.input;
    return res.send(evenLetters(input));
})

app.listen(PORT, function () {
    console.log("App listening to PORT: " + PORT)
});