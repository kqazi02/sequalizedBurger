var path = require("path");
var db = require("../models");

//exporting the routes
module.exports = function(app) {
    
    //Home page shows all the burgers in the database
    app.get("/", function(req,res){
        //Select * from table and push the results to the page
        db.Burgers.findAll({}).then(function(data){
            var hbsObject = {
            burgers: data
            };

            res.render("index", hbsObject);
            });
    });
    
    //CREATE burger into table, and redirect to the homepage
    app.post("/", function(req,res){

        db.Burgers.create({
            burger_name: req.body.burger_name
        }).then(function(){
            res.redirect("/");
        });

    });

    //UPDATE devour value of burger where id = id of the burger clicked and redirect to the homepage
    app.put("/:id", function(req,res){

        db.Burgers.update({
            devoured:req.body.devoured},
            {
                where: {
                id: req.params.id
                }
            }).then(function(){
                res.redirect("/");
            });
    });

};
