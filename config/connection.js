// Initialize mysql npm pacckage
var mysql = require("mysql");

// credentials for the local host
var connectionInfo = {

  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
};

// connection informaiton for when the app is deployed on Heroku
if (process.env.JAWSDB_URL){
    connectionInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectionInfo);

//establishing connection with the database
connection.connect(function(err){

  if (err) {
    console.error("error connectiong:" + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//export the connection to be used by ORM.
module.exports = connection;