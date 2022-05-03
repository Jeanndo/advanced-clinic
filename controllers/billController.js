const { Bill } = require("./../models");

const createBill = async (req, res, next) => {
  try {
    let {
      patientID,
      patientType,
      doctorCharge,
      medecineCharge,
      roomCharge,
      operationCharge,
      nursingCharge,
      labCharge,
      insuranceType,
      numberOfDays,
      totalBill,
    } = req.body;

    const total =
      doctorCharge +
      medecineCharge +
      roomCharge +
      operationCharge +
      nursingCharge +
      labCharge;
    totalBill = total;

    if (
      !patientID ||
      !patientType ||
      !doctorCharge ||
      !medecineCharge ||
      !roomCharge ||
      !operationCharge ||
      !nursingCharge ||
      !labCharge ||
      !insuranceType ||
      !numberOfDays
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Data supplied, please provide valid information",
      });
    }

    const newBill = await Bill.create({
      patientID,
      patientType,
      doctorCharge,
      medecineCharge,
      roomCharge,
      operationCharge,
      nursingCharge,
      labCharge,
      insuranceType,
      numberOfDays,
      totalBill,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        bills: newBill,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating a new bill",
      error: error.stack,
    });
  }
};

const getAllBills = async (req, res, next) => {
  try {
    const bills = await Bill.findAll();

    res.status(200).json({
      status: "success",
      result: bills.length,
      data: {
        bills: bills,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while fetching all bills",
      error: error.stack,
    });
  }
};

const getBill = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const bill = await Bill.findOne({ where: { uuid } });

    if (!bill) {
      return res
        .status(404)
        .json({ status: "fail", message: "No Bill found with that ID" });
    }

    res.status(200).json({
      status: "success",
      data: {
        bills: bill,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while fetching a Bill",
    });
  }
};

const updateBill = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    let {
      patientID,
      patientType,
      doctorCharge,
      medecineCharge,
      roomCharge,
      operationCharge,
      nursingCharge,
      labCharge,
      insuranceType,
      numberOfDays,
      totalBill,
    } = req.body;

    if (
      !patientID ||
      !patientType ||
      !doctorCharge ||
      !medecineCharge ||
      !roomCharge ||
      !operationCharge ||
      !nursingCharge ||
      !labCharge ||
      !insuranceType ||
      !numberOfDays
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Data supplied, please provide valid information",
      });
    }

    const total =
      doctorCharge +
      medecineCharge +
      roomCharge +
      operationCharge +
      nursingCharge +
      labCharge;
    totalBill = total;

    const bill = await Bill.findOne({ where: { uuid } });

    if (!bill) {
      return res
        .status(404)
        .json({ status: "fail", message: "No Bill found with that ID" });
    }

    res.status(200).json({
      status: "success",
      message: "Bill updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while updating a Bill",
    });
  }
};

const deleteBill = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const bill = await Bill.findOne({ where: { uuid } });

    if (!bill) {
      return res
        .status(404)
        .json({ status: "fail", message: "No Bill found with that ID" });
    }

    await bill.destroy();

    res.status(200).json({
      status: "success",
      message: "Bill Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting a Bill",
    });
  }
};

module.exports = { createBill, getBill, getAllBills, updateBill, deleteBill };
