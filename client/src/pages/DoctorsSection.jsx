import { motion } from "framer-motion";
import { useState } from "react";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    specialty: "Physician",
    experience: "12+ Years Experience",
    qualification: "MBBS, MD (General Medicine)",
    timing: "10 AM – 2 PM",
    fee: "₹500 Consultation Fee",
    languages: ["English", "Hindi", "Marathi"],
    interests: ["Preventive Care", "Chronic Disease Management"],
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    about:
      "Dr. Rahul Sharma is a senior physician with extensive experience in preventive medicine and long-term patient care.",
    status: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Neha Patel",
    specialty: "Pediatrician",
    experience: "8+ Years Experience",
    qualification: "MBBS, DCH",
    timing: "3 PM – 7 PM",
    fee: "₹600 Consultation Fee",
    languages: ["English", "Hindi"],
    interests: ["Child Nutrition", "Immunization"],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    about:
      "Dr. Neha Patel specializes in pediatric care with a compassionate approach toward child health and development.",
    status: "Available Today",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    specialty: "Cardiologist",
    experience: "15+ Years Experience",
    qualification: "MBBS, MD, DM (Cardiology)",
    timing: "11 AM – 4 PM",
    fee: "₹800 Consultation Fee",
    languages: ["English", "Hindi"],
    interests: ["Heart Screening", "Lifestyle Management"],
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    about:
      "Dr. Amit Verma is a renowned cardiologist known for advanced cardiac diagnostics and patient-centered treatment.",
    status: "Limited Slots",
  },
];

export default function DoctorsSection() {
  const [activeDoctor, setActiveDoctor] = useState(null);

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Experienced Doctors
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our clinic is proud to have a team of highly qualified doctors who
            provide ethical, compassionate, and patient-focused medical care.
          </p>
        </motion.div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  {doctor.status}
                </span>
              </div>

             
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600">
                  {doctor.name}
                </h3>

                <p className="text-gray-700">{doctor.specialty}</p>
                <p className="text-sm text-gray-500 mt-1">
                  🎓 {doctor.qualification}
                </p>
                <p className="text-sm text-gray-500">
                  ⏳ {doctor.experience}
                </p>
                <p className="text-sm text-gray-500">
                  🕒 {doctor.timing}
                </p>
                <p className="text-sm text-gray-500">
                  💰 {doctor.fee}
                </p>

                <button
                  onClick={() =>
                    setActiveDoctor(
                      activeDoctor === doctor.id ? null : doctor.id
                    )
                  }
                  className="mt-4 text-sm font-medium text-blue-600 hover:underline"
                >
                  {activeDoctor === doctor.id
                    ? "Hide Details"
                    : "View Full Profile"}
                </button>

               
                {activeDoctor === doctor.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-sm text-gray-600"
                  >
                    <p>{doctor.about}</p>

                    <div className="mt-3">
                      <p className="font-medium text-gray-800">
                        Special Interests:
                      </p>
                      <ul className="list-disc list-inside">
                        {doctor.interests.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3">
                      <p className="font-medium text-gray-800">
                        Languages Spoken:
                      </p>
                      <p>{doctor.languages.join(", ")}</p>
                    </div>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                      Book Appointment
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
