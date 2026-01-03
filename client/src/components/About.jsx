export default function About() {
  return (
    // about
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        
        <div>
          <h3 className="text-3xl font-semibold text-gray-800">
            About Our Clinic
          </h3>

          <p className="mt-5 text-gray-600 leading-relaxed">
            MediCare Clinic is dedicated to providing compassionate, ethical, and
            patient-centered healthcare services. Our goal is to improve the health
            and well-being of our community through trusted medical care.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With modern infrastructure, advanced diagnostic facilities, and a team
            of experienced doctors, we ensure accurate treatment and personalized
            care for every patient.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We believe in transparency, affordability, and long-term patient
            relationships built on trust and care.
          </p>
        </div>

      
        <div className="grid gap-6">
          <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600">
              ✔ Experienced Medical Team
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Our doctors and staff have years of clinical experience and are
              committed to continuous learning.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600">
              ✔ Ethical & Affordable Care
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              We follow ethical medical practices and offer cost-effective
              treatments without compromising quality.
            </p>
          </div>

          <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600">
              ✔ Patient-First Approach
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Every patient is treated with respect, empathy, and personalized
              attention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
