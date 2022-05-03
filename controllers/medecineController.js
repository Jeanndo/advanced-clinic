const { Medecine } = require("./../models");

const createMedecine = async (req, res, next) => {
  try {
    const {
      medecineName,
      medecineCategory,
      medecineType,
      medecineCost,
      medecineDescription,
    } = req.body;

    const newMedecine = await Medecine.create({
      medecineName,
      medecineCategory,
      medecineType,
      medecineCost,
      medecineDescription,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        medecine: newMedecine,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while Creating Medecine",
      error: error.stack,
    });
  }
};

const getAllMedecines = async (req, res, next) => {
  try {
    const medecines = await Medecine.findAll();

    res.status(200).json({
      status: "success",
      result: medecines.length,
      data: {
        medecines: medecines,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while getting all Medecines",
      error: error.stack,
    });
  }
};

const getMedecine = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const medecine = await Medecine.findOne({ where: { uuid } });

    if (!medecine) {
      return res.status(404).json({
        message: "No Medecine found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        medecines: medecine,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting a Medecine",
    });
  }
};

const updateMedecine = async (req, res, next) => {
  try {
    const {
      medecineName,
      medecineCategory,
      medecineType,
      medecineCost,
      medecineDescription,
    } = req.body;
    const uuid = req.params.uuid;

    const medecine = await Medecine.findOne({ where: { uuid } });

    if (!medecine) {
      return res
        .status(404)
        .json({ message: "No medecine found with that ID" });
    }

    medecine.medecineName = medecineName;
    medecine.medecineCategory = medecineCategory;
    medecine.medecineType = medecineType;
    medecine.medecineCost = medecineCost;
    medecine.medecineDescription = medecineDescription;

    await medecine.save();

    res.status(200).json({
      status: "success",
      message: "Medecine updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while updating Medecine",
    });
  }
};

const deleteMedecine = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const medecine = await Medecine.findOne({ where: { uuid } });

    if (!medecine) {
      return res
        .status(404)
        .json({ message: "No medecine found with that ID" });
    }
    res.status(200).json({
      status: "success",
      message: "Medecine Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while deleting a Medecine",
    });
  }
};

module.exports = {
  createMedecine,
  getAllMedecines,
  getMedecine,
  updateMedecine,
  deleteMedecine
};
