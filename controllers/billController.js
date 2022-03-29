import pool from "./../db.js"

export const createBill = async (req, res, next) => {
  try {
    let {
      patient_id,
      patient_type,
      doctor_charge,
      medecine_charge,
      room_charge,
      operation_charge,
      nursing_charge,
      lab_charge,
      insurance_type,
      number_of_days,
      total_bill,
    } = req.body

    const total =
      doctor_charge +
      medecine_charge +
      room_charge +
      operation_charge +
      nursing_charge +
      lab_charge
    total_bill = total

    const newBill = await pool.query(
      "INSERT INTO bill ( patient_id,patient_type,doctor_charge,medecine_charge,room_charge,operation_charge,nursing_charge,lab_charge,insurance_type,number_of_days,total_bill) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
      [
        patient_id,
        patient_type,
        doctor_charge,
        medecine_charge,
        room_charge,
        operation_charge,
        nursing_charge,
        lab_charge,
        insurance_type,
        number_of_days,
        total_bill,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        bills: newBill.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllBill = async (req, res, next) => {
  try {
    const bills = await pool.query("SELECT * FROM bill")
    res.status(200).json({
      status: "success",
      result: bills.rows.length,
      data: {
        bills: bills.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getBill = async (req, res, next) => {
  try {
    const bill = await pool.query("SELECT * FROM bill WHERE bill_no =$1", [
      req.params.id,
    ])
    res.status(200).json({
      status: "success",
      data: {
        bills: bill.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No bill with that ID",
    })
  }
}

export const updateBill = async (req, res, next) => {
  try {
    let {
      patient_id,
      patient_type,
      doctor_charge,
      medecine_charge,
      room_charge,
      operation_charge,
      nursing_charge,
      lab_charge,
      insurance_type,
      number_of_days,
      total_bill,
    } = req.body

    const total =
      doctor_charge +
      medecine_charge +
      room_charge +
      operation_charge +
      nursing_charge +
      lab_charge

    total_bill = total

    const bill = await pool.query(
      "UPDATE bill SET patient_id =$1,patient_type =$2,doctor_charge =$3,medecine_charge =$4,room_charge =$5,operation_charge =$6,nursing_charge =$7,lab_charge =$8,insurance_type =$9,number_of_days =$10,total_bill =$11 WHERE bill_no =$12",
      [
        patient_id,
        patient_type,
        doctor_charge,
        medecine_charge,
        room_charge,
        operation_charge,
        nursing_charge,
        lab_charge,
        insurance_type,
        number_of_days,
        total_bill,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      message: "Bill updated Successfully!!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No bill with that ID",
    })
  }
}

export const deleteBill = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM bill  WHERE bill_no =$1", [req.params.id])

    res.status(200).json({
      status: "success",
      message: "Bill Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Bill with that ID",
    })
  }
}
