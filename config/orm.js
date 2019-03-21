var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ?? WHERE ?? =?";
        connection.query(queryString,[tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, cols, values) {
        var queryString = "INSERT INTO" + table;
        connection.query(queryString, [values], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, cols, values) {
        var queryString = "UPDATE" + table;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};



module.exports = orm;