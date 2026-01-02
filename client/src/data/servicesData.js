import {
  HeartPulse,
  Stethoscope,
  Brain,
  Baby,
  Ambulance,
  Eye,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Cardiology",
    shortDesc: "Advanced heart care and diagnosis.",
    details:
      "We provide comprehensive cardiology services including ECG, heart health monitoring, and treatment.",
    symptoms: ["Chest pain", "Shortness of breath", "Irregular heartbeat"],
    icon: HeartPulse,
  },
  {
    id: 2,
    title: "General Checkup",
    shortDesc: "Routine health checkups for all age groups.",
    details:
      "Regular health checkups help in early detection and prevention of diseases.",
    symptoms: ["Fever", "Fatigue", "Body pain"],
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Neurology",
    shortDesc: "Expert care for brain and nervous system.",
    details:
      "We diagnose and treat neurological disorders with advanced technology.",
    symptoms: ["Headache", "Dizziness", "Seizures"],
    icon: Brain,
  },
  {
    id: 4,
    title: "Pediatrics",
    shortDesc: "Complete healthcare for children and infants.",
    details:
      "Specialized pediatric care ensuring healthy growth and development.",
    symptoms: ["Fever", "Cough", "Cold"],
    icon: Baby,
  },
  {
    id: 5,
    title: "Ophthalmology",
    shortDesc: "Eye care and vision correction services.",
    details:
      "Comprehensive eye checkups and advanced eye treatment facilities.",
    symptoms: ["Blurred vision", "Eye pain", "Redness"],
    icon: Eye,
  },
  {
    id: 6,
    title: "Emergency Care",
    shortDesc: "24/7 emergency medical services.",
    details:
      "Immediate care for accidents and critical medical conditions.",
    symptoms: ["Accidents", "Severe pain", "Breathing problems"],
    icon: Ambulance,
  },
];

export default servicesData;
