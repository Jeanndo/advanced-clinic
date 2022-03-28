import express from "express"
import * as doctorControllers from "./../controllers/doctorController.js"

const router = express.Router()

router
  .route("/")
  .get(doctorControllers.getAllDoctors)
  .post(doctorControllers.createDoctor)

router
  .route("/:id")
  .get(doctorControllers.getDoctor)
  .patch(doctorControllers.updateDoctor)
  .delete(doctorControllers.deleteDoctor)

export default router
