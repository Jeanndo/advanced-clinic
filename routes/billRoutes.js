import express from "express"
import * as billControllers from "./../controllers/billController.js"

const router = express.Router()

router
  .route("/")
  .get(billControllers.getAllBill)
  .post(billControllers.createBill)

router
  .route("/:id")
  .get(billControllers.getBill)
  .patch(billControllers.updateBill)
  .delete(billControllers.deleteBill)

export default router
