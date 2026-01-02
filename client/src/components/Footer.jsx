export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-white">MediCare Clinic</h4>
          <p className="mt-2 text-sm">
            123 Health Street, Pune, Maharashtra
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="text-sm mt-2">Phone: +91 98765 43210</p>
          <p className="text-sm">Email: info@medicare.com</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Home</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
