//array of sports
    var topics = ["baseball", "football", "basketball", "hockey", "golf", "tennis"];
//loop creating new button for each array item with self named attribute and adding a button class
    for (let i = 0; i < topics.length; i++) {
        $("<button>").addClass("buttons newButton waves-effect waves-light btn").text(topics[i]).attr("data", topics[i]).appendTo("#buttons");
    }
//on click function for submit button
    $("#search-term").on("click", function(event){
//keeps page from refreshing after submitting form
    event.preventDefault();
//variable to store users input in form
    let userSearch = $("#searchInput").val().trim();
    //edge casing to prevent previously searched terms
        for (let j = 0; j < topics.length; j++){
            if (userSearch === topics[j]){
            alert("Your search term has already been created")
            return false;
        }
        $("#searchInput").val("");
    }
//edge casing to prevent blank submissions
    if (userSearch === ""){
        alert("Please enter a search term");
        return false;
    } else {
//variable creating new button in same fashion as pre-made buttons
    let newItem = $("<button>").addClass("newButton waves-effect waves-light btn").text(userSearch).attr("data", userSearch).appendTo("#buttons");
//pushing new item to existing array
    topics.push(newItem.attr("data"));
//emptying search bar of previously entered text
    $("#searchInput").val("");
}
});
//when items with newButton class are clicked...(document.body to interact with newly created buttons)
    $(document.body).on("click", ".newButton", function (){
//assign the attribute to a variable
        let queryQ = $(this).attr("data");
//queryURL with api key and parameters for searching a string. adding our new variable to the search parameter and limiting to 11 gifs shown
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=GGeKTCSE02cHbMZa9iAP9NVjkYS9g9i1&q=" + queryQ + "&limit=11";
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
//same for the images but with an image tag and assigning the still and animated states
                var gif = $("<img>").addClass("gif").attr("src", results[i].images.fixed_height_still.url).attr("data-animate", results[i].images.fixed_height.url).attr("data-still", results[i].images.fixed_height_still.url).attr("data-state", "still").appendTo(p);
            }
//when the image with the class of .gif is clicked....
        $(".gif").on("click", function(){
//making a variable to store the gifs current state
            let state = $(this).attr("data-state");
//if else statement changing from still to animate on click and vice versa
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", ("animate"));
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", ("still"));
            }
        });
    });
});