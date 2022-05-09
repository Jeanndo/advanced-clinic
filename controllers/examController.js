const { Exam } = require("./../models");

const createExam = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Invalid Data, Please provide valid data" });
    }

    const exam = await Exam.findOne({ where: { name } });

    if (exam) {
      return res.status(403).json({ message: "Exam is already existing!!" });
    }

    const newExam = await Exam.create({ name, description });

    res.status(201).json({
      status: "success",
      message: "Exam created successfully",
      data: {
        exam: newExam,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating an exam",
      err: error.stack,
    });
  }
};

const getExam = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const exam = await Exam.findOne({ where: { uuid } });

    if (!exam) {
      return res.status(404).json({ message: "No exam found with that ID" });
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
      message: "Error while getting an exam",
      err: error.stack,
    });
  }
};

const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.findAndCountAll();

    res.status(200).json({
      status: "success",
      data: {
        exam: exams,
      },
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
    const { name, description } = req.body;

    const exam = await Exam.findOne({ where: { uuid } });

    if (!exam) {
      return res.status(404).json({ message: "Exam found with that ID" });
    }

    exam.name = name;
    exam.description = description;

    await exam.save();

    res.status(200).json({
      status: "success",
      message: "Exam updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while updating an exam",
      err: error.stack,
    });
  }
};

const deleteExam = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const exam = await Exam.findOne({ where: { uuid } });

    if (!exam) {
      return res.status(404).json({ message: "Exam found with that ID" });
    }

    await exam.destroy();

    res.status(200).json({
      status: "success",
      message: "Exam deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting an exam",
      err: error.stack,
    });
  }
};

module.exports = { createExam, getExam, getAllExams, updateExam, deleteExam };
