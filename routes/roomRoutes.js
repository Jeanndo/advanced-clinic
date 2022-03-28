import express from "express"

import * as roomControllers from "./../controllers/roomController.js"

const router = express.Router()

router
  .route("/")
  .get(roomControllers.getAllRooms)
  .post(roomControllers.createRoom)
router
  .route("/:id")
  .get(roomControllers.getRoom)
  .patch(roomControllers.updateRoom)
  .delete(roomControllers.deleteRoom)

export default router
