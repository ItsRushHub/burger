var express = require("express");
var router = express.Router();
var routes = require("./controllers/burgers_controller.js");

router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});










module.exports = router;