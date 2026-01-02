import { HeartPulse, Stethoscope, Brain, Ambulance } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cardiology",
    desc: "Advanced heart care with modern equipment.",
    icon: HeartPulse,
  },
  {
    title: "General Checkup",
    desc: "Routine health checkups for all ages.",
    icon: Stethoscope,
  },
  {
    title: "Neurology",
    desc: "Expert brain and nervous system treatment.",
    icon: Brain,
  },
  {
    title: "Emergency Care",
    desc: "24/7 emergency medical support.",
    icon: Ambulance,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our <span className="text-blue-600">Services</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition bg-white"
            >
              
              <service.icon
                size={42}
                className="text-blue-600 mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
