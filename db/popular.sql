CREATE DATABASE IF NOT EXISTS movieDB;

USE movieDB;

CREATE TABLE populars (
	popularity FLOAT (4) NOT NULL,
	id INT (6) NOT NULL,
    release_date VARCHAR(3000) DEFAULT NULL,
    original_title VARCHAR(3000) DEFAULT NULL,
    overview VARCHAR(3000) DEFAULT NULL,
    PRIMARY KEY (popularity)
);

DESCRIBE populars;

INSERT INTO populars values
	(6855.906,634649,'2021-12-15' ,'Spider-Man: No Way Home','Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'),
    (3739.757,476669,'2021-12-22','The Kings Man','As a collection of historys worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.'),
    (3464.303,646385,'2022-01-12','Scream','Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.');
    

SELECT * FROM populars ORDER BY popularity DESC;