const doctors = [
  {
    name: "Dr. Lina Sharma",
    specialty: "Physician",
    time: "10 AM – 2 PM",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Neha Patel",
    specialty: "Pediatrician",
    time: "3 PM – 7 PM",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Doctors() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800">
          Our Available Doctors
        </h3>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Meet our experienced and certified medical professionals who are
          dedicated to providing quality healthcare with compassion and care.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
            >
             
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

             
              <div className="p-6">
                <h4 className="text-xl font-semibold text-blue-600">
                  {doc.name}
                </h4>

                <p className="text-gray-700 mt-1">{doc.specialty}</p>

                <p className="text-sm text-gray-500 mt-2">
                  🕒 Available: {doc.time}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  🎓 {doc.experience}
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
