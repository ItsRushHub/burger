// var routes = require("./controllers/burgers_controller.js");
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });
  
  router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("index", { burger_data: burgerData });
    });
  });

// Post route
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/burgers");
  });
});


router.put("/burgers/create", function(req, res) {
  burger.create(req.body.burger_id, function(result) {
    res.redirect("/burgers");
  });
});


module.exports = router;