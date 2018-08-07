
//setting up all of my dependencies for this file
var express = require("express");
var burger = require("../models/burgers.js");
var router = express.Router();


//router.get will use the selectAll functions set up on orm.js and burgers.js to access the burgers_db and display all the burgers in the burger table
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

// router.put will use the update functions set up in orm.js and burger.js and will update the devoured state of the burger from false to true
router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;
    console.log("condition", condition);
    console.log(req.body);
    burger.update(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

//router.post will use the create functions set up in orm.js and burger.js and will add a burger to the burger table
router.post("/api/burgers", function (req, res) {
    console.log(req.body.name);
    burger.create([req.body.name], function (result) {
        res.json({ id: result.insertId })
    })
})

//exporting router for use in other files
module.exports = router;