CREATE DATABASE IF NOT EXISTS movieDB;

USE movieDB;

CREATE TABLE reviews (
	id INT,
    author VARCHAR(3000) DEFAULT NULL,
    created_at VARCHAR(3000) DEFAULT NULL,
    content VARCHAR(3000) DEFAULT NULL
);

DESCRIBE reviews;

INSERT INTO reviews values
	(634649,"garethmb", "2021-12-15T15:35:00.071Z","Life for Peter Parker"),
	(634649,"MSB", "2021-12-15T22:24:58.003Z", "FULL SPOILER-FREE REVIEW @ ht"),
    (634649,"RADIO1'S MR. MOVIE!-MAD AMI 🌠","2021-12-17T01:18:55.512Z", "**\" THIS IS POP\"**");


SELECT * FROM reviews ORDER BY created_at DESC;