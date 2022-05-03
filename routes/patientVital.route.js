const express = require("express");

const {
  createVital,
  getVital,
  getAllVitals,
  updateVital,
  deleteVital,
} = require("./../controllers/patientVitalsController");

const router = express.Router();

router.route("/").post(createVital).get(getAllVitals);
router.route("/:uuid").get(getVital).patch(updateVital).delete(deleteVital);

module.exports = router;
