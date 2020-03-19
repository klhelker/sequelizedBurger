var express = require("express");
var db = require("./models")
// var routes = require("./controllers/burgersController.js");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync().then(function(){

  app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });
})


