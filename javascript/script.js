
/*
 Create a for-loop to loop through the "topics" array, for each "topic" create a button with _
that topic's string value, append/insert into a div

On button click go to api, pull 10 static (non-maving) gifs related to the button _
chosen (need to pass buttons var to the api), and append them to the page.

On gif click, play the gif, if the gif is clicked when playing pause/stop the gif.



*/

$(document).ready(function() {

	//This will be the array for us to stor our default topics in.
	var topics = ["ramen", "shinto", "lucky cat", "baseball", "anime"];

	//This is our forloop for creating and appending buttons to the page base_
	// on the opics in the container.
	
buildButtons();


function buildButtons() {

$("#buttonContainer").empty();

	for(var i = 0; i < topics.length; i++) {

		//Declare the new button and assign it a variable
		var newButton = $("<button>");

		//Give the new button a data/attribute value (in this case it is data-person)
		newButton.attr(topics[i]);

		//Now give the button a "label" and display the string value to be displayed to_
		// the user.	
		newButton.text(topics[i]);
		newButton.addClass("gif");

		//Now append the button to the buttonContainer (the div that we keep all of our buttons in)
		$("#buttonContainer").append(newButton);

		console.log(newButton);
	}
}


	$("#addGif").on("click", function(){


		var inputString = $("#inputField").val()

		console.log(inputString);


		//Declare the new button and assign it a variable
		var newStrange = $("<button>");

		//console.log("inside addGif");

		//Give the new button a data/attribute value (in this case it is data-person)
		newStrange.attr(inputString);

		//Now give the button a "label" and display the string value to be displayed to_
		// the user.	
		newStrange.text($("#inputField").val());
		newStrange.addClass("gif");

		//Now append the button to the buttonContainer (the div that we keep all of our buttons in)

		topics.push(inputString);
		buildButtons();

		console.log(newStrange);

	})


	$("button").on("click", function(){


		alert("Button Clicker");

	})

$("body").on("click", "button", function(){
		var buttonAttr = $(this).text().trim().toLowerCase();
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonAttr + "&api_key=dc6zaTOxFJmzC&limit=10";

		console.log(buttonAttr);

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			var results = response.data;

			for(var i = 0; i < results.length; i++){

				var rating = results[i].rating;
				var gifDiv = $("<div class='gif'>");
				var paragaph = $("<p>");
				var stillGif = results[i].images.fixed_height_still.url;
              	var animatedGif = results[i].images.fixed_height_downsampled.url;
              	var gifImage = $("<img>");

              	console.log("Still" + results[i] + "url: " + stillGif);
              	console.log("Animated", results[i],  "url: ", animatedGif);

				paragaph.text("Rating: " + rating);


				$(gifImage).attr("src", stillGif);
				$(gifImage).attr("data-still", stillGif);
				$(gifImage).attr("data-animate", animatedGif);
				$(gifImage).attr("data-state", "still");
				$(gifImage).addClass("gif");

				$(gifDiv).prepend(paragaph);
				$(gifDiv).prepend(gifImage);

				$("#gifContainer").prepend(gifDiv);

			}



			
			$("img").on("click", function() {
			      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
			      
			      console.log("You clicked a Gif!")

			      var state = $(this).attr("data-state");
			      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
			      // Then, set the image's data-state to animate
			      // Else set src to the data-still value
			      if (state === "still") {
			        $(this).attr("src", $(this).attr("data-animate"));
			        $(this).attr("data-state", "animate");
			      } else {
			        $(this).attr("src", $(this).attr("data-still"));
			        $(this).attr("data-state", "still");
			      }
			    });




		})


	});



});