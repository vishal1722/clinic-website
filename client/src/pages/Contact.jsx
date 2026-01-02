import { motion } from "framer-motion";



export default function Contact() {
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact MediCare Clinic
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are here to help you. Reach out for appointments, inquiries,
            or emergency support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow p-8"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              Clinic Information
            </h3>

          
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
              alt="Hospital"
              className="mt-4 rounded-xl shadow-sm"
            />

            <div className="mt-6 space-y-4 text-gray-700">
              <p>📍 <strong>Address:</strong> 2nd Floor, MediCare Building, MG Road, Pune</p>
              <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
              <p>✉️ <strong>Email:</strong> contact@medicareclinic.com</p>
              <p>🕒 <strong>Hours:</strong> Mon – Sat: 9:00 AM – 8:00 PM</p>
              <p className="text-red-600 font-medium">
                🚑 Emergency Services Available 24/7
              </p>
            </div>

           
            <div className="mt-6 rounded-xl overflow-hidden">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps?q=Pune%20Maharashtra&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow p-8"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              Book an Appointment / Send Message
            </h3>

           
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600" />
              <input type="email" placeholder="Email Address" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600" />
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600" />
              <textarea rows="4" placeholder="Message / Appointment Details" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"></textarea>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Submit Request
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Our team will contact you within 24 hours.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
