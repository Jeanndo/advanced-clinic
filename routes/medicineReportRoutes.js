import express from "express"
import * as medecineControllers from "./../controllers/medecineReportController.js"

const router = express.Router()

router
  .route("/")
  .get(medecineControllers.getAllMedReports)
  .post(medecineControllers.createMedecineReport)
router
  .route("/:id")
  .get(medecineControllers.getMedReport)
  .patch(medecineControllers.updateMedReport)
  .delete(medecineControllers.deleteMedReport)

export default router
