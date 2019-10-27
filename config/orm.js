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

    updateOne: function (vals, id, cb) {
        
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [vals, id], function (err, result) {
            if (err) {
                throw err;
            }
           cb(result)
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