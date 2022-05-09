const express = require("express");

const {
  createExam,
  getExam,
  getAllExams,
  updateExam,
  deleteExam,
} = require("./../controllers/examController");

const router = express.Router();

router.route("/").post(createExam).get(getAllExams);
router.route("/:uuid").get(getExam).patch(updateExam).delete(deleteExam);

module.exports = router;
