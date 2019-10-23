//array of sports
    var topics = ["baseball", "football", "basketball", "hockey", "golf"];

//loop creating new button for each array item with self named attribute and adding a button class
    for (let i = 0; i < topics.length; i++) {
        $("<button>").addClass("newButton").text(topics[i]).attr("data", topics[i]).appendTo("#buttons");
    }
//on click function for submit button
    $("#search-term").on("click", function(){
//keeps page from refreshing after submitting form
    event.preventDefault();
//variable to store users input in form
    let userSearch = $("#searchInput").val().trim();
//variable creating new button in same fashion as pre-made buttons
    let newItem = $("<button>").addClass("newButton").text(userSearch).attr("data", userSearch).appendTo("#buttons");
//emptying search bar of previously entered text
    $("#searchInput").val("");
    
    });
//when items with newButton class are clicked...(document.body to interact with newly created buttons)
    $(document.body).on("click", ".newButton", function (){

//assign the attribute to a variable
        let queryQ = $(this).attr("data");
        console.log(queryQ);
        
//queryURL with api key and parameters for searching a string. adding our new variable to the search parameter and limiting to 10 gifs shown
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=GGeKTCSE02cHbMZa9iAP9NVjkYS9g9i1&q=" + queryQ + "&limit=10";
//calling ajax and getting the information instead of putting
        $.ajax({
            url: queryURL,
            method: "GET"
        })
//once the ajax is loaded...
        .then(function(response) {
//assigning variable to object from the API
            let results = response.data;
//for loop to iterate through the 10 gifs
            for (let i = 0; i < results.length; i++){
//assigning a variable for each gifs rating and creating a new p tag in the showGifs div to print the rating
                let rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating).prependTo("#showGifs");
//same for the images but with an image tag and assigning the still source as an attribute...
                var stillGif = $("<img>").addClass("gif").attr("src", results[i].images.fixed_height_still.url).attr("state", "still").appendTo(p);
//and another assigning the animated gif source as an attribute
                var animateGif = $("<img>").addClass("gif").attr("src", results[i].images.fixed_height.url).attr("state", "animate")
            }


    });
});