const express = require("express");
const {
  createLab,
  getLab,
  getAllLabs,
  updateLab,
  deleteLab,
} = require("./../controllers/labController");

const router = express.Router();

router.route("/").get(getAllLabs).post(createLab);

router.route("/:id").get(getLab).patch(updateLab).delete(deleteLab);

module.exports = router;
