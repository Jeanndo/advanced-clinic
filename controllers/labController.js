const { Lab } = require("./../models");

const createLab = async (req, res, next) => {
  try {
    const {
      Patient_Id,
      patientType,
      testType,
      testCode,
      weight,
      height,
      bloodPressure,
      temperature,
      labDate,
      category,
      testResult,
    } = req.body;

    const newLab = await Lab.create({
      Patient_Id,
      patientType,
      testType,
      testCode,
      weight,
      height,
      bloodPressure,
      temperature,
      labDate,
      category,
      testResult,
    });
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        lab: newLab,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while creating a Lab",
      error: error.stack,
    });
  }
};

const getAllLabs = async (req, res, next) => {
  try {
    const labs = await Lab.findAll();
    res.status(200).json({
      status: "success",
      result: labs.length,
      data: {
        labs,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting all labs",
      error: error.stack,
    });
  }
};

const getLab = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const lab = await Lab.findOne({ where: { uuid } });
    if (!lab) {
      return res.status(404).json({ message: "No lab found with that ID" });
    }

    res.status(200).json({
      status: "success",
      data: {
        labs: lab,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting a lab",
    });
  }
};

const updateLab = async (req, res, next) => {
  try {
    const {
      Patient_Id,
      patientType,
      testType,
      testCode,
      weight,
      height,
      bloodPressure,
      temperature,
      labDate,
      category,
      testResult,
    } = req.body;

    const uuid = req.params.uuid;

    const lab = await Lab.findOne({ where: { uuid } });

    if (!lab) {
      return res.status(404).json({ message: "No lab found with that ID" });
    }

    lab.Patient_Id = Patient_Id;
    lab.patientType = patientType;
    lab.testType = testType;
    lab.testCode = testCode;
    lab.weight = weight;
    lab.height = height;
    lab.bloodPressure = bloodPressure;
    lab.temperature = temperature;
    lab.labDate = labDate;
    lab.category = category;
    lab.testResult = testResult;

    await lab.save();

    res.status(200).json({
      status: "success",
      message: "Lab updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while updating a lab",
    });
  }
};

const deleteLab = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const lab = await Lab.findOne({ where: { uuid } });

    if (!lab) {
      return res.status(404).json({ message: "No lab found with that ID" });
    }
    await lab.destroy();

    res.status(200).json({
      status: "success",
      message: "Lab Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while deleting a lab",
    });
  }
};

module.exports = { createLab, getLab, getAllLabs, updateLab, deleteLab };
