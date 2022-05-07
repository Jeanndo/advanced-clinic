const { Patient } = require("./../models");

const createPatient = async (req, res, next) => {
  try {

    const {
      firstName,
      lastName,
      nationality,
      gender,
      Nid,
      passportNum,
      address,
      dob,
      phone,
      email,
      province,
      district,
      sector,
      cell
    } = req.body;


    const newPatient = await Patient.create({
      firstName,
      lastName,
      nationality,
      gender,
      Nid,
      passportNum,
      address,
      dob,
      phone,
      email,
      province,
      district,
      sector,
      cell
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        patients: newPatient,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Error while creating new Patient",
      error: error.stack,
    });
  }
};

const getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.findAll();

    res.status(200).json({
      status: "success",
      result: patients.length,
      data: {
        patients,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting all Patients",
      error: error.stack,
    });
  }
};

const getPatient = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const patient = await Patient.findOne({ where: { uuid } });

    if (!patient) {
      return res.status(404).json({
        message: "No patient found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        patients: patient,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error While getting a Patient",
    });
  }
};

const updatePatient = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      nationality,
      gender,
      Nid,
      passport_num,
      address,
      dob,
      phone,
      email,
      province,
      district,
      sector,
      cell,
    } = req.body;

    const patient = await Patient.findOne({ where: { uuid } });

    if (!patient) {
      return res.status(404).json({
        message: "No Patient found with that ID",
      });
    }
    patient.firstName = firstName;
    patient.lastName = lastName;
    patient.nationality = nationality;
    patient.gender = gender;
    patient.Nid = Nid;
    patient.passport_num = passport_num;
    patient.address = address;
    patient.dob = dob;
    patient.phone = phone;
    patient.email = email;
    patient.province = province;
    patient.district = district;
    patient.sector = sector;
    patient.cell = cell;

    await Patient.save();

    res.status(200).json({
      status: "success",
      message: "Patient Updated successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while updating a Patient",
    });
  }
};

const deletePatient = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const patient = await Patient.findOne({ where: { uuid } });

    if (!patient) {
      return res.status(404).json({ message: "No patient found with that ID" });
    }

    res.status(200).json({
      status: "success",
      message: "Patient Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while deleting a Patient",
    });
  }
};

module.exports = {
  createPatient,
  getPatient,
  getAllPatients,
  updatePatient,
  deletePatient,
};
