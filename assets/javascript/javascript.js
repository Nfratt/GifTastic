var topics= ["Cats", "Dogs", "Birds", "Snakes"];
  var input=$(this).attr("data-name");

    $("#buttons-view"). on("click",function(){
  
      $("#gifs-go-here").empty();
      var queryURL = "https://api.giphy.com/v1/gifs/search?q="+
      input +"(KEY HERE)";
      $.ajax({
        url: queryURL,
        method: "GET"
      }) 
      .then(function(response){
        var imageUrl = response.data;
        for (var i = 0; i < imageUrl.length; i++) {
         
          //setting up the animal image var and giving it an image tag 
          var aniImage = $("<img>");

          
          // giving our   var an attribute of source and the image we pulled/ assinging each image the alt cat image 
          aniImage.attr("src",imageUrl[i].images.original.url)
          aniImage.attr("data-still", imageUrl[i].images.original_still.url);
          aniImage.attr("data-animate", imageUrl[i].images.original.url);
          aniImage.attr("alt", "animal image");
          aniImage.attr("data-state","still");
          aniImage.attr("class","gif");
         
          var rating = response.data[i].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
               aniImage.append(pRating)


          //telling it to write the image to the page before the one that was priviously pulled  after the img tag has been applied 
          $("#gifs-go-here").prepend(aniImage)
        }
  
      $("#add-animal").on("click", function (event) {
        
        event.preventDefault();

        
        var cute = $("#animal-input").val().trim()
        topics.push(cute);
        buttonspos();
    });
    // function writed(){
      

      });
  });
 
    $(".gif").on("click", function() {
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
  
    function buttonspos() {
      $('#buttons-view').empty();
      for (var i = 0; i < topics.length; i++) {
        var b = $("<button>")
        b.addClass('animal');
        b.attr('data-name', topics[i]);
        b.text(topics[i])
        $("#buttons-view").append(b);
      }
    }
  // writed();
    buttonspos();
