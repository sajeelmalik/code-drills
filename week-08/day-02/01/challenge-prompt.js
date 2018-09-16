// Reverse Words


// Write a function `reverseWords` that takes in a sentence as a string and
// reverses the words within the sentence. Each word within the sentence is
// seperated by a space and you can assume there will not be more than one
// space between words.
function reverseWords(str){
  // -------------------- Your Code Here --------------------

  var reversed = str.split(" ");
  // console.log(reversed)
  for (var i = 0; i < reversed.length; i++){
    var length = reversed[i].length;
    for (var j = length-1; j > -1; j--){
      reversed[i] += reversed[i][j];
      // console.log(reversed[i])
    }
    reversed[i] = reversed[i].split("");
    reversed[i].splice(0, length)
    reversed[i] = reversed[i].join("");
  }

  return reversed.join(" ");

  // -------------------- End Code Area ---------------------
}

module.exports = reverseWords;