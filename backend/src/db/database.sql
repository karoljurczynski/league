CREATE DATABASE db;

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  age SMALLINT NOT NULL,
  created_at DATE,
  updated_at DATE
);

INSERT INTO users (email, password, name, surname, age) VALUES('karol@kasr.pl', 'fsafas', 'afasfas', 'adsada', 23);