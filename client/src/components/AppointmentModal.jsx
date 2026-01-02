import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AppointmentModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

        
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       bg-white w-[90%] max-w-md rounded-xl shadow-xl z-50 p-6"
          >
           
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Book Appointment
              </h2>
              <button onClick={onClose}>
                <X className="text-gray-500 hover:text-red-500" />
              </button>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Patient Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Department</option>
                <option>General Physician</option>
                <option>Cardiology</option>
                <option>Dental</option>
                <option>Orthopedic</option>
              </select>

              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Confirm Appointment
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
