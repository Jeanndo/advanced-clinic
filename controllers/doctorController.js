const { Doctor } = require("./../models");

const createDoctor = async (req, res, next) => {
  try {
    const { firstName, lastName, specialist } = req.body;

    if (!firstName || !lastName || !specialist) {
      return res
        .status(400)
        .json({
          message: "Invalid data supplied,please provide valid information",
        });
    }

    const newDoctor = await Doctor.create({ firstName, lastName, specialist });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        doctors: newDoctor,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while creating a new Doctor",
      error: error.stack,
    });
    console.error(error)
  }
};

const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.findAndCountAll();
    
    res.status(200).json({
      status: "success",
      data: {
        doctors,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting all Doctors",
      error: error.stack,
    });
  }
};

const getDoctor = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    
    const doctor = await Doctor.findOne({ where:{uuid } });

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "No doctor found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        doctors: doctor,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting a doctor",
    });
    
  }
};

const updateDoctor = async (req, res, next) => {
  try {
    const { firstName, lastName, specialist } = req.body;
    const uuid = req.params.uuid;

    const doctor = await Doctor.findOne({ where: { uuid } });

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "No doctor found with that ID",
      });
    }

    doctor.firstName = firstName;
    doctor.lastName = lastName;
    doctor.specialist = specialist;
    await doctor.save();

    res.status(200).json({
      status: "success",
      message: "Updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while updating a doctor",
    });
  }
};

const deleteDoctor = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const doctor = await Doctor.findOne({ where: { uuid } });

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "No doctor found with that ID",
      });
    }
    await doctor.destroy();

    res.status(200).json({
      status: "success",
      message: "Doctor Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Error while deleting a doctor",
    });
  }
};

module.exports = {
  createDoctor,
  getDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
};
