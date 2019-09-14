var Animals = ["Cats", "Dogs", "Birds", "Snakes"];




    $("#buttons-view"). on("click",function(){
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=kitten";
      $.ajax({
        url: queryURL,
        method: "GET"
      }) 
      .then(function(response){
        var imageUrl = response.data.image_original_url;

          //setting up the cat image var and giving it an image tag 
          var catImage = $("<img>");

          // giving our   var an attribute of source and the image we pulled/ assinging each image the alt cat image 
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");

          //telling it to write the image to the page before the one that was priviously pulled  after the img tag has been applied 
          $("#images").prepend(catImage)
      });
    });
      function buttonspos() {
        $('#buttons-view').empty();
        for (var i = 0; i < Animals.length; i++) {
          var b = $("<button>")
          b.addClass('animal');
          b.attr('data-name', Animals[i]);
          b.text(Animals[i])
          $("#buttons-view").append(b);
        }
      }
      $("#add-animal").on("click", function (event) {
        
        event.preventDefault();

        
        var cute = $("#animal-input").val().trim()
        Animals.push(cute);
        buttonspos();
    });

    buttonspos();