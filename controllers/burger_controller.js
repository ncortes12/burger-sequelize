
//setting up all of my dependencies for this file
var db = require("../models");



//app.get will use the selectAll functions set up on orm.js and burgers.js to access the burgers_db and display all the burgers in the burger table
module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("working")

        db.burger.findAll().then(function (result) {
            // console.log(result)
            var hbsObject = {
                burger: result
            }

            res.render("index", hbsObject)
        })
    })

    // // router.put will use the update functions set up in orm.js and burger.js and will update the devoured state of the burger from false to true
    app.put("/api/burgers/:id", function (req, res) {
        var condition = req.params.id;
        console.log("condition", condition);
        console.log(req.body);
        // burger.update(condition, function (result) {
        //     if (result.changedRows == 0) {
        //         return res.status(404).end();
        //     } else {
        //         res.status(200).end();
        //     }
        // })
        db.burger.update({ devoured: req.body.devoured },
            {
                where: { id: condition }
            }).then(function (result) {
                res.json(result)
            })
    })

    //app.post will use the create functions set up in orm.js and burger.js and will add a burger to the burger table
    app.post("/api/burgers", function (req, res) {
       db.burger.create({ burger_name: req.body.name }).then(function (result) {
            res.json(result)
        })
    })
}

