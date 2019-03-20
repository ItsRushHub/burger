CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
burger_name VARCHAR (100),
devoured INT (10)
);