const express = require("express");
const {
  createLaboratorist,
  getLaboratorist,
  getAllLaboratorists,
  updateLaboratorist,
  deleteLaboratorist,
} = require("./../controllers/laboratolistController");

const router = express.Router();

router.route("/").post(createLaboratorist).get(getAllLaboratorists);
router
  .route("/:uuid")
  .get(getLaboratorist)
  .patch(updateLaboratorist)
  .delete(deleteLaboratorist);

module.exports = router;
