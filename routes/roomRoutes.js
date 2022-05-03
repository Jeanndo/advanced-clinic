const express = require("express");
const {
  createRoom,
  getRoom,
  deleteRoom,
  getAllRooms,
  updateRoom,
} = require("./../controllers/roomController");

const router = express.Router();

router.route("/").get(getAllRooms).post(createRoom);
router.route("/:id").get(getRoom).patch(updateRoom).delete(deleteRoom);

module.exports = router;
