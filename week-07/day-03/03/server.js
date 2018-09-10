// 1. Configure Server

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"
var vowels = "aeiou";

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================

  var words = sen.split(" ");

  for (var i = 0; i < words.length; i++) {
    //checks if first letter is a consonant and second is a vowel
    if (!vowels.includes(words[i][0]) && vowels.includes(words[i][1])) {
      words[i] += words[i][0].toLowerCase() + "ae";
      words[i] = words[i].substring(1);
    }
    else if(vowels.includes(words[i][0])){
      words[i] += "ae";
    }
    else{
      words[i] += words[i][0].toLowerCase() + words[i][1].toLowerCase() + "ae";
      words[i] = words[i].substring(2);
    }

  }

  return words.join(" ");


  // ===================================================
}

// console.log(pigLatin(input));

// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================

  app.get("/", function(req, res){
    return res.send(pigLatin(input));
})



  // ===================================================


// Listener
// ===========================================================

// 1. Create server

app.listen(PORT, function(){
  console.log("App listening to PORT: " + PORT)
});