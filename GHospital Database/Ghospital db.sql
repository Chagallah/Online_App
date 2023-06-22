


create database GHospital;

Go
CREATE TABLE Screening (
	ID INT  PRIMARY KEY IDENTITY(1,1),
	patient_id VARCHAR(50),
	history_of_fever INT		NOT NULL,
	body_temperature DECIMAL		NOT NULL,
	coughing		 INT        NOT NULL,
	onset_of_symptoms INT,
	interview_type   INT,
	hospital_id		 VARCHAR,
	interview_date DATE,
	createdby char(20),
	datecreated datetime
);




CREATE TABLE Demographic (
	demographic_id INT PRIMARY KEY IDENTITY(1,1),
	patient_id VARCHAR(50),
	admission_date DATE			NOT NULL,
	hospital_name CHAR,
	age_months INT,
	age_years INT,
	sex INT,
	county_residence CHAR,
	village CHAR,
	onset_date DATE,
	out_patient_date DATE,
	createdby char(20),
	datecreated datetime
);


CREATE TABLE SignsSymptoms (
	symptoms_id INT PRIMARY KEY IDENTITY(1,1),
	patient_id VARCHAR(50),
	wheezing INT,
	sore_throat INT,
	breathing_difficulty INT,
	rhinorrhea INT,
	chest_pain INT,
	diarrhea INT,
	vomiting INT,
	muscle_aches INT,
	chills INT,
	lack_of_appetite INT,
	convulsions INT,
	cannot_drink_orbreastfeed INT,
	vomits INT,
	stridor INT,
	grunting INT,
	nasal_flaring INT,
	chest_in_drawing INT,
	lethargic INT,
	unconcious INT,
	createdby char(20),
	datecreated datetime
);


CREATE TABLE RiskFactors (
	riskfactors_id INT PRIMARY KEY IDENTITY(1,1), 
	patient_id VARCHAR(50),
	respiratory_disease INT,
	neurological_disease INT,
	newly_tb INT,
	prior_tb INT,
	hiv_aids INT,
	heart_disease INT,
	malnutrition INT,
	liver_disease INT,
	renal_disease INT,
	diabetes INT,
	asthma INT,
	cancer INT,
	sickle_cell INT,
	rickets INT,
	createdby char(20),
	datecreated datetime
);


CREATE TABLE PhysicalExamination (
	examination_id INT PRIMARY KEY IDENTITY(1,1),
	patient_id VARCHAR(50),
	temperature VARCHAR,
	mode_of_measurement INT,
	rate INT,
	saturation INT,
	mode_of_supply INT,
	icu_hdu INT,
	mechanical_ventilation INT,
	createdby char(20),
	datecreated datetime
);

CREATE TABLE Vaccination (
	vaccination_id INT PRIMARY KEY IDENTITY(1,1),
	patient_id VARCHAR(50),
	influenza INT,
	influenza_verification INT,
	covid_vaccine INT,
	doses INT,
	covid_verification INT,
	covid_test INT,
	covid_results INT,
	patient_specimen INT,
	swab_collection INT,
	collection_date DATE,
	createdby char(20),
	datecreated datetime
);


CREATE TABLE FinalOutcome (
	outcome_id INT PRIMARY KEY IDENTITY(1,1),
	patient_id VARCHAR(50),
	final_outcome INT,
	other_facility CHAR,
	[date] DATE,
	createdby char(20),
	datecreated datetime
);

