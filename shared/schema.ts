import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (maintaining the existing one)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// New schema for appointment requests
export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  reason: text("reason").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
  processed: boolean("processed").default(false),
});

export const appointmentSchema = createInsertSchema(appointments).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  reason: true,
  message: true,
});

export type InsertAppointment = z.infer<typeof appointmentSchema>;
export type Appointment = typeof appointments.$inferSelect;
