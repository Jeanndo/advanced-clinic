import pool from "./../db.js"

export const createRoom = async (req, res, next) => {
  const { room_type, room_status } = req.body
  try {
    const newRoom = await pool.query(
      "INSERT INTO room (room_type, room_status) VALUES($1,$2) RETURNING *",
      [room_type, room_status]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        room: newRoom.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
  }
}

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await pool.query("SELECT * FROM room")
    res.status(200).json({
      status: "success",
      result: rooms.rows.length,
      data: {
        rooms: rooms.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getRoom = async (req, res, next) => {
  try {
    const room = await pool.query("SELECT * FROM room WHERE room_id =$1", [
      req.params.id,
    ])
    res.status(200).json({
      status: "success",
      data: {
        rooms: room.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No room with that ID",
    })
  }
}

export const updateRoom = async (req, res, next) => {
  const { room_type, room_status } = req.body
  try {
    await pool.query(
      "UPDATE room SET room_type =$1 ,room_status =$2 WHERE room_id =$3",
      [room_type, room_status, req.params.id]
    )
    res.status(200).json({
      status: "success",
      message: "updated Successfully!!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No room with that ID",
      err: error.stack,
    })
  }
}

export const deleteRoom = async (req, res, next) => {
  try {
    const room = await pool.query("DELETE FROM room  WHERE room_id =$1", [
      req.params.id,
    ])

    res.status(200).json({
      status: "success",
      message: "Room Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No room with that ID",
    })
  }
}
