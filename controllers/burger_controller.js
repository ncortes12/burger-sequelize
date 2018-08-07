
//setting up all of my dependencies for this file
var db = require("../models");



//app.get will use the selectAll functions set up on orm.js and burgers.js to access the burgers_db and display all the burgers in the burger table
module.exports = function (app){
    console.log("loading")
app.get("/", function (req, res) {
    console.log("working")
    db.burger.findAll().then(function(result){
        console.log(result)
        var hbsObject = {
            burger:result
        }
        
        res.render("index", hbsObject)
    })
})

// // router.put will use the update functions set up in orm.js and burger.js and will update the devoured state of the burger from false to true
// router.put("/api/burgers/:id", function (req, res) {
//     var condition = req.params.id;
//     console.log("condition", condition);
//     console.log(req.body);
//     burger.update(condition, function (result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     })
// })

// //router.post will use the create functions set up in orm.js and burger.js and will add a burger to the burger table
// router.post("/api/burgers", function (req, res) {
//     console.log(req.body.name);
//     burger.create([req.body.name], function (result) {
//         res.json({ id: result.insertId })
//     })
// })
}

