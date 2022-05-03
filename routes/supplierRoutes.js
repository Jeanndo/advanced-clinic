const express = require("express");

const {
  getAllSuplliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require("./../controllers/supplierController");

const router = express.Router();

router.route("/").get(getAllSuplliers).post(createSupplier);

router
  .route("/:id")
  .get(getSupplier)
  .patch(updateSupplier)
  .delete(deleteSupplier);

module.exports = router;
