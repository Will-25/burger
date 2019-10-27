var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            
            cb(res);
        });
    },
    insert: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            
            cb(res)
        });
    },
    update: function(col, val, cb) {
        orm.updateOne("burgers", col, val, function(res) {
            cb(res)
        })
    }
}

module.exports = burger