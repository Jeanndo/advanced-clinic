import pool from "./../db.js"

export const createPatient = async (req, res, next) => {
  const {
    firstName,
    lastName,
    nationality,
    gender,
    Nid,
    passport_num,
    address,
    dateOfBirth,
    phone,
    email,
    province,
    district,
    sector,
    cell,
  } = req.body
  try {
    const newPatient = await pool.query(
      "INSERT INTO patient (firstName,lastName,nationality,gender,Nid,passport_num,address,dateOfBirth,phone,email,province,district,sector,cell) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *",
      [
        firstName,
        lastName,
        nationality,
        gender,
        Nid,
        passport_num,
        address,
        dateOfBirth,
        phone,
        email,
        province,
        district,
        sector,
        cell,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        patients: newPatient.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllPatients = async (req, res, next) => {
  try {
    const patients = await pool.query("SELECT * FROM patient")
    res.status(200).json({
      status: "success",
      result: patients.rows.length,
      data: {
        patients: patients.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getPatient = async (req, res, next) => {
  try {
    const patient = await pool.query(
      "SELECT * FROM patient WHERE patient_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        patients: patient.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No patient with that ID",
    })
  }
}

export const updatePatient = async (req, res, next) => {
  const {
    firstName,
    lastName,
    nationality,
    gender,
    Nid,
    passport_num,
    address,
    dateOfBirth,
    phone,
    email,
    province,
    district,
    sector,
    cell,
  } = req.body
  try {
    await pool.query(
      "UPDATE patient SET firstName =$1 ,lastName =$2,nationality =$3,gender =$4,Nid =$5,passport_num =$6,address =$7,dateOfBirth =$8,phone =$9,email =$10,province =$11,district =$12,sector =$13,cell =$14 WHERE patient_id =$15",
      [
        firstName,
        lastName,
        nationality,
        gender,
        Nid,
        passport_num,
        address,
        dateOfBirth,
        phone,
        email,
        province,
        district,
        sector,
        cell,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      message: "Patient Updated successfully!!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No patient with that ID",
    })
  }
}

export const deletePatient = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM patient  WHERE patient_id =$1", [
      req.params.id,
    ])

    res.status(200).json({
      status: "success",
      message: "Patient Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Patient with that ID",
    })
  }
}
