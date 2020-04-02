<h1>Gif Me Some Gifs!</h1>

<h4>Link</h4>
<p>https://cdvincent.github.io/Gif-Me-Some-Gifs/</p>

<h4>Technology used</h4>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Giphy API</li>
    <li>Ajax</li>
    <li>JQuery</li>
</ul>

<h2>Description</h2>
<p>Gif Me Some Gifs! is an application that interfaces with the Giphy API to display gifs to the page based on the users search. There are pre-made buttons at the top of the page - click them to show 11 gifs from that category. The gifs are still to begin with. The gif will respond to a users click by animating if it is still, and vice versa if the gif is animated.</p>

<p>There is a search box on the right of the page. The user is able to enter a seach term to make a new button for that category. Once the button is created and appended to the top of the page, they may click it to see 11 gifs from that category.</p>

<p>The app will display an alert if the user enters a search term that has already been entered, or if the search is blank.</p>

<h2>Development</h2>
<p>The app usees Jquery to dynamically create a new button with the users search displayed as text. When a button is clicked, an Ajax call is fired using the buttons text as a parameter in the URL query,as well as a limit of 11 gifs to display cleaner on the page. The Ajax call will return the rating from the Giphy API as well, and append it to the corresponding gif displayed on the page. There are "still" and "animated" images taken from the API as well, and added as attributes. The gifs have an on-click that changes the class using JQuery to "animate" or "still" depending what the current class is.</p>