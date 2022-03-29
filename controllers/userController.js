import pool from "./../db.js"
import bcrypt from "bcryptjs"

export const createUser = async (req, res, next) => {
  try {
    let {
      firstName,
      lastName,
      Nid,
      jobTitle,
      role,
      country,
      dob,
      gender,
      address,
      phone,
      email,
      department_id,
      password,
    } = req.body

    const user = await pool.query("SELECT * FROM users WHERE email=$1", [email])

    if (user.rows[0]) {
      return res.status(403).json({
        status: "fail",
        message: "User Alredy exist. Please use a different Account!",
      })
    }
    const hashedPass = await bcrypt.hash(password, 12)
    password = hashedPass
    const newUser = await pool.query(
      "INSERT INTO users (firstName,lastName,Nid,jobTitle,role,country,dob,gender,address,phone,email,department_id,password) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
      [
        firstName,
        lastName,
        Nid,
        jobTitle,
        role,
        country,
        dob,
        gender,
        address,
        phone,
        email,
        department_id,
        password,
      ]
    )
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        user: newUser.rows[0],
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went very wrong  please try again!!!",
      error: error.stack,
    })
    console.log(error.stack)
  }
}

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await pool.query("SELECT * FROM users")
    res.status(200).json({
      status: "success",
      result: users.rows.length,
      data: {
        users: users.rows,
      },
    })
  } catch (error) {
    res.status(200).json({
      message: "something went very wrong",
      error: error.stack,
    })
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_id =$1", [
      req.params.id,
    ])
    res.status(200).json({
      status: "success",
      data: {
        users: user.rows[0],
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Use with that ID",
      error: error.stack,
    })
  }
}

export const updateUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    Nid,
    jobTitle,
    role,
    country,
    dob,
    gender,
    address,
    phone,
    email,
    department_id,
    password,
  } = req.body
  try {
    const user = await pool.query(
      "UPDATE users SET firstName =$1 ,lastName =$2,Nid =$3,jobTitle =$4,role =$5,country =$6,dob =$7,gender =$8,address =$9,phone =$10,email =$11,department_id =$12,password =$13 WHERE user_id =$14",
      [
        firstName,
        lastName,
        Nid,
        jobTitle,
        role,
        country,
        dob,
        gender,
        address,
        phone,
        email,
        department_id,
        password,
        req.params.id,
      ]
    )
    res.status(200).json({
      status: "success",
      message: "Updated Successfully! 👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Use with that ID",
    })
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const user = await pool.query("DELETE FROM users  WHERE user_id =$1", [
      req.params.id,
    ])

    res.status(200).json({
      status: "success",
      message: "User Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No Use with that ID",
    })
  }
}
