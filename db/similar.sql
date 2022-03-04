CREATE DATABASE IF NOT EXISTS movieDB;

USE movieDB;

CREATE TABLE similars (
	id INT (6) NOT NULL,
    id_similar INT NOT NULL,
    original_title VARCHAR(3000) DEFAULT NULL,
    release_date VARCHAR(3000) DEFAULT NULL,
    overview VARCHAR(3000) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE similars;

INSERT INTO similars values
	(634649, 605,  "The Matrix Revolutions", "2002-05-01", "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.");


SELECT * FROM similars ORDER BY id DESC;