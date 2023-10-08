-- Table 1: Patient information
CREATE TABLE IF NOT EXISTS PatientInformation (
  PatientID INTEGER PRIMARY KEY,
  Name TEXT NOT NULL,
  DateOfBirth DATE NOT NULL,
  Gender TEXT NOT NULL CHECK (Gender IN ('Male', 'Female', 'Other')),
  ContactNumber TEXT UNIQUE,
  Email TEXT UNIQUE,
  Address TEXT
);


-- Table 2: Medical Records
CREATE TABLE IF NOT EXISTS MedicalRecords (
  RecordID INTEGER PRIMARY KEY,
  PatientID INTEGER NOT NULL,
  RecordDate DATE NOT NULL,
  Diagnosis TEXT NOT NULL,
  Symptoms TEXT NOT NULL,
  TreatmentPlan TEXT NOT NULL,
  Prescriptions TEXT,
  TestResults TEXT,
  FOREIGN KEY (PatientID) REFERENCES PatientInformation (PatientID)
);


-- Table 3: Appointments
CREATE TABLE IF NOT EXISTS Appointments (
  AppointmentID INTEGER PRIMARY KEY,
  PatientID INTEGER NOT NULL,
  AppointmentDate DATETIME NOT NULL,
  HealthcareProvider TEXT NOT NULL,
  AppointmentType TEXT NOT NULL CHECK (AppointmentType IN ('Consultation', 'Checkup', 'Procedure')),
  Status TEXT NOT NULL CHECK (Status IN ('Scheduled', 'Completed', 'Canceled')),
  FOREIGN KEY (PatientID) REFERENCES PatientInformation (PatientID)
);


-- Table 4: Users
CREATE TABLE IF NOT EXISTS Users (
  UserID INTEGER PRIMARY KEY,
  PatientID INTEGER NOT NULL,
  Username TEXT NOT NULL UNIQUE,
  PasswordHash TEXT NOT NULL,
  FOREIGN KEY (PatientID) REFERENCES PatientInformation (PatientID)
);
