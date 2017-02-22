//import the mysql database
var connection = require ("../config/connection.js");

// function to replace the question marks for mysql queries
// so that database values can be passed as variables
function printQuestionMarks(num) {

    var arr= [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
} //printQuestionMarks function ends here

// function to convert the key and values in proper format
// to be passed as a query.
function objToSql(ob) {
    
    var arr = [];

    for(var key in ob) {       
        if (Object.hasOwnProperty.call(ob,key)){
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
} // objToSql function ends here

// create an ORM
var orm = {
    // all function returns all the data in the database
    all: function(tableInput, cb) {
        // build a query for the database
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            //run the call-back function on the result
            cb(result);
        });
    },
    //create function creates a row in the database
    // in a table passed as one of the arguments.
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // update function changes a value in a particular column in the database
    update: function(table, objColVals, condition, cb) {

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

};

//export the ORM to be used by the model
module.exports = orm;