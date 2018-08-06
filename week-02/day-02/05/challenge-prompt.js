var response;

document.onkeyup = function(input){
    if(input.key.toLowerCase() === "h"){
        response = confirm("Are you hungry");
    }

    if(input.key.toLowerCase() === "k"){
        if(response){
            alert("Hello");
        }
        else{
            alert("No thanks");
        }
    }
}