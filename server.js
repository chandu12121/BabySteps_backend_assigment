const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); 
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "Something went wrong!" });
});

const PORT =5004;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
