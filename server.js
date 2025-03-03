// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const doctorRoutes = require("./routes/doctorRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");
// const bodyParser=require("body-parser");

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.log("Failed to connect to MongoDB:", error));

// app.use("/doctors", doctorRoutes);
// app.use("/appointments", appointmentRoutes);

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).json({ message: "Something went wrong!" });
// });

// const PORT = process.env.PORT || 5004;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); 
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

dotenv.config();

const app = express();

// Connect to MongoDB Cluster
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "Something went wrong!" });
});

const PORT =5004;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
