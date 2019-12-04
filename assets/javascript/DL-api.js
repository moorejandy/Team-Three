// Whenever the submit button is pressed, this code happens
$("#submitbutton").on("click", function(event) {
  event.preventDefault();
// The submit button will start a new search that will erase what's inside the current books Div
  $("#DL-view").empty();
// A variable called queryURL will search for the topic the user inputs from the API
  var topic = $("#userinput").val();
  var queryURL = "https://api.dp.la/v2/items?q=" + topic + "&api_key=5c4603463765ce810bdce183c7464c97";
// Using an AJAX to find information from the API by using the GET method.
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After that search is executed, this code will happen.
    .then(function(response) {
      var results = response.docs;
      // A for loop will run through the Results Array 
      for (var i = 0; i < results.length; i++) {
        // Creating a div in which we will append all the information we want. 
        var bookDiv = $("<div>");
        // Creating a paragraph to include the title of the searched resource
        var p2 = $("<p>").text("Title: " + results[i].sourceResource.title);
        // Creating a link to where the resource is found
        var address = $("<a>");
        address.attr("href", results[i].isShownAt);
        address.text("Click here for more info");
        // Creating a paragraph that will contain the link
        var par = $("<p>");
        // bypassing possible errors due to differences in the API documentation setup 
        try {
          // Creating the image 
          var bookImage = $("<img>");
          // Generating the source of the images 
          bookImage.attr("src", results[i].object);
          // Add a class to the image for styling. 
          bookImage.addClass("dl-image");
          bookImage.attr("alt-text", "this is an image");
          // Append the information found to the website/html.
          bookDiv.append(p2);
          bookDiv.append(bookImage);
          par.append(address);
          bookDiv.append(par);
        }
        // If the code before encounters any errors, let the for loop continue without populating any divs or images that are empty.
        catch(err) {
        }
        // Add all the images to a div which will store the information from the DL API. 
        $("#DL-view").prepend(bookDiv); 
        };    
    });
  // Empty out the search to ready the website for a new search.
  $("#userinput").val("");       
});
