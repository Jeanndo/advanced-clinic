import pool from "./../db.js"

export const createMedecineReport = async (req, res, next) => {
  const {
    company,
    quantity,
    production_date,
    expired_date,
    country,
    Supplier_id,
  } = req.body
  try {
    const newMedReport = await pool.query(
      "INSERT INTO medicineReport (company,quantity,production_date,expired_date,country,Supplier_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [company, quantity, production_date, expired_date, country, Supplier_id]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        report: newMedReport.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllMedReports = async (req, res, next) => {
  try {
    const medReports = await pool.query("SELECT * FROM medicineReport")
    res.status(200).json({
      status: "success",
      data: {
        report: medReports,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getMedReport = async (req, res, next) => {
  try {
    const medReport = await pool.query(
      "SELECT * FROM medicineReport WHERE medecine_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        report: medReport,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No report with that ID",
    })
  }
}

export const updateMedReport = async (req, res, next) => {
  const {
    company,
    quantity,
    production_date,
    expired_date,
    country,
    Supplier_id,
  } = req.body
  try {
    const medReport = await pool.query(
      "UPDATE patients SET company =$1 ,quantity =$2,production_date =$3,expired_date =$4,country =$5, WHERE medecine_id =$6",
      [
        company,
        quantity,
        production_date,
        expired_date,
        country,
        Supplier_id,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      data: {
        report: medReport,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No report with that ID",
    })
  }
}

export const deleteMedReport = async (req, res, next) => {
  try {
    const medReport = await pool.query(
      "DELETE FROM medicineReport  WHERE medecine_id =$1",
      [req.params.id]
    )

    res.status(200).json({
      status: "success",
      message: "Report Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Report with that ID",
    })
  }
}
