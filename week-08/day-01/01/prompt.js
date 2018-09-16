//  YOUR WORK HERE


function digits(num){
    var stringNum = num + "";
    var sum = 0;

    for (var i = 0; i < stringNum.length; i++){
        sum += parseInt(stringNum[i]);
    }

    if ((sum + "").length > 1){
        return digits(sum);
    }
    else{
        return sum;
    }
}

console.log(digits(8782))