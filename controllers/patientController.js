const { Client } = require("./../models");

const createPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      nationality,
      sex,
      NationalId,
      dateOfBirth,
      phone,
      email,
      province,
      district,
      sector,
      cell,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !nationality ||
      !sex ||
      !NationalId ||
      !dateOfBirth ||
      !phone ||
      !email ||
      !province ||
      !district ||
      !cell ||
      !sector
    ) {
      return res.status(400).json({
        message: "Invalid credentials, please provide valid information",
      });
    }
    const patient = await Client.findOne({ where: { NationalId } });
    if (patient) {
      return res
        .status(404)
        .json({ status: "fail", message: "Patient already exists" });
    }

    const newPatient = await Client.create({
      firstName,
      lastName,
      nationality,
      sex,
      NationalId,
      dateOfBirth,
      phone,
      email,
      province,
      district,
      sector,
      cell,
    });

    res.status(201).json({
      status: "success",
      data: {
        patients: newPatient,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating Patient",
    });
    console.error(error);
  }
};

const getAllPatients = async (req, res, next) => {
  try {
    const patients = await Client.findAndCountAll({
      include:['vitalSigns']
    });

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

    const patient = await Client.findOne({ where: { uuid } });

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
      error: error.stack,
    });
    // console.error(error);
  }
};

const updatePatient = async (req, res, next) => {

  try {
    const {
      firstName,
      lastName,
      nationality,
      sex,
      NationalId,
      dateOfBirth,
      phone,
      email,
      province,
      district,
      sector,
      cell,
    } = req.body;
    const uuid = req.params.uuid
    const patient = await Client.findOne({ where: { uuid } });
     
    if (!patient) {
      return res.status(404).json({
        message: "No Patient found with that ID",
      });
    }
    patient.firstName = firstName
    patient.lastName = lastName
    patient.nationality = nationality
    patient.sex = sex
    patient.NationalId = NationalId
    patient.dateOfBirth = dateOfBirth
    patient.phone = phone
    patient.email = email
    patient.province = province
    patient.district = district
    patient.sector = sector
    patient.cell = cell

    await patient.save();

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

    const patient = await Client.findOne({ where: { uuid } });

    if (!patient) {
      return res.status(404).json({ message: "No patient found with that ID" });
    }
    
    await patient.destroy()

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
