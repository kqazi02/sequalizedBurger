CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE IF NOT EXISTS burgers(

    id INTEGER(10) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY
    , burger_name VARCHAR(200) NOT NULL
    , devoured BOOLEAN DEFAULT FALSE
    , date TIMESTAMP NOT NULL DEFAULT NOW() 

);