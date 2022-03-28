import pool from "./../db.js"

export const createDoctor = async (req, res, next) => {
  const { firstName, lastName, specialist } = req.body
  try {
    const newDoctor = await pool.query(
      "INSERT INTO doctor ( firstName, lastName, specialist ) VALUES($1,$2,$3) RETURNING *",
      [firstName, lastName, specialist]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        doctors: newDoctor.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await pool.query("SELECT * FROM doctor")
    res.status(200).json({
      status: "success",
      results: doctors.rows.length,
      data: {
        doctors,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getDoctor = async (req, res, next) => {
  try {
    const doctor = await pool.query(
      "SELECT * FROM doctor WHERE doctor_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        doctors: doctor,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No doctor with that ID",
    })
  }
}

export const updateDoctor = async (req, res, next) => {
  const { firstName, lastName, specialist } = req.body
  try {
    const doctor = await pool.query(
      "UPDATE patients SET firstName =$1 ,lastName =$2,specialist =$3",
      [firstName, lastName, specialist, req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        doctors: doctor,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No insurance with that ID",
    })
  }
}

export const deleteDoctor = async (req, res, next) => {
  try {
    const doctor = await pool.query("DELETE FROM doctor  WHERE doctor_id =$1", [
      req.params.id,
    ])

    res.status(200).json({
      status: "success",
      message: "Doctor Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No doctor with that ID",
    })
  }
}
