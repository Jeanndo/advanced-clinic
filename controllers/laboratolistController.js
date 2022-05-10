const { Laboratorist } = require("./../models");

const createLaboratorist = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, Nid } = req.body;

    if (!firstName || !lastName || !email || !phone || !Nid) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid input supplied, please provide valid information",
      });
    }

    const laboratorist = await Laboratorist.findOne({ where: { email } });

    if (laboratorist) {
      return res.status(403).json({
        status: "fail",
        message: "Laboratorist already registered",
      });
    }

    const newLaboratorist = await Laboratorist.create({
      firstName,
      lastName,
      email,
      phone,
      Nid,
    });

    res.status(201).json({
      status: "success",
      data: {
        laboratorists: newLaboratorist,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating a new Laboratorist!!",
      err: error.stack,
    });
  }
};

const getLaboratorist = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const laboratorist = await Laboratorist.findOne({ where: { uuid } });

    if (!laboratorist) {
      return res.status(403).json({
        status: "fail",
        message: "No Laboratorist found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        laboratorists: laboratorist,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting a Laboratorist!!",
      err: error.stack,
    });
  }
};

const getAllLaboratorists = async (req, res) => {
  try {
    const laboratorists = await Laboratorist.findAndCountAll();

    res.status(200).json({
      status: "success",
      data: {
        laboratorists,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting Laboratorists!!",
      err: error.stack,
    });
  }
};

const updateLaboratorist = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const { firstName, lastName, email, phone, Nid } = req.body;

    const laboratorist = await Laboratorist.findOne({ where: { uuid } });

    if (!laboratorist) {
      return res.status(403).json({
        status: "fail",
        message: "No Laboratorist found with that ID",
      });
    }

    laboratorist.firstName = firstName;
    laboratorist.lastName = lastName;
    laboratorist.email = email;
    laboratorist.phone = phone;
    laboratorist.Nid = Nid;

    await laboratorist.save();

    res.status(200).json({
      status: "success",
      message: "Laboratorist updated successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while updating a Laboratorist!!",
      err: error.stack,
    });
  }
};

const deleteLaboratorist = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const laboratorist = await Laboratorist.findOne({ where: { uuid } });

    if (!laboratorist) {
      return res.status(403).json({
        status: "fail",
        message: "No Laboratorist found with that ID",
      });
    }

    await laboratorist.destroy();

    res.status(200).json({
      status: "success",
      message: "Laboratorist deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting a Laboratorist!!",
      err: error.stack,
    });
  }
};

module.exports = {
  createLaboratorist,
  getLaboratorist,
  getAllLaboratorists,
  updateLaboratorist,
  deleteLaboratorist,
};
