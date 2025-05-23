import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { appointmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle appointment requests
  app.post("/api/appointment", async (req, res) => {
    try {
      // Validate the request body using Zod
      const validatedData = appointmentSchema.parse(req.body);
      
      // Store the appointment request
      const appointment = await storage.createAppointment(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Appointment request received successfully",
        data: appointment
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        return res.status(400).json({
          success: false,
          message: "Invalid form submission",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Error creating appointment:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all appointments (for admin purposes)
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

  const httpServer = createServer(app);

  return httpServer;
}
