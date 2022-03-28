import express from "express"
import * as medecineControllers from "./../controllers/medecineController.js"

const router = express.Router()

router
  .route("/")
  .get(medecineControllers.getAllMedecines)
  .post(medecineControllers.createMedecine)

router
  .route("/:id")
  .get(medecineControllers.getMedecine)
  .patch(medecineControllers.updateMedecine)
  .delete(medecineControllers.deleteMedecine)

export default router
