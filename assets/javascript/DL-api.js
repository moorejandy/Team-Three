// displayNatureInfo function re-renders the HTML to display the appropriate content
// function displayNatureInfo() {  
//hey hey..
//heheyeeh
// wwww
//   Creates AJAX call for the specific button being clicked
$("#submitbutton").on("click", function(event) {

  event.preventDefault();

  $("#DL-view").empty();

  var topic = $("#userinput").val();
  console.log(topic);
  var queryURL = "https://api.dp.la/v2/items?q=" + topic + "&api_key=5c4603463765ce810bdce183c7464c97";

//   https://api.dp.la/v2/items?q=kittens&api_key=5c4603463765ce810bdce183c7464c97

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      // console.log(queryURL);

      // console.log(response);
      // storing the data from the AJAX request in the results variable
    //   var limit = 10
      var results = response.docs;
      console.log(results);
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // if ((results[i].sourceResource.format) == "Electronic resource,Language material") {

            // console.log(results.length);

            // Creating and storing a div tag
            var bookDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating

            // var p = $("<p>").text("Format: " + results[i].sourceResource.format);
            var p2 = $("<p>").text("Title: " + results[i].sourceResource.title);
            // var address = $("<p>").text("HaSvIEW: " + results[i]["@id"]);
            var address = $("<p>").text("Link: " + results[i].isShownAt);

            // var p = $("<p>").text("Title: " + results[i].isShownAt.title[0]);


            try {
            // Creating and storing an image tag
            var bookImage = $("<img>");
            // // Setting the src attribute of the image to a property pulled off the result item
            bookImage.attr("src", results[i].object);
            
            // natureImage.attr("data-still", results[i].images.fixed_height_still.url);
            // natureImage.attr("data-state", "still");
            bookImage.addClass("dl-image");
            bookImage.attr("alt-text", "this is an image");

            bookDiv.append(p2);
            bookDiv.append(bookImage);
            
            bookDiv.append(address);
        }

        catch(err) {

        }

            // Appending the paragraph and image tag to the animalDiv
            // bookDiv.append(p);
            
            

        
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#DL-view").prepend(bookDiv);

            // i++;


        // };
            };
          
            // console.log("Results.lenght: NEW API" + results.length);

            // console.log("-----------");

            // console.log("Results[i] NEW API" + results[i]);

            // console.log("-----------");
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

     // console.log(results.length);

            

            // console.log(natureImage);