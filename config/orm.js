var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    insertOne: function (tableName, newObj, cb) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [tableName, newObj], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    updateOne: function (tableName, newValueObj, conditionObj, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableName, newValueObj, conditionObj], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    }
}

module.exports = orm;