// @ts-nocheck
import pool from "./../db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await pool.query("SELECT * FROM users WHERE email=$1", [email])

    if (!user || (await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid Email or Password",
      })
    }
    const token = await jwt.sign(
      { id: user.user_id },
      process.env.JWT_SECRETE,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    )
    res.status(200).json({
      status: "success",
      message: "Logged in successfully!!",
      token,
      data: {
        user,
      },
    })
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "Un Authorized",
    })
  }
}
