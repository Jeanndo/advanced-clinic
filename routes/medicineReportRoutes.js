const express = require("express");

const {
  createMedecineReport,
  getAllMedReports,
  getMedReport,
  updateMedReport,
  deleteMedReport,
} = require("./../controllers/medecineReportController");

const router = express.Router();

router.route("/").get(getAllMedReports).post(createMedecineReport);
router
  .route("/:id")
  .get(getMedReport)
  .patch(updateMedReport)
  .delete(deleteMedReport);

module.exports = router;
