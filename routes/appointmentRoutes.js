import express from "express"
import * as appointmentControllers from "./../controllers/appointmentController.js"

const router = express.Router()

router
  .route("/")
  .get(appointmentControllers.getAllAppointments)
  .post(appointmentControllers.createAppointment)

router
  .route("/:id")
  .get(appointmentControllers.getAppointment)
  .patch(appointmentControllers.updateAppointment)
  .delete(appointmentControllers.deleteAppointment)

export default router
