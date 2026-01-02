import { motion } from "framer-motion";
import { useState } from "react";
import servicesData from "../data/servicesData";

export default function ServiceSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Medical Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of healthcare services delivered by experienced
            doctors with modern medical facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <div className="p-6">

                 
                  <div className="w-14 h-14 mb-4 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon size={28} className="text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-blue-600">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={() =>
                      setActiveId(activeId === service.id ? null : service.id)
                    }
                    className="mt-4 text-sm font-medium text-blue-600 hover:underline"
                  >
                    {activeId === service.id ? "Hide Details" : "View Details"}
                  </button>

                 
                  {activeId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm text-gray-600"
                    >
                      <p>{service.details}</p>

                      <div className="mt-3">
                        <p className="font-medium text-gray-800 mb-1">
                          Common Symptoms:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          {service.symptoms.map((symptom, i) => (
                            <li key={i}>{symptom}</li>
                          ))}
                        </ul>
                      </div>

                      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Book Appointment
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
