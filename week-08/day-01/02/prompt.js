//  YOUR WORK HERE

function staircase(num) {

    var hashes = "#"
    var spaces = " ";

    for (var i = 0; i < num; i++){
        spaces += " ";
    }

    for (var i = 0; i < num; i++) {
        console.log(hashes + spaces);
        hashes += "#";
        // spaces;

    }
}

staircase(7);
