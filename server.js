//imports the npm packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

//creates the express server
var app = express();

//defines the port to use
var PORT = process.env.PORT || 8080;

//sets the express server to use body parser to handle json
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=
app.use(methodOverride("_method"));

//tells the server to set a static folder to send all internal files as at the directory of assets
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

//starts the listener
app.listen(PORT);