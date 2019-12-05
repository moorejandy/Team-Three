// Create a funtion that will run the materialbox from the materialize library
$(document).ready(function(){
  $('.materialboxed').materialbox();
});
// Whenever the submit button is pressed, this code happens
$("#submitbutton").on("click", function(event) {
  event.preventDefault();
// The submit button will start a new search that will erase what's inside the current harvard Div
  $("#harvard-view").empty();
// A variable called queryURL will search for the topic the user inputs from the API
  var topic = $("#userinput").val();
  var queryURL = "https://api.harvardartmuseums.org/object?&keyword=" + topic + "&classification=Paintings&apikey=c2e6e320-0e08-11ea-8848-2bf2bad4b97b";
  // Using an AJAX to find information from the API by using the GET method.
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  // After that search is executed, this code will happen.
    .then(function(response) {
      var results = response.records;
      // A for loop will run through the Results Array 
      for (var i = 0; i < results.length; i++) {
        // Creating a div in which we will append all the information we want.       
        var harvardDiv = $("<div>");
        // Creating a paragraph to include the artist of the searched resource
        var p = $("<p>").text("Artist: " + results[i].people[0].displayname);
        // bypassing possible errors due to differences in the API documentation setup     
        try {
          // Creating the image   
          var harvardImage = $("<img>");
          // Generating the source of the images   
          harvardImage.attr("src", results[i].images[0].baseimageurl);
          // Add a class to the image for styling.   
          harvardImage.addClass("harvard-image materialboxed responsive-img");
          // Append the information found to the website/html.
          harvardDiv.append(p);
          harvardDiv.append(harvardImage);
        }
        // If the code before encounters any errors, let the for loop continue without populating any divs or images that are empty.
        catch(err) {
        }
        // Add all the images to a div which will store the information from the Harvard API.
        $("#harvard-view").prepend(harvardDiv);
        // Run the function materialbox to make the zoom in happen on the images from Harvard API 
        $('.materialboxed').materialbox();
      };
    });

  
});
