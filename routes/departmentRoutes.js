const express = require("express");
const {
  createDepartment,
  getDepartment,
  getAllDepartments,
  updateDepartment,
  deleteDepartment,
} = require("./../controllers/departmentController");

const router = express.Router();

router.route("/").get(getAllDepartments).post(createDepartment);

router
  .route("/:id")
  .get(getDepartment)
  .patch(updateDepartment)
  .delete(deleteDepartment);

module.exports = router;
