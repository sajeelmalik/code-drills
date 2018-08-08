$(document).ready(function(){

    $("button").on("click", function(event){
        event.preventDefault();
        $("#name").text($("#firstname").val() + " " + $("#lastname").val());

        $("#occupation").text($("#occupationText").val());

        $("#location").text($("#cityText").val() + ", " + $("#stateText").val());

    });

});