var connection = require("./connection.js");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function () {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    updateOne: function () {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    }
}

module.exports = orm;