const express = require("express");
const {
  createAppointment,
  getAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
} = require("./../controllers/appointmentController");

const router = express.Router();

router.route("/").get(getAllAppointments).post(createAppointment);

router
  .route("/:id")
  .get(getAppointment)
  .patch(updateAppointment)
  .delete(deleteAppointment);

module.exports = router;
