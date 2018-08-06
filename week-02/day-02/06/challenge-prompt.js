var alphabet = "abcdefghijklmnopqrstuvqxyz";
var pressed = [];

document.onkeyup = function(input){
    if(alphabet.includes(input.key.toLowerCase())){
        document.getElementById("lala").textContent = input.key;
        pressed.push(input.key.toLowerCase());
        document.getElementById("letters").textContent = pressed.join(", ");
    }
    else{
        document.getElementById("lala").textContent = "Press a letter you buffoon!!!";
    }

}