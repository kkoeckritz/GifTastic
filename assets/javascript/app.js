// get button onclick
$("#cat-button").on("click", function() {

    // giphy api endpoint
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // send request for ajax from giphy
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // with the response...
      .then(function(response) {

      // grab responded image URL
        var imageUrl = response.data.image_original_url;

        // create a new img element
        var catImage = $("<img>");

        // apply image URL to new img element
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        // prepend new img to page. Done. 
        $("#images").prepend(catImage);
      });
  });