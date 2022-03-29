  CREATE DATABASE adclinic;

--\c adclinic;

CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
firstName VARCHAR(255),
lastName VARCHAR(255),
Nid VARCHAR(255),
jobTitle VARCHAR(255),
role VARCHAR(255),
country VARCHAR(255),
dob DATE,
gender VARCHAR(255),
address VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
department_id INTEGER,
password VARCHAR(255)
);

CREATE TABLE patient(
  patient_id SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  nationality VARCHAR(255),
  gender VARCHAR(255),
  Nid VARCHAR(255),
  passport_num VARCHAR(255),
  address VARCHAR(255),
  dateOfBirth VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255),
  province VARCHAR(255),
  district VARCHAR(255),
  sector VARCHAR(255),
  cell VARCHAR(255)
);


CREATE TABLE department(
  department_id SERIAL PRIMARY KEY,
  department_name VARCHAR(255),
  department_manager VARCHAR(255)
);

CREATE TABLE doctor(
  doctor_id SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  specialist VARCHAR(255)
);

CREATE TABLE appointment(
  appointment_id SERIAL PRIMARY KEY,
  appointment_type VARCHAR(255),
  appointment_createdAt DATE,
  appointment_updatedAt DATE,
  appointment_deadline DATE
);

CREATE TABLE medecine(
  medecine_id SERIAL PRIMARY KEY,
  medecine_name VARCHAR(255),
  medecine_category VARCHAR(255),
  medecine_type VARCHAR(255),
  medecine_cost INTEGER,
  medecine_description VARCHAR(255)
);

CREATE TABLE supplier(
  supplier_id SERIAL PRIMARY KEY,
  supplier_company VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255),
  address VARCHAR(255)
);


CREATE TABLE room(
  room_id SERIAL PRIMARY KEY,
  room_type VARCHAR(255),
  room_status VARCHAR(255)
);

CREATE TABLE lab(
  lab_id SERIAL PRIMARY KEY,
  Patient_id INTEGER,
  patient_type VARCHAR(255),
  test_type VARCHAR(255),
  test_code VARCHAR(255),
  weight INTEGER,
  height FLOAT(2),
  blood_pressure FLOAT(2),
  temperature FLOAT(2),
  date DATE,
  category VARCHAR(255),
  test_result VARCHAR(255)
);

CREATE TABLE bill(
  bill_no SERIAL PRIMARY KEY,
  patient_id INTEGER,
  patient_type VARCHAR(255),
  doctor_charge INTEGER,
  medecine_charge INTEGER,
  room_charge INTEGER,
  operation_charge INTEGER,
  nursing_charge INTEGER,
  lab_charge INTEGER,
  insurance_type VARCHAR(255),
  number_of_days INTEGER,
  total_bill INTEGER
);

CREATE TABLE insurance(
  insurance_id SERIAL PRIMARY KEY,
  Insurance_code VARCHAR(255),
  insurance_type VARCHAR(255),
  published_date DATE,
  expired_date DATE,
  medical_coverage VARCHAR(255),
  entry_fees INTEGER
);

CREATE TABLE  medecineReport(
  medecine_id SERIAL PRIMARY KEY,
  company VARCHAR(255),
  quantity INTEGER,
  production_date DATE,
  expired_date DATE,
  country VARCHAR(255),
  Supplier_id VARCHAR(255)
);