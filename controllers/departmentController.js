const { Department } = require("./../models");

const createDepartment = async (req, res, next) => {
  try {
    const { departmentName, departmentManager } = req.body;

    if (!departmentManager || !departmentName) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Data supplied, please provide valid information",
      });
    }

    const newDepartment = await Department.create({
      departmentName,
      departmentManager,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        departments: newDepartment,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while creating a new department",
      error: error.stack,
    });
  }
};

const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await Department.findAll();

    res.status(200).json({
      status: "success",
      result: departments.length,
      data: {
        departments,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting all departments",
      error: error.stack,
    });
  }
};

const getDepartment = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const department = await Department.findOne({ where: { uuid: uuid } });

    if (!department) {
      res.status(404).json({
        status: "fail",
        message: "No department found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        department,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error while getting a Department",
    });
  }
};

const updateDepartment = async (req, res, next) => {
  try {
    const { departmentName, departmentManager } = req.body;

    const uuid = req.params.uuid;

    const department = await Department.findOne({ where: { uuid: uuid } });

    if (!department) {
      res.status(404).json({
        status: "fail",
        message: "No department found with that ID",
      });
    }

    department.departmentName = departmentName;
    department.departmentManager = departmentManager;
    await department.save();

    res.status(200).json({
      status: "success",
      message: "Updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error while updating a department",
    });
  }
};

const deleteDepartment = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const department = await Department.findOne({ where: { uuid: uuid } });

    if (!department) {
      res.status(404).json({
        status: "fail",
        message: "No department found with that ID",
      });
    }
    await department.destroy();

    res.status(200).json({
      status: "success",
      message: "Department Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while deleting a department",
    });
  }
};

module.exports = {
  createDepartment,
  getDepartment,
  getAllDepartments,
  updateDepartment,
  deleteDepartment,
};
