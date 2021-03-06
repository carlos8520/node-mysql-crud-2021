-- CREATING DATABASE

CREATE DATABASE nodejs;

-- USING DATABASE

USE nodejs;

-- CREATE TABLE

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- TO SHOW ALL TABLES

SHOW TABLES;

-- TO DESCRIBE TABLE

DESCRIBE customer;