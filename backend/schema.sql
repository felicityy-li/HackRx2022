CREATE TABLE patient (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(100) NOT NULL DEFAULT '',
	lastname VARCHAR(100) NOT NULL DEFAULT '',
	`dateofbirth` DATE,
	`healthcardnumber` VARCHAR(100),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE caregiver (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(100) NOT NULL,
	lastname VARCHAR(100) NOT NULL DEFAULT '',
	email VARCHAR(100) NOT NULL,
	phonenumber VARCHAR(100) DEFAULT '',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE caregiver_patient (
	patientid INT NOT NULL ,
	caregiverid INT NOT NULL,
	FOREIGN KEY (patientid) REFERENCES patient(id),
    FOREIGN KEY (caregiverid) REFERENCES caregiver(id)
) ENGINE=InnoDB;