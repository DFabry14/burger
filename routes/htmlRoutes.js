var orm = require("../config/orm");

module.exports = function (app) {
    app.get("/", function (req, res) {
        orm.selectAll(function (err, result) {
            res.render("index", { burger: result })
        });
    })
    app.post("/", function (req, res) {
        orm.insertOne(req.body.burger, function (err, result) {
            res.redirect("/")
        })
    })
    app.put("/", function (req, res){
        orm.updateOne(req.body.devoured, function (err, result) {
            
        })
    })
}