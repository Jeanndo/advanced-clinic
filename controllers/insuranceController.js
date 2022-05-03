const { Insurance } = require("./../models");

const createInsurance = async (req, res, next) => {
  try {
    const {
      InsuranceCode,
      insuranceType,
      publishedDate,
      expiredDate,
      medicalCoverage,
      entryFees,
    } = req.body;

    if (
      !InsuranceCode ||
      !insuranceType ||
      !publishedDate ||
      !expiredDate ||
      !expiredDate ||
      !medicalCoverage ||
      entryFees
    ) {
      return res.status(400).json({
        message: "Invalid Data please provide valid information",
      });
    }

    const newInsurance = await Insurance.create({
      InsuranceCode,
      insuranceType,
      publishedDate,
      expiredDate,
      medicalCoverage,
      entryFees,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        insurance: newInsurance,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while creating new Insurance",
      error: error.stack,
    });
  }
};

const getAllInsurance = async (req, res, next) => {
  try {
    const insurances = await Insurance.findAll();

    res.status(200).json({
      status: "success",
      result: insurances.rows.length,
      data: {
        insurances: insurances.rows,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error getting All Insuarances",
      error: error.stack,
    });
  }
};

const getInsurance = async (req, res, next) => {
  try {
    const insurance = await Insurance.findOne({ where: { uuid } });

    if (!insurance) {
      return res
        .status(404)
        .json({ message: "No insurance found with that ID" });
    }

    res.status(200).json({
      status: "success",
      data: {
        insurances: insurance,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting an Insuarance",
    });
  }
};

const updateInsurance = async (req, res, next) => {
  try {
    const {
      InsuranceCode,
      insuranceType,
      publishedDate,
      expiredDate,
      medicalCoverage,
      entryFees,
    } = req.body;

    const uuid = req.params.uuid;
    const insurance = await Insurance.findOne({ where: { uuid } });

    if (!insurance) {
      return res
        .status(404)
        .json({ message: "Insurance not found with that ID" });
    }
    insurance.InsuranceCode = InsuranceCode;
    insurance.insuranceType = insuranceType;
    insurance.publishedDate = publishedDate;
    insurance.expiredDate = expiredDate;
    insurance.medicalCoverage = medicalCoverage;
    insurance.entryFees = entryFees;

    await insurance.save();

    res.status(200).json({
      status: "success",
      message: "Updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while updating an Insurance",
    });
  }
};

const deleteInsurance = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const insurance = await Insuarance.findOne({ where: { uuid } });

    if (!insurance) {
      return res
        .status(404)
        .json({ message: "No Insurance found with that ID" });
    }
    await insurance.destroy();

    res.status(200).json({
      status: "success",
      message: "Insurance Deleted Successfully !!👍🏾",
    });


  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while Deleting an Insurance",
    });
  }
};

module.exports = {
  createInsurance,
  getInsurance,
  getAllInsurance,
  updateInsurance,
  deleteInsurance,
};
