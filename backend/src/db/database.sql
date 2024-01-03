CREATE DATABASE db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  name VARCHAR(255),
  surname VARCHAR(255),
  age SMALLINT,
  created_at DATE,
  updated_at DATE
);

INSERT INTO users (email) VALUES('karol_jurczynski@o2.pl');