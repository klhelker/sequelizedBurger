var models = require ("../models")

module.exports = function(app) {

  app.get("/", function(req,res){
    // express callback response by calling burger.selectAllBurger
    models.Burger.findAll({}).then (function(burgerData) {

       res.render("index", {burgers: burgerData});
    });

});
  
  app.post("/burgers/create", function(req, res) {
    console.log("create route")
    console.log(req.body)
  // takes the request object using it as input for burger.addBurger
    models.Burger.create({

         burger_name: req.body.burger_name

    }).then(function(result){// wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  
});
})
app.put("/burgers/update/:id", function(req, res) {
  console.log(req.params)

  models.Burger.update({
    
    devoured: true

  },{

    where: {
      id: req.params.id
    }
  }).then(function(result){
    console.log(result)
    res.redirect("/");
  })
})
}