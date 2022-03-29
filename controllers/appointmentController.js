import pool from "./../db.js"

export const createAppointment = async (req, res, next) => {
  const {
    appointment_type,
    appointment_createdAt,
    appointment_updatedAt,
    appointment_deadline,
  } = req.body
  try {
    const newAppointment = await pool.query(
      "INSERT INTO appointment (appointment_type,appointment_createdAt,appointment_updatedAt,appointment_deadline) VALUES($1,$2,$3,$4) RETURNING *",
      [
        appointment_type,
        appointment_createdAt,
        appointment_updatedAt,
        appointment_deadline,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        appointment: newAppointment.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await pool.query("SELECT * FROM appointment")
    res.status(200).json({
      status: "success",
      results: appointments.rows.length,
      data: {
        appointment: appointments.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getAppointment = async (req, res, next) => {
  try {
    const appointment = await pool.query(
      "SELECT * FROM appointment WHERE appointment_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        appointments: appointment.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No appointment with that ID",
    })
  }
}

export const updateAppointment = async (req, res, next) => {
  const {
    appointment_type,
    appointment_createdAt,
    appointment_updatedAt,
    appointment_deadline,
  } = req.body
  try {
    await pool.query(
      "UPDATE appointment SET appointment_type =$1,appointment_createdAt =$2, appointment_updatedAt =$3,appointment_deadline =$4 WHERE appointment_id =$5",
      [
        appointment_type,
        appointment_createdAt,
        appointment_updatedAt,
        appointment_deadline,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      message: "Appointment Updated Successfully!!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No appointment with that ID",
      err: error.stack,
    })
  }
}

export const deleteAppointment = async (req, res, next) => {
  try {
    const appointment = await pool.query(
      "DELETE FROM appointment  WHERE appointment_id =$1",
      [req.params.id]
    )

    res.status(200).json({
      status: "success",
      message: "Appointment Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No appointment with that ID",
    })
  }
}
