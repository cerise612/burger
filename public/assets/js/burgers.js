// var ajax = require(router);


$(document).ready(function(){

  $("#devouredRadio").hide()

});

$(function() {

  
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        $("#devoured").append(id);
        var newDevouredState = {
          devoured: newDevoured
        };
        // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );  


    });


$("#submitButton").click(function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
console.log("working")
    var newBurger = {
      name: $("#bn").val().trim(),
      devoured: $("devoured").val()
    };
    $("#eat").append(newBurger)

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
          // Send the GET request.
          $.get("/", function(burgers){
            alert("burgers " + burgers);
          }).then(
            function() {
              console.log("get");
              // Reload the page to get the updated list
              location.reload();
            }
          );
  });
});
