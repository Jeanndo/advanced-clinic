const { Room } = require("./../models");

const createRoom = async (req, res, next) => {
  const { roomType, roomStatus } = req.body;
  try {
    const newRoom = await Room.create({
      roomType,
      roomStatus,
    });

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        room: newRoom,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error while creating room",
      error: error.stack,
    });
  }
};

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.findAll();

    res.status(200).json({
      status: "success",
      result: rooms.length,
      data: {
        rooms,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error while getting All users",
      error: error.stack,
    });
  }
};

const getRoom = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const room = await Room.findOne({
      where: { uuid },
    });

    if (!room) {
      return res.status(404).json({ message: "No Room found with that ID" });
    }
    res.status(200).json({
      status: "success",
      data: {
        rooms: room,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while getting rooms",
    });
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const uuid = res.params.uuid;
    const { roomType, roomStatus } = req.body;

    const room = await Room.findOne({
      where: { uuid },
    });

    if (!room) {
      return res.status(404).json({
        message: "No room found with that ID",
      });
    }

    room.roomType = roomType;
    room.roomStatus = roomStatus;
    await room.save();

    res.status(200).json({
      status: "success",
      message: "updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while updating a Room",
      err: error.stack,
    });
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const room = await Room.findOne({
      where: { uuid },
    });

    if (!room) {
      return res.status(404).json({
        message: "No room found with that ID",
      });
    }
    await room.destroy();

    res.status(200).json({
      status: "success",
      message: "Room Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while deleting room",
    });
  }
};


module.exports ={createRoom,getRoom,deleteRoom,getAllRooms,updateRoom,}