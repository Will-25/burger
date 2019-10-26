var connection = require("./connection")

var orm = {
    selectAll: function(tableInput) {
        var query = "SELECT * FROM ??"
        connection.query(query, [tableInput], function(err, result) {
           if (err) {
               throw err;
           }
            
            
        });
        
    }, 

    updateOne: function(tableInput, burgerName, cb) {
        var query = "UPDATE ?? SET devoured = true WHERE burger_name = ?";
        connection.query(query, [tableInput, burgerName], function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        })
    },

    insertOne: function(tableInput, burgerName, cb) {
        var query = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false)";
        connection.query(query, [tableInput, burgerName], function(err, result) {
            if (err) {
                throw err;
            }
          
        })
    }
    
}

module.exports = orm;