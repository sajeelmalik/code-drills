//  YOUR WORK HERE

// REDO THIS RECURSIVELY! THIS SOLUTiON ONLY WORKS FOR SPECIFIC CASES!

function productivity(arr, id){

    var prod = 0;
    var minions;

    for (var i = 0; i < arr.length; i++){
        if(arr[i][0] === id){
            prod += arr[i][1];
            minions = arr[i][2];
        }
        else if(minions.includes(arr[i][0])){
            prod += arr[i][1];
        }
    }

    return prod;
}

console.log(productivity([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))