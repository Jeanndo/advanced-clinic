import express from "express"
import * as labControllers from "./../controllers/labController.js"

const router = express.Router()

router
  .route("/")
  .get(labControllers.getAllLabs)
  .post(labControllers.createMedecine)

router
  .route("/:id")
  .get(labControllers.getLab)
  .patch(labControllers.updateLab)
  .delete(labControllers.deleteLab)

export default router
