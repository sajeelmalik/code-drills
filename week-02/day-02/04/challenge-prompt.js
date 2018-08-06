// define a function "warble" that takes in a string as an argument,
// appends " arglebargle" to the end of it, and returns the result

function warble(str){
    return str += " arglebargle";
}
//or you can have .concat

// console log the result of calling your "warble" function with the argument "hello"

console.log(warble("hello"));

// define a function "wibble" that takes a string as an argument,
// console logs the argument, prepends "wibbly " to the argument, and returns the result

function wibble(str){
    console.log(str)
    str = "wibbly " + str;
    return str;
}


// console log the result of calling your "wibble" function with the argument "bibbly"

console.log(wibble("bibbly"));


// define a function "consoleSum" that takes in two numbers as arguments
// and console logs the sum of those two numbers

function consoleSum(x, y){
    console.log(x + y);
}


// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 5");
consoleSum(2, 3);

// define a function "returnSum" that takes in two numbers as arguments
// and returns the sum of those two numbers

function returnSum(x, y){
    return x + y
}


// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 12");
console.log(returnSum(5, 7));

// using either "consoleSum" or "returnSum" and no mathematical operators,
// define a function that takes in 3 arguments and finds the sum of those 3 numbers

function sumThree(x, y, z){
    return returnSum(returnSum(x, y), z);
}



// define a function "danceParty" that takes in a string as an argument,
// creates an alert that says "dance!",
// saves the result of calling your "wibbly" function with that argument,
// saves the result of calling your "warble" function with that argument,
// concatenates the two results together and returns that string

function danceParty(str){
    alert("dance!");
    var one = wibble(str);
    var two = warble(str);
    return one + " " + two;
}


// console log the result of calling your "danceParty" function with your name as the argument

console.log(danceParty("sajeel"));
