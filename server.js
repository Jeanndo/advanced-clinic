const dotenv = require("dotenv")
const app  = require("./app.js")
const {sequelize} = require("./models")

dotenv.config({ path: "./config.env" })

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
   await sequelize.authenticate()
  console.log("Database connected Successfully!!")
})
