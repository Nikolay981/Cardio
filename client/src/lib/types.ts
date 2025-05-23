// Service type for the services section
export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Working hours type
export interface WorkingHour {
  day: string;
  hours: string;
}

// Special notes for hours section
export interface SpecialNote {
  title: string;
  description: string;
  type: 'info' | 'warning';
}

// Testimonial type
export interface Testimonial {
  text: string;
  name: string;
  fullStars: number;
  hasHalfStar: boolean;
}

// Appointment request type
export interface AppointmentRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message?: string;
}
