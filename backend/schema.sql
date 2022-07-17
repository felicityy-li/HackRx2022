CREATE TABLE patient (
	`id` VARCHAR(100) NOT NULL,
	`firstname` VARCHAR(100) NOT NULL DEFAULT '',
	`lastname` VARCHAR(100) NOT NULL DEFAULT '',
	`dateofbirth` DATE,
	`healthcardnumber` VARCHAR(100),
    `address` VARCHAR(500),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE caregiver (
	firstname VARCHAR(100) NOT NULL,
	lastname VARCHAR(100) NOT NULL DEFAULT '',
	email VARCHAR(100) NOT NULL,
	phonenumber VARCHAR(100) DEFAULT '',
    password VARCHAR(100) NOT NULL,
	PRIMARY KEY (`email`)
) ENGINE=InnoDB;


CREATE TABLE caregiver_patient (
	patientid VARCHAR(100) NOT NULL ,
	caregiverid VARCHAR(100) NOT NULL,
	FOREIGN KEY (patientid) REFERENCES patient(id),
    FOREIGN KEY (caregiverid) REFERENCES caregiver(email)
) ENGINE=InnoDB;


CREATE TABLE caregiver_notification (
    
) ENGINE=InnoDB;