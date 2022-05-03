const express = require("express");
const {
  createBill,
  getBill,
  getAllBills,
  updateBill,
  deleteBill,
} = require("./../controllers/billController");

const router = express.Router();

router.route("/").get(getAllBills).post(createBill);

router.route("/:id").get(getBill).patch(updateBill).delete(deleteBill);

module.exports = router;
