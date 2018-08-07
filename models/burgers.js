
//requiring orm so I can access the object created in that file
var orm = require("../config/orm.js");

//making an object called burger that can be called upon in burger_controllers, this object defines what will be passed into the cb functions
var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    update: function (condition, cb){
        orm.update(condition,function(res){
            cb(res);
        });
    },

    create: function (name, cb){
        orm.create(name, function(res){
            cb(res);
        })
    }
}

//exporting burger object for use in other files
module.exports = burger;