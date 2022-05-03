const express = require("express");

const {
  createPatient,
  getPatient,
  getAllPatients,
  updatePatient,
  deletePatient,
} = require("./../controllers/patientController");

const router = express.Router();

router.route("/").get(getAllPatients).post(createPatient);
router.route("/:id").get(getPatient).patch(updatePatient).delete(deletePatient);

module.exports = router;
