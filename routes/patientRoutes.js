import express from "express"
import * as patientControllers from "./../controllers/patientController.js"

const router = express.Router()

router
  .route("/")
  .get(patientControllers.getAllPatients)
  .post(patientControllers.createPatient)
router
  .route("/:id")
  .get(patientControllers.getPatient)
  .patch(patientControllers.updatePatient)
  .delete(patientControllers.deletePatient)

export default router
