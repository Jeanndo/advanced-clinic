
const { PatientVitalSigns, Client, Vital } = require("./../models");


const createVital = async (req, res) => {
  try {
    const patiendId = req.params.patientId;
    const vitalId = req.params.vitalId;
    const { value } = req.body;

    const patient = await Client.findOne({ where: { uuid: patiendId } });

    if (!patient) {
      res.status(404).json({
        status: "fail",
        message: "No patient found",
      });
    }


    const vital = await Vital.findOne({ where: { uuid: vitalId } });


    if (!vital) {
      res.status(404).json({
        status: "fail",
        message: "No vital found",
      });
    }

    if (!value) {
      return res.status(400).json({ message: "Please provide a vital value" });
    }


    const newVital = await PatientVitalSigns.create({
      vitalId: vital.id,
      patientId: patient.id,

      value,
      comment: vital.description,
    });

    res.status(201).json({
      status: "success",
      data: {
        vitals: newVital,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error while creating a new vital",
      err: error.stack,

    });
  }
};

const getVital = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const patientVital = await PatientVitalSigns.findOne({ where: { uuid } });


    if (!patientVital) {
      return res.status(404).json({
        status: "fail",
        message: "No vital sign found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        vitals: patientVital,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting a vital sign",
    });
  }
};

const getAllVitals = async (req, res) => {
  try {

    const vitals = await PatientVitalSigns.findAndCountAll({
      include:["patient","vitalSign"]
    });


    res.status(200).json({
      status: "success",
      data: {
        vitals,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting all vital Signs",
    });
  }
};

const updateVital = async (req, res) => {
  try {
    const uuid = req.params.uuid;


    const { value } = req.body;

    const vital = await PatientVitalSigns.findOne({ where: { uuid } });


    if (!vital) {
      return res.status(404).json({
        status: "fail",
        message: "No vital sign found",
      });
    }


    vital.value = value;

    await vital.save();

    res.status(200).json({
      status: "success",
      message: "Vital Updated Successfully !!👍🏾",
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while updating a vital signs",
    });
  }
};

const deleteVital = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const vital = await PatientVitalSigns.findOne({ where: { uuid } });


    if (!vital) {
      return res.status(404).json({
        status: "fail",
        message: "No vital sign found",
      });
    }

    await vital.destroy();

    res.status(200).json({
      status: "success",
      message: "Vital Deleted Successfully !!👍🏾",
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting a vital sign",
    });
  }
};

module.exports = {
  createVital,
  getVital,
  getAllVitals,
  updateVital,
  deleteVital,
};
