import pool from "./../db.js"

export const createMedecine = async (req, res, next) => {
  const {
    Patient_id,
    patient_type,
    test_type,
    test_code,
    weight,
    height,
    blood_pressure,
    temperature,
    date,
    category,
    test_result,
  } = req.body
  try {
    const newLab = await pool.query(
      "INSERT INTO lab (Patient_id,patient_type,test_type,test_code,weight,height,blood_pressure,temperature,date,category ,test_result ) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
      [
        Patient_id,
        patient_type,
        test_type,
        test_code,
        weight,
        height,
        blood_pressure,
        temperature,
        date,
        category,
        test_result,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        lab: newLab.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllLabs = async (req, res, next) => {
  try {
    const labs = await pool.query("SELECT * FROM lab")
    res.status(200).json({
      status: "success",
      results: labs.rows.length,
      data: {
        lab: labs,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getLab = async (req, res, next) => {
  try {
    const lab = await pool.query("SELECT * FROM lab WHERE lab_id =$1", [
      req.params.id,
    ])
    res.status(200).json({
      status: "success",
      data: {
        lab,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No lab with that ID",
    })
  }
}

export const updateLab = async (req, res, next) => {
  const {
    Patient_id,
    patient_type,
    test_type,
    test_code,
    weight,
    height,
    blood_pressure,
    temperature,
    date,
    category,
    test_result,
  } = req.body
  try {
    const lab = await pool.query(
      "UPDATE lab SET Patient_id =$1 ,patient_type =$2,test_type =$3,test_code =$4,weight =$5,height =$6,blood_pressure =$7,temperature =$8,date =$9 category =$10,test_result =$11 WHERE lab_id =$12",
      [
        Patient_id,
        patient_type,
        test_type,
        test_code,
        weight,
        height,
        blood_pressure,
        temperature,
        date,
        category,
        test_result,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      data: {
        lab,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No lab with that ID",
    })
  }
}

export const deleteLab = async (req, res, next) => {
  try {
    const lab = await pool.query("DELETE FROM lab  WHERE lab_id =$1", [
      req.params.id,
    ])

    res.status(200).json({
      status: "success",
      message: "Lab Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No lab with that ID",
    })
  }
}
