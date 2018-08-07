
//requiring my connection file so the ORM can access my database
var connection = require("./connection.js");

var orm = {
    //select all function only takes in a call back function and will get all of the items in my burgers table
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString,
            function (err, result) {
                if (err) throw err;
                cb(result)

            })
    },
    // update function takes in a variable named condition which will be an id number and will change my burgers devoured state from false to true
    update: function (condition, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = " + condition;
        console.log(queryString)
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // create function takes in variable named name which will be used as the burger_name when it inserted into the burgers table
    create: function (name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (" + "'" + name + "'" + ");";
        console.log(queryString)
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

//exporting my orm for use in other files
module.exports = orm;