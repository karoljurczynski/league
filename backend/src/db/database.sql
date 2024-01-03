CREATE DATABASE db;

CREATE TABLE users(
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255),
  name VARCHAR(255),
  surname VARCHAR(255),
  age SMALLINT,
  created_at DATE
  updated_at DATE
);
