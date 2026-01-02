import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. Rahul Sharma", role: "Physician", time: "10 AM – 2 PM" },
  { name: "Dr. Neha Patel", role: "Pediatrician", time: "3 PM – 7 PM" }
];

export default function Doctors() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center">
          Available Doctors
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              className="border p-6 rounded-xl hover:border-primary"
            >
              <h4 className="text-lg font-semibold text-primary">
                {doc.name}
              </h4>
              <p className="text-gray-600">{doc.role}</p>
              <p className="text-sm text-gray-500 mt-1">{doc.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
