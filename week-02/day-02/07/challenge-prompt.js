var numbers = "1234567890";
var operators = "+-/*=c";
var valid = numbers + operators;
var inputs = [];

function operation(inputs){
    var num1 = "";
    var num2 = "";
    var operator;

    for(var i = 0; i < inputs.length; i++){
        if(!operator){
            num1 = num1 + inputs[i];
        }
        else{
            if (inputs[i] === "+" || inputs[i] === "-" || inputs[i] === "*" || inputs[i] === "/"){
                operator = inputs[i];
              }     
            else{
                num2 = num2 + inputs[i];
            }

        }
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1/num2;
    }

}


document.onkeyup = function(input){

    var click = input.key;

    if(valid.includes(click)){
        if(click === "c"){
            inputs = [];
            document.getElementById("results").textContent = "";
        }
        else if(click === "="){
            var result = operation(inputs);
            document.getElementById("results").textContent = result;
        }
        
    }
    
}