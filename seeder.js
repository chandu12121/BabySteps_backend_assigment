const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");
const connectDB = require("./config/db");

const doctors = [
    {
        name: "Dr. Smith",
        specialty: "Cardiology",
        experience: 10,
        contact: "9876543210",
        workingHours: { start: 9, end: 17 }
    },
    {
        name: "Dr. John Doe",
        specialty: "Neurology",
        experience: 8,
        contact: "9876543211",
        workingHours: { start: 10, end: 18 }
    },
    {
        name: "Dr. Emily Clark",
        specialty: "Pediatrics",
        experience: 12,
        contact: "9876543212",
        workingHours: { start: 9, end: 17 }
    }
];

const seedDoctors = async () => {
    try {
        await connectDB();
        
        await Doctor.deleteMany(); // Optional: Clears old data before inserting new
        await Doctor.insertMany(doctors);
        console.log("✅ Doctors added successfully!");
    } catch (error) {
        console.error("❌ Error inserting doctors:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDoctors();

