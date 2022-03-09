CREATE DATABASE IF NOT EXISTS movieDB;

USE movieDB;

CREATE TABLE populars (
	popularity INT (4) NOT NULL,
	id INT (6) AUTO_INCREMENT,
    release_date VARCHAR(3000) DEFAULT NULL,
    original_title VARCHAR(3000) DEFAULT NULL,
    overview VARCHAR(3000) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE populars;

INSERT INTO populars (popularity, release_date, original_title, overview)
VALUES (1256, "prueba", "prueba", "prueba");

SELECT * FROM populars ORDER BY popularity DESC;