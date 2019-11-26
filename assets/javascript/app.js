// displayNatureInfo function re-renders the HTML to display the appropriate content
// function displayNatureInfo() {  


//   Creates AJAX call for the specific button being clicked
$("#submitbutton").on("click", function(event) {

  event.preventDefault();

  var topic = $("#userinput").val();
  console.log(topic);
  var queryURL = "https://api.harvardartmuseums.org/object?&title=" + topic + "&classification=Paintings&apikey=c2e6e320-0e08-11ea-8848-2bf2bad4b97b";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      // console.log(queryURL);

      // console.log(response);
      // storing the data from the AJAX request in the results variable
  
      var results = response.records;
      console.log(results);
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            console.log(results.length);

            // Creating and storing a div tag
            var natureDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Artist: " + results[i].people[0].displayname);

            console.log("Results.lenght:" + results.length);

            console.log("-----------");

            console.log("Results[i]" + results[i]);

            console.log("-----------");

            // console.log(results.length);

            // Creating and storing an image tag
            var natureImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            natureImage.attr("src", results[i].images[0].baseimageurl);
            // natureImage.attr("data-animate", results[i].images.fixed_height.url);
            // natureImage.attr("data-still", results[i].images.fixed_height_still.url);
            // natureImage.attr("data-state", "still");
            natureImage.addClass("nature-image");

            console.log(natureImage);
            // Appending the paragraph and image tag to the animalDiv
            natureDiv.append(p);
            natureDiv.append(natureImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gif-view").prepend(natureDiv);
          }
    });

    
        
        // This line grabs the input from the textbox
        
  
        // Adding topic from the textbox to array
  
      //empty value from text box after button is created
  
      $("#userinput").val("");
        // Calling renderButtons which handles the processing of topics array
        // renderButtons();
  
      });

    // The gallery contains information on physical places/Could serve us for people planning a trip.

    // records.0.people[i].displayname