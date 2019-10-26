var express = require("express")
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function(req, res) {
    
    burger.all(function(data) {
        
        var burger = {
            name: data
        }
        res.render("index", burger)
        
        
        
        
    })
})

router.post("/", function(req) {
    burger.insert([req.body.name], ["burger_name"], function(result) {
        res.json({ id: result.insertId })
    })
    

})

module.exports = router;