var Animals = ["Cats", "Dogs", "Birds", "Snakes"];



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