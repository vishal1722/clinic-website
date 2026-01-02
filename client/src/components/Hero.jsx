import { motion } from "framer-motion";
import { useState } from "react";
import AppointmentModal from "../components/AppointmentModal";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <section className="pt-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Trusted Healthcare <br />
              <span className="text-blue-600">For Your Family</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-xl mx-auto md:mx-0">
              Ethical, affordable, and expert medical services with modern
              facilities and experienced doctors you can trust.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-black px-8 py-3 rounded-lg shadow hover:bg-blue-700"
              >
                Book Appointment
              </motion.button>

             <button
  onClick={() => navigate("/services")}
  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg shadow
  hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
>
  View Services
</button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-blue-600">10+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-blue-600">50k+</h4>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-blue-600">24/7</h4>
                <p className="text-sm text-gray-600">Emergency Care</p>
              </div>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
              alt="Doctor"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-xl"
            />

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="absolute bottom-6 right-4 bg-white p-4 rounded-xl shadow-lg"
>
  <p className="text-sm font-semibold text-gray-800">
    ✔ Certified Doctors
  </p>
  <p className="text-xs text-gray-500">
    Trusted & verified professionals
  </p>
</motion.div>

          </motion.div>
        </div>
      </section>

     
      <AppointmentModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
