const express = require("express");

const {
  createDoctor,
  getDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
} = require("./../controllers/doctorController");

const router = express.Router();

router.route("/").post(createDoctor).get(getAllDoctors)

router.route("/:uuid").get(getDoctor).patch(updateDoctor).delete(deleteDoctor);

module.exports = router;
