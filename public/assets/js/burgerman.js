$(document).ready(function () {
   

    $(".btn1").on("click", function () {
        var input = $("#burgerInput").val()
        if(input === "") {
            alert("name a burger!")
        } else {
            newBurger = {
                name: input,
                devoured: false
            }
            $("#burgerInput").val("")
           
    
    
            $.post("/", newBurger).then(function() {
             
            })
        }
       
        
      
    })

})