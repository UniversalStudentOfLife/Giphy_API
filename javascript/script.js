
/*
 Create a for-loop to loop through the "topics" array, for each "topic" create a button with _
that topic's string value, append/insert into a div

On button click go to api, pull 10 static (non-maving) gifs related to the button _
chosen (need to pass buttons var to the api), and append them to the page.

On gif click, play the gif, if the gif is clicked when playing pause/stop the gif.



*/

$(document).ready(function() {


	var topics = ["ramen", "shinto", "lucky cat", "baseball", "anime"];

	for(var i = 0; i < topics.length; i++) {

		//Declare the new button and assign it a variable
		newButton = $("<button>");

		//Give the new button a data/attribute value (in this case it is data-person)
		newButton.attr(topics[i]);

		//Now give the button a "label" and display the string value to be displayed to_
		// the user.	
		newButton.text(topics[i]);

		//Now append the button to the buttonContainer (the div that we keep all of our buttons in)
		$("#buttonContainer").append(newButton);

		console.log(newButton);

	}


});