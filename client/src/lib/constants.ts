import { Service, WorkingHour, SpecialNote, Testimonial } from "./types";

export const services: Service[] = [
  {
    title: "Cardiac Consultation",
    description: "Comprehensive evaluation of your heart health with personalized treatment plans and recommendations.",
    icon: "stethoscope"
  },
  {
    title: "ECG & Stress Tests",
    description: "State-of-the-art electrocardiogram and stress testing to evaluate heart function and diagnose conditions.",
    icon: "heartbeat"
  },
  {
    title: "Echocardiography",
    description: "Advanced cardiac imaging to visualize heart structure and function using ultrasound technology.",
    icon: "heart"
  },
  {
    title: "Medication Management",
    description: "Ongoing monitoring and adjustment of cardiac medications to optimize treatment effectiveness.",
    icon: "pills"
  },
  {
    title: "Lifestyle Counseling",
    description: "Personalized guidance on diet, exercise, and lifestyle modifications to improve heart health.",
    icon: "apple"
  },
  {
    title: "Cardiac Risk Assessment",
    description: "Comprehensive evaluation of your cardiac risk factors with personalized prevention strategies.",
    icon: "file-medical"
  }
];

export const workingHours: WorkingHour[] = [
  { day: "Monday", hours: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
  { day: "Friday", hours: "8:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export const specialNotes: SpecialNote[] = [
  {
    title: "Lunch Break",
    description: "12:30 PM - 1:30 PM (Monday-Friday)",
    type: "info"
  },
  {
    title: "Early Appointments",
    description: "Available upon request (7:00 AM - 8:00 AM)",
    type: "info"
  },
  {
    title: "Telehealth",
    description: "Virtual appointments available throughout the week",
    type: "info"
  },
  {
    title: "Holiday Schedule",
    description: "Please call for modified hours during holidays",
    type: "warning"
  }
];

export const testimonials: Testimonial[] = [
  {
    text: "Dr. Johnson took the time to listen to all of my concerns. She explained my condition and treatment options clearly, making me feel comfortable throughout the process.",
    name: "Robert M.",
    fullStars: 5,
    hasHalfStar: false
  },
  {
    text: "After several inconclusive visits elsewhere, Dr. Johnson diagnosed my condition quickly. Her expertise and compassionate approach made a difficult time much easier to navigate.",
    name: "Jennifer K.",
    fullStars: 5,
    hasHalfStar: false
  },
  {
    text: "I've been a patient for over 5 years. Dr. Johnson always stays current with the latest cardiac treatments and takes a holistic approach to my care. Highly recommended!",
    name: "David T.",
    fullStars: 4,
    hasHalfStar: true
  }
];
