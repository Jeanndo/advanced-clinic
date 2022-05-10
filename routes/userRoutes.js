const express = require("express");

const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("./../controllers/userController");

const Login = require("./../authentication/Login");

const router = express.Router();

router.post("/login", Login);
router.route("/").get(getAllUsers)
router.route('/:departmentId').post(createUser);
router.route("/:uuid").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
