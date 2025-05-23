const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// In-memory storage for appointments
class MemStorage {
  constructor() {
    this.appointments = new Map();
    this.appointmentCurrentId = 1;
  }

  async createAppointment(appointment) {
    const id = this.appointmentCurrentId++;
    const now = new Date();
    const newAppointment = {
      firstName: appointment.firstName,
      lastName: appointment.lastName,
      email: appointment.email,
      phone: appointment.phone,
      reason: appointment.reason,
      message: appointment.message || null,
      id,
      createdAt: now,
      processed: false
    };
    this.appointments.set(id, newAppointment);
    return newAppointment;
  }

  async getAllAppointments() {
    return Array.from(this.appointments.values());
  }
}

const storage = new MemStorage();

// Endpoint to submit an appointment
app.post("/api/appointment", async (req, res) => {
  try {
    const appointmentData = req.body;
    
    // Basic validation
    if (!appointmentData.firstName || !appointmentData.lastName || 
        !appointmentData.email || !appointmentData.phone || !appointmentData.reason) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }
    
    const appointment = await storage.createAppointment(appointmentData);
    
    res.status(201).json({
      success: true,
      message: "Appointment request received successfully",
      data: appointment
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request"
    });
  }
});

// Endpoint to get all appointments
app.get("/api/appointments", async (_req, res) => {
  try {
    const appointments = await storage.getAllAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching appointments"
    });
  }
});

// Default route
app.all('*', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Export for Vercel serverless function
module.exports = app;