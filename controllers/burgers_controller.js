//initialize express
var express = require("express");

// create a router to handle the URL requests 
var router = express.Router();

// import the model
var burger = require("../models/burger.js");

// get request for the homepage
router.get("/", function(req,res){
    //show all the burgers stored in the database
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        // pass the data to handlebar file
        res.render("index", hbsObject);
    });
});

//Post route for when the user clicks on cook a burger button
router.post("/", function(req,res){

    burger.create(["burger_name"], [req.body.burger_name], function() {
        //reload the "homepage"
        res.redirect("/");
    });
});

//Put route for when the user clicks on the devour button
router.put("/:id", function (req, res){

    var condition = "id = " + req.params.id;
    // update the database column to true
    burger.update({ devoured: req.body.devoured}, condition, function() {
        //reload the "homepage"
        res.redirect("/");
    });

});

// export the route to be used by the server
module.exports = router;