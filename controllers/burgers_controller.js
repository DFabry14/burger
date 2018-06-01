var burger = require("../models/burger");

module.exports = function (app) {
    app.get("/", function (req, res) {
        burger.selectAll(function (result) {
            res.render("index", { burger: result })
        });
    })
    app.post("/", function (req, res) {
        burger.insertOne(req.body.burger, function (result) {
            res.redirect("/")
        })
    })
    app.put("/burgers/:id", function (req, res) {
        console.log("req.params.id", req.params);
        burger.devour(req.params.id, function (result) {
            res.sendStatus(200);
        })
    })
}