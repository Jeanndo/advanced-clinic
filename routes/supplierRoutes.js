import express from "express"
import * as supplierControllers from "./../controllers/supplierController.js"

const router = express.Router()

router
  .route("/")
  .get(supplierControllers.getAllSuplliers)
  .post(supplierControllers.createSupplier)

router
  .route("/:id")
  .get(supplierControllers.getSupplier)
  .patch(supplierControllers.updateSupplier)
  .delete(supplierControllers.DeleteSupplier)

export default router
