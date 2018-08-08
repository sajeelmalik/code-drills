$(document).submit(function (even) {
    // dont forget to prevent default
    event.preventDefault();
    // grab the show information from the form on the page
    var searchInformation;
    
    searchInformation = $("#showSearch").val();

    // console.log the input

    console.log(searchInformation);

    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=" + searchInformation;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log(response)

        // create a forloop and append the first 3 responses to the page
        for(var i = 0; i < 3; i++){

            // console.log the image and then append it to the page.            
            console.log(response[i].show.image.medium);
            $(".shows").append("<img src=" + response[i].show.image.medium + ">");
            // console.log the name of the show and append it to the page
            console.log(response[i].show.name);
            $(".shows").append("<h2>" + response[i].show.name + "</h2>");

            // console.log the genres of the show and append it to the page
            console.log(response[i].show.genres);
            $(".shows").append("<h3>" + response[i].show.genres.join(", ") + "<h3>");

            // console.log the summary of the show and append it to the page
            console.log(response[i].show.summary);
            $(".shows").append(response[i].show.summary);
            }

    });

})
