// Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

// Set up express
var app = express();

// Set up port
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: false}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


// Port Listener
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });