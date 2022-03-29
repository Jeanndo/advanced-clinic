import pool from "./../db.js"

export const createMedecine = async (req, res, next) => {
  const {
    medecine_name,
    medecine_category,
    medecine_type,
    medecine_cost,
    medecine_description,
  } = req.body
  try {
    const newMedecine = await pool.query(
      "INSERT INTO medecine (medecine_name,medecine_category,medecine_type,medecine_cost,medecine_description) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [
        medecine_name,
        medecine_category,
        medecine_type,
        medecine_cost,
        medecine_description,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        medecine: newMedecine.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllMedecines = async (req, res, next) => {
  try {
    const medecines = await pool.query("SELECT * FROM medecine")
    res.status(200).json({
      status: "success",
      result: medecines.rows.length,
      data: {
        medecines: medecines.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getMedecine = async (req, res, next) => {
  try {
    const medecine = await pool.query(
      "SELECT * FROM medecine WHERE medecine_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        medecines: medecine.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No medecine with that ID",
    })
  }
}

export const updateMedecine = async (req, res, next) => {
  const {
    medecine_name,
    medecine_category,
    medecine_type,
    medecine_cost,
    medecine_description,
  } = req.body
  try {
    await pool.query(
      "UPDATE medecine SET medecine_name =$1 ,medecine_category =$2,medecine_type =$3,medecine_cost =$4,medecine_description =$5 WHERE medecine_id =$6",
      [
        medecine_name,
        medecine_category,
        medecine_type,
        medecine_cost,
        medecine_description,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      message: "Medecine updated Successfully!!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No medecine with that ID",
    })
  }
}

export const deleteMedecine = async (req, res, next) => {
  try {
    const medecine = await pool.query(
      "DELETE FROM medecine  WHERE medecine_id =$1",
      [req.params.id]
    )

    res.status(200).json({
      status: "success",
      message: "Medecine Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No medecine with that ID",
    })
  }
}
