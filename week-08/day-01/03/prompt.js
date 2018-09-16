//  YOUR WORK HERE

function pyramid(num){

    var hashes = "#"
    var spaces = " ";

    for (var i = 0; i < 7; i++){
        spaces += " ";
    }
    // console.log(spaces)
    // console.log(spaces.split("").splice(1, (spaces.length-1)).join(""))

    for (var i = 0; i < num; i++) {
        console.log("`" + spaces + hashes + spaces + "`");
        hashes += "##";

       spaces = spaces.split("").splice(1, (spaces.length-1)).join("");

    }
}

pyramid(6);