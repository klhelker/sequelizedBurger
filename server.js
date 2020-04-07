var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models")


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

require("./controllers/burgersController.js")(app)

// app.use(routes);

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
