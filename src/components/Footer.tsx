export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">KadeshBarnea Services Ltd.</h3>
            <p className="text-red-400">
              Growing multi-service company based in Misori, Siaya County, Kenya, providing cyber services, branding, cereal trading, and mobile banking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-red-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-red-400">
              <li>📍 Misori, Siaya County, Kenya</li>
              <li>📧 tonnymosesowino@gmail.com</li>
              <li>📱 +254 759 617 201</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-red-400">
            © 2026 KadeshBarnea Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
