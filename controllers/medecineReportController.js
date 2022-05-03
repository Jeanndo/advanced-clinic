const { MedicalReport } = require("./../models");

const createMedecineReport = async (req, res, next) => {
  try {
    const {
      company,
      quantity,
      productionDate,
      expiredDate,
      country,
      supplierId,
    } = req.body;

    if (
      !company ||
      !quantity ||
      !productionDate ||
      !supplierId ||
      expiredDate ||
      !country
    ) {
      return res
        .status(400)
        .json({ message: "Invalid Data Please provide valid information" });
    }

    const newMedReport = await MedicalReport.create({
      company,
      quantity,
      productionDate,
      expiredDate,
      country,
      supplierId,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        reports: newMedReport,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while creating a Report",
      error: error.stack,
    });
  }
};

const getAllMedReports = async (req, res, next) => {
  try {
    const medReports = await MedicalReport.findAll();

    res.status(200).json({
      status: "success",
      result: medReports.length,
      data: {
        reports: medReports,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while getting All Medical Reports",
      error: error.stack,
    });
  }
};

const getMedReport = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const medReport = await MedicalReport.findOne({ where: { uuid } });

    if (!medReport) {
      return res.status(404).json({ message: "No report found with that ID" });
    }

    res.status(200).json({
      status: "success",
      data: {
        reports: medReport.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting a report",
    });
  }
};

const updateMedReport = async (req, res, next) => {
  try {
    const {
      company,
      quantity,
      productionDate,
      expiredDate,
      country,
      supplierId,
    } = req.body;

    const uuid = req.params.uuid;

    const medReport = await MedicalReport.findOne({ where: { uuid } });

    if (!medReport) {
      return res.status(404).json({ message: "No report found with that ID" });
    }

    medReport.company = company;
    medReport.quantity = quantity;
    medReport.productionDate = productionDate;
    medReport.expiredDate = expiredDate;
    medReport.country = country;
    medReport.supplierId = supplierId;

    await medReport.save();

    res.status(200).json({
      status: "success",
      message: "Report updated successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while updating a report",
      err: error.stack,
    });
  }
};

const deleteMedReport = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const medReport = await MedicalReport.findOne({ where: { uuid } });

    if (!medReport) {
      return res.status(404).json({ message: "No report found with that ID" });
    }
    await medReport.destroy();

    res.status(200).json({
      status: "success",
      message: "Report Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Report with that ID",
    });
  }
};

module.exports = {
  createMedecineReport,
  getAllMedReports,
  getMedReport,
  updateMedReport,
  deleteMedReport,
};
