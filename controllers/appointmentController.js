const { Appointment } = require("./../models");

const createAppointment = async (req, res, next) => {
  try {
    const { appointmentType, appointmentName, appointmentdeadLine } = req.body;

    if (!appointmentType || !appointmentName || !appointmentdeadLine) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid data supplied, please provide valid information",
      });
    }

    const newAppointment = await Appointment.create({
      appointmentType,
      appointmentName,
      appointmentdeadLine,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        appointment: newAppointment,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating a new appointment",
      error: error.stack,
    });
  }
};

const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.findAll();

    res.status(200).json({
      status: "success",
      results: appointments.length,
      data: {
        appointments,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while fetching appointments",
      error: error.stack,
    });
  }
};

const getAppointment = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const appointment = await Appointment.findOne({ where: { uuid } });

    if (!appointment) {
      return res.status(404).json({
        status: "fail",
        message: "No Appointment found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        appointments: appointment,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Error while getting an appointment",
    });
  }
};

const updateAppointment = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const { appointmentType, appointmentName, appointmentdeadLine } = req.body;

    if (!appointmentType || !appointmentName || !appointmentdeadLine) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid data supplied, please provide valid information",
      });
    }

    const appointment = await Appointment.findOne({ where: { uuid } });

    if (!appointment) {
      return res.status(404).json({
        status: "fail",
        message: "No Appointment found with that ID",
      });
    }
    appointment.appointmentType = appointmentType;
    appointment.appointmentName = appointmentName;
    appointment.appointmentdeadLine = appointmentdeadLine;

    await appointment.save();

    res.status(200).json({
      status: "success",
      message: "Appointment Updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while updating an appointment",
      err: error.stack,
    });
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const appointment = await Appointment.findOne({ where: { uuid } });

    if (!appointment) {
      return res.status(404).json({
        status: "fail",
        message: "No Appointment found with that ID",
      });
    }

    await appointment.destroy();

    res.status(200).json({
      status: "success",
      message: "Appointment Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting an appointment",
    });
  }
};

module.exports = {
  createAppointment,
  getAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
};
