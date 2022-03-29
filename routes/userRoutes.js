import express from "express"
import * as userControllers from "./../controllers/userController.js"
import * as auth from "./../authentication/Login.js"

const router = express.Router()

router.post("/login", auth.Login)
router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser)

router
  .route("/:id")
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser)

export default router
