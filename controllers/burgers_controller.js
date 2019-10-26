var express = require("express")
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function(req, res) {
    res.render("index")
    burger.all(function(data) {
        
        var burger = {
            burgers: data
        }
        
        
        
        
        
    })
})

router.post("/", function(req, res) {
    burger.insert([req.body.name], ["burger_name"], function(result) {
        res.json({ id: result.insertId })
    })
    
    

})

router.put("/", function(req, res) {
    
    burger.update({
        devoured: req.body.devoured
    })

})

module.exports = router;