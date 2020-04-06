var models = require ("../models")
// get route -> index
module.exports = function(app) {

  app.get("/burgerss", function(req,res){
    // express callback response by calling burger.selectAllBurger
    models.Burger.findall({}).then (function(burgerData) {
       res.render("index", {burger_data: burgerdata});
    });

});

 app.post("/burgers/createa", function(req, res) {
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

  models.Burger.update({
    
    devoured: true

  },{

    where: {
      id: req.params.id
    }

  }).then(function(results){
    console.log(result)
    // render back to index with handleconsole.log(result);
    // Send back response and let page reload from .then in Ajax
    res.redirect('/');
  })
  
});

}