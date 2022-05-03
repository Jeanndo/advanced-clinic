const express = require("express");
const {
  createMedecine,
  getAllMedecines,
  getMedecine,
  updateMedecine,
  deleteMedecine,
} = require("./../controllers/medecineController");

const router = express.Router();

router.route("/").get(getAllMedecines).post(createMedecine);

router
  .route("/:id")
  .get(getMedecine)
  .patch(updateMedecine)
  .delete(deleteMedecine);

module.exports = router;
