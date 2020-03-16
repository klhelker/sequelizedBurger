var  = require("../config/"? where orm was");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    "?where Orm was".create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    "?whereORM was".update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
