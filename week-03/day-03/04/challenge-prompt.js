// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array
var counter = 0;

function bubbleSort(arr) {
// ================= code goes here ===========================

    //slightly faster than recursion and double for loops
    var swapped;
    
    do {
        swapped = false;

        for(var i = 0; i < arr.length; i++) {
            counter++;
            if(arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }

        }

    } while(swapped);
    return arr;
}


// ============================================================


var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);
console.log(counter);