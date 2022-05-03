// @ts-nocheck
const {User} = require("./../models")
const jwt  = require("jsonwebtoken")
const  bcrypt = require("bcryptjs")


const Login = async (req, res, next) => {

  try {
    const { email, password } = req.body

    const user = await User.findOne({
        where:{email}
    })
    
    if (!user || !(await bcrypt.compare(password, user.password))) {

      return res.status(401).json({
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
      message: `${user.firstname} Logged in successfully!!`,
      token,
      data: {
        user: user,
      },
    })
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "Error while logging in",
      err: error.stack,
    })
  }
}

module.exports = Login
