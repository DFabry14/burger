var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) { orm.selectAll("burgers", cb) },

    insertOne: function (burgerName, cb) {
        var newBurger = {
            burger_name: burgerName,
            devoured: 0
        }
        orm.insertOne("burgers", newBurger, cb)
    },

    devour: function (burgerId, cb) {
        var condition = {
            id: burgerId,
        };
        var newValueObj = {
            devoured: 1
        }
        orm.updateOne("burgers", newValueObj, condition, cb)
    },
}

module.exports = burger;