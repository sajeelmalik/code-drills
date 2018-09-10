// Rotation Index

// console.log([1, 2].concat([3, 4]))

// `rotIndex` takes in an array of integers where if the front part was appended to the
// back part, it would be a sorted array and returns the index of where the split happens
function rotIndex(arr) {
  // -------------------- Your Code Here --------------------
  var testedArray = [];
  var length = arr.length;
  for(var i = 0; i < length; i++){
    var inOrder = arr.concat(testedArray);
    
    // console.log(inOrder) //checking to see if we're logging the right array - it is
  
    if(checkOrder(inOrder)){
      return i; //add one to refer to the next index of the array after it has correctly been placed in order. i + 1 correctly refers to the rotation index
    }
    
    testedArray.push(arr[0]);
    arr.splice(0, 1);

    
  }
  
  //checks to see if items are ordered (is there a better way to do this?)
  function checkOrder(arr){
    for(var i = 0; i < arr.length; i++){
      if(arr[i+1] && (arr[i+1] < arr[i])){
        return false;
        
      }

    }
    return true;
  }
  
  
  // --------------------- End Code Area --------------------
}

var arr1 = [4, 5, 6, 7, 8, 1, 2, 3, 4];
console.log(rotIndex(arr1)); // = 5


module.exports = rotIndex;
