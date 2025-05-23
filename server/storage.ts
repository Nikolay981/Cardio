import { users, appointments, type User, type InsertUser, type Appointment, type InsertAppointment } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAllAppointments(): Promise<Appointment[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private userCurrentId: number;
  private appointmentCurrentId: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.userCurrentId = 1;
    this.appointmentCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const id = this.appointmentCurrentId++;
    const now = new Date();
    // Create the appointment with proper type handling
    const newAppointment: Appointment = { 
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

  async getAllAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }
}

export const storage = new MemStorage();
