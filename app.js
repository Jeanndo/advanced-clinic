import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"
import supplierRouter from "./routes/supplierRoutes.js"
import roomRouter from "./routes/roomRoutes.js"
import patientRouter from "./routes/patientRoutes.js"
import medReportRouter from "./routes/medicineReportRoutes.js"
import medecineRouter from "./routes/medecineRoutes.js"
import labRouter from "./routes/labRoutes.js"
import insuranceRouter from "./routes/insuranceRoutes.js"
import doctorRouter from "./routes/doctorRoutes.js"
import departmentRouter from "./routes/departmentRoutes.js"
import billRouter from "./routes/billRoutes.js"
import appointmentRouter from "./routes/appointmentRoutes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Advanced Clinic powered by KURANGA Digital Ltd",
  })
})

app.use("/api/v1/users", userRouter)
app.use("/api/v1/suppliers", supplierRouter)
app.use("/api/v1/rooms", roomRouter)
app.use("/api/v1/patients", patientRouter)
app.use("/api/v1/medreports", medReportRouter)
app.use("/api/v1/medecines", medecineRouter)
app.use("/api/v1/labs", labRouter)
app.use("/api/v1/insurances", insuranceRouter)
app.use("/api/v1/doctors", doctorRouter)
app.use("/api/v1/departments", departmentRouter)
app.use("/api/v1/bills", billRouter)
app.use("/api/v1/appointments", appointmentRouter)

export default app
