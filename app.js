const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const supplierRouter = require("./routes/supplierRoutes");
const roomRouter = require("./routes/roomRoutes");
const patientRouter = require("./routes/patientRoutes");
const medecineRouter = require("./routes/medecineRoutes");
const medReportRouter = require("./routes/medicineReportRoutes");
const labRouter = require("./routes/labRoutes");
const insuranceRouter = require("./routes/insuranceRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const departmentRouter = require("./routes/departmentRoutes");
const billRouter = require("./routes/billRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const vitalRouter = require("./routes/vital.route");
const PatientVitalRouter = require("./routes/patientVital.route");


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Advanced Clinic powered by KURANGA Digital Ltd",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/suppliers", supplierRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/medecines", medecineRouter);
app.use("/api/v1/medreports", medReportRouter);
app.use("/api/v1/labs", labRouter);
app.use("/api/v1/insurances", insuranceRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/departments", departmentRouter);
app.use("/api/v1/bills", billRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/vitals", vitalRouter);
app.use("/api/v1/patient/vitals", PatientVitalRouter);


module.exports = app;
