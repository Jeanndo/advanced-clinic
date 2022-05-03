const express = require("express");

const {
  createDoctor,
  getDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
} = require("./../controllers/doctorController");

const router = express.Router();

router.route("/").get(getAllDoctors).post(createDoctor);

router.route("/:id").get(getDoctor).patch(updateDoctor).delete(deleteDoctor);

module.exports = router;
