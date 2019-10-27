var connection = require("./connection")

var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM ??"
        connection.query(query, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    updateOne: function (burgerName) {
        var query = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(query, [burgerName], function (err) {
            if (err) {
                throw err;
            }
           
        })
        
    },
    insertOne: function (tableInput, burgerName, cb) {
        var query = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false)";
        connection.query(query, [tableInput, burgerName], function (err, result) {
            if (err) {
                throw err;
            }
           
        });
    }

}

module.exports = orm;