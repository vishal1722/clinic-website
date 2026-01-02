import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentModal from "../components/AppointmentModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur shadow z-50"
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MediCare <span className="text-gray-800">Clinic</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAppointmentOpen(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </motion.button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white shadow-lg"
            >
              <nav className="flex flex-col gap-6 px-6 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 text-lg font-medium hover:text-blue-600 transition"
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setAppointmentOpen(true);
                  }}
                  className="mt-4 w-full bg-blue-600 text-white h-11 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Appointment
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MODAL */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </>
  );
}
