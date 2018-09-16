//  YOUR WORK HERE

//can simplify this code - think about it

function subArrays(arr, num) {
    var result = [];
    var tempArr = [];

    while (arr.length > 0) {
        if (arr.length >= num) {
            for (var i = 0; i < num; i++) {
                tempArr.push(arr[i]);
            }
            result.push(tempArr);
            arr.splice(0, num);
            tempArr = [];
            // console.log(result)
        }
        else{
            for (var i = 0; i < arr.length; i++) {
                tempArr.push(arr[i]);
            }
            result.push(tempArr);
            arr.splice(0, num);
        }

    }
    return result;
}

console.log(subArrays([1, 2, 3, 4], 2));
console.log(subArrays([5,2,6,7,8,9,4,6,8], 4));
console.log(subArrays([2,4,7,3,1,7,9,4,8,0,4,7,9,3,5,5,6,3,2,2,2,2,1], 3));
