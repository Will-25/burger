var express = require("express")
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function (req, res) {
    
    burger.all(function(data) {
     
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
        
    })
})

router.post("/", function (req, res) {
    
    burger.insert([req.body.name], ["burger_name"], function (result) {
        res.json({ id: result.insertId })
    })

})

router.put("/", function (req, res) {
 
    burger.update
})


module.exports = router;