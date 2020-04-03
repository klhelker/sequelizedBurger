var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models")
// var routes = require("./controllers/burgersController.js");
var models = require("./models");

var PORT = process.env.PORT || 8080;
var app = express();

const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// app.use(routes)
app.get("/", function(req, res) {
  console.log(models.Burger)
  // express callback response by calling burger.selectAllBurger
  models.Burger.findAll({}).then (function(results) {
     res.render("index", {burger_data:results});
  });

});
app.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  console.log(req.body);
  models.Burger.create(req.body, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log("hi", result);
    res.redirect("/");
  });
});

app.put("/burgers/:id", function(req, res) {
  models.Burger.update(req.params.id, function(result) {
    
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

app.engine("handlebars", exphbs({ 
  defaultLayout: "main",
  handlebars : allowInsecurePrototypeAccess(Handlebars) 
}));
app.set('view engine', 'handlebars');

db.sequelize.sync().then(function(){

  app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });
})


