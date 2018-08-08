// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

setTimeout(function(){
    alert("Question 1");}, 5000);

clearTimeout(question2);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

var question2 = setTimeout(function(){
    alert("Question 2");
}, 15000);


// Remove the timer you just made for Question 2

clearTimeout(question2);
console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

var question3p1 = setTimeout(function(){
    alert("Question 3 Part 1");
}, 15000);

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds

setTimeout(function(){
    alert("Question 3 Part 2");
}, 16000);

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(question3p1);

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
var tada = new Audio("tada.mp3");

setTimeout(function(){
    tada.play();
    console.log("Question 5 Complete!");
}, 11000);

