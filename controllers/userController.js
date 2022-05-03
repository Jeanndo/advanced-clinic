const {User} = require("./../models")
const bcrypt = require("bcryptjs")

const createUser = async (req, res, next) => {
  try {
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

    const user = await User.findOne({
      where:{email}
    })

    if (user) {
      return res.status(403).json({
        status: "fail",
        message: "User Alredy exist. Please use a different Account!",
      })
    }

    const hashedPass = await bcrypt.hash(password, 12)
    password = hashedPass
    
    const newUser = await User.create({
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
    })

    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        user: newUser,
      },
    })
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong  please try again!!!",
      error: error.stack,
    })
  }
}

const getAllUsers = async (req, res, next) => {
  try {

    const users = await User.findAll()

    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: "something went wrong!",
      error: error.stack,
    })
  }
}

const getUser = async (req, res, next) => {
  try {
    const uuid = req.params.uuid

    const user = await User.findOne({
      where:{uuid}
    })

    if(!user){
      return res.status(404).json({message:"No user found with that ID"})
    }

    res.status(200).json({
      status: "success",
      data: {
        users: user,
      },
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while getting User",
      error: error.stack,
    })
  }
}

const updateUser = async (req, res, next) => {
  
  try {
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

    const uuid = req.params.uuid
    const user = await User.findOne({
      where:{uuid}
    })

    if(!user){
      return res.status(404).json({message:"No user found with that ID"})
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.Nid = Nid;
    user.jobTitle = jobTitle;
    user.role = role;
    user.country = country;
    user.dob = dob;
    user.gender = gender;
    user.address = address;
    user.phone = phone;
    user.email = email;
    user.department_id = department_id;
    user.password = password;
 
    await user.save()

    res.status(200).json({
      status: "success",
      message: "Updated Successfully! 👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while updating user",
    })
  }
}

 const deleteUser = async (req, res, next) => {
  try {

    const uuid =  req.params.uuid
    const user = await User.findOne({
      where:{uuid}
    })
   if(!user){
     return res.status(404).json({
       message:"No user Found with that ID"
     })
   }

   await user.destroy()

    res.status(200).json({
      status: "success",
      message: "User Deleted Successfully !!👍🏾",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error While Deleting User",
    })
  }
}


module.exports ={createUser,getUser,getAllUsers,updateUser,deleteUser,}