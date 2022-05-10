const { Result, Doctor, Client, Exam } = require("./../models");

const requestExam = async (req, res) => {
  try {
    const { comment } = req.body;
    const { patientId, examId, doctorId } = req.params;

    const patient = await Client.findOne({ where: { id: patientId } });

    if (!patient) {
      return res.status(404).json({ message: "No patient found with that ID" });
    }
    const exam = await Exam.findOne({ where: { id: examId } });

    if (!exam) {
      return res.status(404).json({ message: "No Exam found with that ID" });
    }

    const doctor = await Doctor.findOne({ where: { id: doctorId } });

    if (!doctor) {
      return res.status(404).json({ message: "No Doctor found with that ID" });
    }

    const examRequest = await Result.create({
      examId: exam.id,
      patientId: Client.id,
      comment: comment,
    });

    res.status(201).json({
      status: "success",
      data: {
        exam: examRequest,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating exam request",
      err: error.stack,
    });
  }
};

const getExam = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const exam = await Result.findOne({ where: { uuid } });
    if (!exam) {
      return res
        .status(404)
        .json({ status: "fail", message: "No exam found with that ID" });
    }

    res.status(200).json({
      status: "success",
      data: {
        exam: exam,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting exam result",
      err: error.stack,
    });
  }
};

const getAllExams = async (req, res) => {
  try {
    const exams = await Result.findAndCountAll();

    res.status(200).json({
      status: "success",
      exams: exams,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting all exams",
      err: error.stack,
    });
  }
};

const updateExam = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const { value } = req.body;

    const exam = await Result.findOne({ where: { uuid } });

    if (!exam) {
      return res.status(404).json({
        status: "fail",
        message: "No exam found with that ID",
      });
    }

    exam.value = value;
    await exam.save();

    res.status(200).json({
      status: "success",
      message: "Exam updated successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while updating exam",
      err: error.stack,
    });
  }
};

const deleteExam = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const exam = await Result.findOne({ where: { uuid } });
    if (!exam) {
      return res.status(404).json({
        status: "fail",
        message: "No exam found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Exam deletes successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting exam",
      err: error.stack,
    });
  }
};

module.exports = { requestExam, getExam, getAllExams, updateExam, deleteExam };
