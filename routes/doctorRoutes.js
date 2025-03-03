const express = require("express");
const { getDoctors, getAvailableSlots,InsertDoctors } = require("../controllers/doctorController");
const router = express.Router();
router.get("/", getDoctors);
router.get('/doctors/:id/slots', getAvailableSlots);
router.post("/", InsertDoctors)

module.exports = router;

