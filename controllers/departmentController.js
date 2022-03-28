import pool from "./../db.js"

export const createDepartment = async (req, res, next) => {
  const { department_name, department_manager } = req.body
  try {
    const newDepartment = await pool.query(
      "INSERT INTO department ( department_name, department_manager) VALUES($1,$2) RETURNING *",
      [department_name, department_manager]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        departments: newDepartment.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await pool.query("SELECT * FROM department")
    res.status(200).json({
      status: "success",
      results: departments.rows.length,
      data: {
        departments,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getDepartment = async (req, res, next) => {
  try {
    const departments = await pool.query(
      "SELECT * FROM department WHERE department_id =$1",
      [req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        departments,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No department with that ID",
    })
  }
}

export const updateDepartment = async (req, res, next) => {
  const { department_name, department_manager } = req.body
  try {
    const department = await pool.query(
      "UPDATE department SET department_name =$1, department_manager =$2 WHERE department_id =$3",
      [department_name, department_manager, req.params.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        departments: department,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No department with that ID",
    })
  }
}

export const deleteDepartment = async (req, res, next) => {
  try {
    const department = await pool.query(
      "DELETE FROM department  WHERE department_id =$1",
      [req.params.id]
    )

    res.status(200).json({
      status: "success",
      message: "Department Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No department with that ID",
    })
  }
}
