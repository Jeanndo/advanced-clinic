import express from "express"
import * as departmentControllers from "./../controllers/departmentController.js"

const router = express.Router()

router
  .route("/")
  .get(departmentControllers.getAllDepartments)
  .post(departmentControllers.createDepartment)

router
  .route("/:id")
  .get(departmentControllers.getDepartment)
  .patch(departmentControllers.updateDepartment)
  .delete(departmentControllers.deleteDepartment)

export default router
