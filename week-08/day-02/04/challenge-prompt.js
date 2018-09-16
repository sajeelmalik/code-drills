// First Three Function


// The `firstThree` function will console log "Hello, I have been run X times"
// where `X` is the number of times it's been run so far; then it will return 
// true. after it has been run 3 times, subsequent invocations of this function 
// will not console log anything and return false.
//
// -------------------- Your Code Here --------------------

// solved without hint
function runs() {

    var timesRun = 0;

    function runTimes() {
        timesRun++;
        console.log("Hello, I have been run " + timesRun + " times!");
        return true;
    }

    return runTimes;
}

firstThree = runs();


// -------------------- End Code Area ---------------------


console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
