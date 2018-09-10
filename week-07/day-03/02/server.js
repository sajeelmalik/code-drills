// 1. Configure Server

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var domVisits = {};
  var doms = [];

  arr.forEach(elem => {
    //splits the string by spaces, then splits the second index (the domain), by periods
    var domValue = elem.split(" ")[0];
    var tempDom = elem.split(" ")[1].split(".")
    
    //doms is an array of arrays such that each element has an index of the value and an index of the DOM, like [50, jerome], [50, code], etc.
    tempDom.forEach(elem => {
      doms.push([domValue, elem]);
      //initialize object keys at 0 so we can add to them later
      domVisits[elem] = 0;
    });
    
  });

  // console.log(doms);

  doms.forEach(elem => {
    //parses the integer from the first index of the element

    var value = parseInt(elem[0])
    domVisits[elem[1]] += value;
  });
  console.log(domVisits)
  return domVisits;

  // ===================================================
}

// getNumVisits(input);

// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  
  app.get("/", function(req, res){
    return res.json(getNumVisits(input));
})


  // ===================================================


// Listener
// ===========================================================

// 1. Create server

app.listen(PORT, function(){
  console.log("App listening to PORT: " + PORT)
});