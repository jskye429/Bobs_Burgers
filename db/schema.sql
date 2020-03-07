CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_type VARCHAR (100),
    eaten BOOLEAN,
    PRIMARY KEY (id)
);