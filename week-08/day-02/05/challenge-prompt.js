// Spiral iteration through a matrix


// This function takes in a `m` x `n` matrix represented as an array 
// of `m` sub-arrays, each of which contain `n` elements and returns
// all the elements of the matrix starting with the element in the
// top left and clockwise spiraling inward
function spiralIter(matrix) {
  // -------------------- Your Code Here --------------------
  var fixedMatrix = JSON.parse(JSON.stringify(matrix));
  var array = [];
  for (var i = 0; i < matrix.length; i++) {

    if(i === 0){
      fixedMatrix.splice(0, 1);

      matrix[i].forEach(element => {
        array.push(element)
      });
    }
    else if(i !== matrix.length-1){
      array.push(matrix[i][matrix[i].length - 1])
      fixedMatrix[i].splice(fixedMatrix[i].length - 1, 1)
    }
    else if(i === matrix.length-1){
      for(var j = matrix[i].length - 1; j > -1; j--){
        array.push(matrix[i][j]);
      }
    }

  }

  for(var k = matrix.length-2; k > 0; k--){
    array.push(matrix[k][0])
  }

  console.log(fixedMatrix)
return array;



  // -------------------- End Code Area ---------------------
}

console.log(spiralIter([[ 1,  2,  3,  4,  5],
  [16, 17, 18, 19,  6],
  [15, 24, 25, 20,  7],
  [14, 23, 22, 21,  8],
  [13, 12, 11, 10,  9]]));

// This export is for testing the function
module.exports = spiralIter;