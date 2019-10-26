$(document).ready(function () {
   

    $(".submitButton").on("click", function (event) {
        event.preventDefault();
        newBurger = {
            name: $("#burgerInput").val(),
            devoured: false
        }


        $.post("/", newBurger).then(function(data) {
          
        })
      
    })

})