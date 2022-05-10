const { Doctor } = require("./../models");

const createDoctor = async (req, res, next) => {
  try {
    const { firstName, lastName, specialist,email,phone,Nid } = req.body;

    if (!firstName || !lastName || !specialist||!email ||!phone||!Nid) {
      return res
        .status(400)
        .json({
          message: "Invalid data supplied,please provide valid information",
        });
    }

    const doctor = await Doctor.findOne({ where: { email }})
    if(doctor){
      return res.status(403).json({
        status:"fail",
        message:"Doctor is already registered !!!"
      })
    }

    const newDoctor = await Doctor.create({ firstName, lastName, specialist,email,phone,Nid});

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
    const { firstName, lastName, specialist,email,phone,Nid } = req.body;
 
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
    doctor.email = email;
    doctor.phone = phone;
    doctor.Nid = Nid;
    
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
