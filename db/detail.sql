CREATE DATABASE IF NOT EXISTS movieDB;

USE movieDB;

CREATE TABLE details (
	id INT (6) NOT NULL,
    original_title VARCHAR(3000) DEFAULT NULL,
    genrs VARCHAR(3000) DEFAULT NULL,
    overview VARCHAR(3000) DEFAULT NULL,
    production_companies VARCHAR(3000) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE details;

INSERT INTO details values
	(634649,  "Spider-Man: No Way Home", "Action", "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help fro", "Marvel Studios");


SELECT * FROM details ORDER BY id DESC;