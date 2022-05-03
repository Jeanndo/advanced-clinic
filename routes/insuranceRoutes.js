const express = require("express");
const {
  createInsurance,
  getInsurance,
  getAllInsurance,
  updateInsurance,
  deleteInsurance,
} = require("./../controllers/insuranceController");

const router = express.Router();

router.route("/").get(getAllInsurance).post(createInsurance);

router
  .route("/:id")
  .get(getInsurance)
  .patch(updateInsurance)
  .delete(deleteInsurance);

module.exports = router;
