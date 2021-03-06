// require all the npm packages
var express = require("express");
var exphbs = require ("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// create express application
var app = express();

// create a port for online and local deployment
var PORT = process.env.PORT || 3000;

// requiring the models
var db = require("./models");

// add body parser to the application to easily manipulate the responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// deploy the public folder
app.use(express.static(process.cwd() + "/public"));

// allow PUT and DELETE methods.
app.use(methodOverride("_method"));

// initialize handlebars
var exphbs = require("express-handlebars");

// setup the handle bars
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import the routes
require("./routes/htmlRoutes.js")(app);

//deploy the application
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port", PORT);
    });
});