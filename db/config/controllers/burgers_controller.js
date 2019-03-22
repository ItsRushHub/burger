var express = require("express");
var router = express.Router();
var routes = require("./controllers/burgers_controller.js");

router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(req, res) {
        res.redirect("/burgers");
    });
});









module.exports = router;