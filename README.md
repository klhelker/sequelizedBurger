# sequelizedBurger
Sequelized! (Basic to Moderate)


Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.


That means:


Replacing your MySQL Burger model with a Sequelized equivalent.


Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.

There's no option to include that default in the command line, so you'll need to open up your editor to make this change.



Don't forget to sync the models!


Edit your new config.json file to include your database configurations. Place your JawsDB details in the production property of your json file; the details of your local database go in the developer property.


Remove your old ORM file, as well as any references to it in burgers_controller.js. Replace those references with Sequelize's ORM methods.






When you finish, your site should function just like your last one: