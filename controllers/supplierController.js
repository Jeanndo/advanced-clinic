import pool from "./../db.js"

export const createSupplier = async (req, res, next) => {
  const { supplier_company, phone, email, address } = req.body
  try {
    const newSupplier = await pool.query(
      "INSERT INTO supplier (supplier_company, phone, email, address) VALUES($1,$2,$3,$4) RETURNING *",
      [supplier_company, phone, email, address]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        spplier: newSupplier.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllSuplliers = async (req, res, next) => {
  try {
    const suppliers = await pool.query("SELECT * FROM supplier")
    res.status(200).json({
      status: "success",
      result: suppliers.rows.length,
      data: {
        suppliers: suppliers.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getSupplier = async (req, res, next) => {
  try {
    const supplier = await pool.query(
      "SELECT * FROM supplier WHERE supplier_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        suppliers: supplier.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Supplier with that ID",
    })
  }
}

export const updateSupplier = async (req, res, next) => {
  const { supplier_company, phone, email, address } = req.body
  try {
    await pool.query(
      "UPDATE supplier SET supplier_company =$1 ,phone =$2,email =$3,address =$4 WHERE supplier_id =$5",
      [supplier_company, phone, email, address, req.params.id]
    )
    res.status(200).json({
      status: "success",
      message: "Supplier Updated Successfully!!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No supplier with that ID",
    })
  }
}

export const DeleteSupplier = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM supplier  WHERE supplier_id =$1", [
      req.params.id,
    ])

    res.status(200).json({
      status: "success",
      message: "Supplier Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No supplier with that ID",
    })
  }
}
