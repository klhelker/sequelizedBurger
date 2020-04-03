var express = require("express");
var router = express.Router();
var models = require("../models");

module.exports = function(router) { 
// get route -> index
router.get("/", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  models.Burger.findall({}).then (function(results) {
     res.render("index", {burger_data:results});
  });

});

router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  models.Burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  models.Burger.update(req.params.id, function(result) {
    
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});r
};

module.exports = router;
