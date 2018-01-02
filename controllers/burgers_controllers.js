//imports the npm package
var express = require("express");

//creates the router controller from the express servers
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//main index route that grabs all the info
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//main post route that creates the new burger
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured", "ordered"
  ], [
    req.body.name, false, new Date()
  ], function() {
    res.redirect("/");
  });
});

//main update route for the devour button
router.put("/:id", function(req, res) {
  burger.update({
    devoured: true
  }, req.params.id, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
