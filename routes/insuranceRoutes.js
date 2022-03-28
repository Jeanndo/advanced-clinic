import express from "express"
import * as insuranceControllers from "./../controllers/insuranceController.js"

const router = express.Router()

router
  .route("/")
  .get(insuranceControllers.getAllInsurance)
  .post(insuranceControllers.createInsurance)

router
  .route("/:id")
  .get(insuranceControllers.getInsurance)
  .patch(insuranceControllers.updateInsurance)
  .delete(insuranceControllers.deleteInsurance)

export default router
