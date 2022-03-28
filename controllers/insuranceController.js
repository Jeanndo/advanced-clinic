import pool from "./../db.js"

export const createInsurance = async (req, res, next) => {
  const {
    Insurance_code,
    insurance_type,
    published_date,
    expired_date,
    medical_coverage,
    entry_fees,
  } = req.body
  try {
    const newInsurance = await pool.query(
      "INSERT INTO medecine (Insurance_code,insurance_type,published_date,expired_date,medical_coverage,entry_fees) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [
        Insurance_code,
        insurance_type,
        published_date,
        expired_date,
        medical_coverage,
        entry_fees,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        insurance: newInsurance.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllInsurance = async (req, res, next) => {
  try {
    const insurance = await pool.query("SELECT * FROM insurance")
    res.status(200).json({
      status: "success",
      results: insurance.rows.length,
      data: {
        insurance,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getInsurance = async (req, res, next) => {
  try {
    const insurance = await pool.query(
      "SELECT * FROM insurance WHERE insurance_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        insurance,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No insurance with that ID",
    })
  }
}

export const updateInsurance = async (req, res, next) => {
  const {
    Insurance_code,
    insurance_type,
    published_date,
    expired_date,
    medical_coverage,
    entry_fees,
  } = req.body
  try {
    const insurance = await pool.query(
      "UPDATE patients SET Insurance_code =$1 ,insurance_type =$2,published_date =$3,expired_date =$4,medical_coverage =$5,entry_fees =$6 WHERE insurance_id =$7",
      [
        Insurance_code,
        insurance_type,
        published_date,
        expired_date,
        medical_coverage,
        entry_fees,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      data: {
        insurance,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No insurance with that ID",
    })
  }
}

export const deleteInsurance = async (req, res, next) => {
  try {
    const insurance = await pool.query(
      "DELETE FROM insurance  WHERE insurance_id =$1",
      [req.params.id]
    )

    res.status(200).json({
      status: "success",
      message: "Insurance Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No insurance with that ID",
    })
  }
}
