const express = require("express");
const {
  requestExam,
  getExam,
  getAllExams,
  updateExam,
  deleteExam,
} = require("./../controllers/examResultController");

const router = express.Router();

router.route("/").get(getAllExams);
router.route("/:doctorId/:patientId/:examId").post(requestExam);
router.route("/:uuid").get(getExam).patch(updateExam).delete(deleteExam);

module.exports = router;
