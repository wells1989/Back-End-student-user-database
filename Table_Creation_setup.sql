CREATE TABLE students (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INTEGER
);

INSERT INTO students (name, email, age) VALUES ('Ruperto Bransom', 'ddobbisonq@hubpages.com', '20'), ('Nissa Gristock', 'wwestfrimley2n@ehow.com', '19'), ('Carola Bastide', 'skaminski5i@ifeng.com', '29'), ('Sibylle Slides', 'wstempe40@boston.com', '34'), ('Sheeree Estick', 'fegdalej@infoseek.co.jp', '32'), ('Michael Tomkin', 'troebottom6m@cbsnews.com', '26'), ('Katerine Cassell', 'dbergeon45@diigo.com', '40'), ('Ettie Rawlingson', 'wweatherburn3r@discuz.net', '37'), ('Maggy Venneur', 'egwillim3t@harvard.edu', '19'), ('Matthew Eagell', 'hcunliffe4v@wikia.com', '22');

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    roles varchar(255) NOT NULL
);