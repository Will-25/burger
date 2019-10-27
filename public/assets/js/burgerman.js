$(document).ready(function () {


    $(".btn1").on("click", function () {
        var input = $("#burgerInput").val()
        if (input === "") {
            alert("name a burger!")
        } else {
            newBurger = {
                name: input,
                devoured: false
            }
            $("#burgerInput").val("")



            $.post("/", newBurger).then(function () {

            })
        }



    })

    $(".btn2").on("click", function () {
        var borgor = {
            burger_name: "Burger with Frick sauce"
        }
        $.ajax({
            url: "/",
            type: "POST",
            data: borgor
        }).then(function () {

        })
    })

})