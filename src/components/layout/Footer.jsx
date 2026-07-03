import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaHeart } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Doctors', path: '/doctors' },
  { label: 'Departments', path: '/departments' },
  { label: 'Services', path: '/services' },
  { label: 'Health Packages', path: '/packages' },
  { label: 'Book Appointment', path: '/appointment' },
  { label: 'Contact Us', path: '/contact' },
];

const departments = [
  { label: 'Cardiology', path: '/departments/cardiology' },
  { label: 'Neurology', path: '/departments/neurology' },
  { label: 'Orthopedics', path: '/departments/orthopedics' },
  { label: 'Pediatrics', path: '/departments/pediatrics' },
  { label: 'Gynecology', path: '/departments/gynecology' },
  { label: 'Oncology', path: '/departments/oncology' },
  { label: 'Emergency Care', path: '/departments/emergency-care' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">City</span>
                <span className="text-xl font-bold text-teal-400">Hospital</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              CityHospital is a leading multi-specialty hospital committed to delivering compassionate, high-quality healthcare to every patient. Established in 2000, trusted by over 15,000 patients annually.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: '#', color: 'hover:text-blue-400' },
                { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
                { icon: FaYoutube, href: '#', color: 'hover:text-red-400' },
                { icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
              ].map(({ icon: Icon, href, color }) => (
                <a key={href + color} href={href} className={`w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${color} transition-colors hover:bg-gray-700`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Accreditations */}
            <div className="mt-5 flex flex-wrap gap-2">
              {['NABH', 'NABL', 'ISO 9001'].map((badge) => (
                <span key={badge} className="bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs px-2 py-1 rounded-full font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover:bg-teal-300 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Departments</h3>
            <ul className="space-y-2.5">
              {departments.map((dept) => (
                <li key={dept.path}>
                  <Link to={dept.path} className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover:bg-teal-300 transition-colors"></span>
                    {dept.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-teal-400 mt-1 flex-shrink-0" size={14} />
                <p className="text-gray-400 text-sm">123 Health Care Street, Medical Zone, City – 400001</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhone className="text-teal-400 flex-shrink-0" size={14} />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-teal-400 flex-shrink-0" size={14} />
                <a href="mailto:info@cityhospital.com" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">info@cityhospital.com</a>
              </div>
              <div className="flex gap-3 items-center">
                <FaClock className="text-teal-400 flex-shrink-0" size={14} />
                <div className="text-gray-400 text-sm">
                  <p>Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p>Emergency: 24/7</p>
                </div>
              </div>
            </div>
            {/* Emergency CTA */}
            <a href="tel:104" className="mt-5 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors w-full justify-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Emergency: Call 104
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm text-center">
            © 2026 CityHospital. All rights reserved. | Made with <FaHeart className="inline text-red-500 mx-1" size={12} /> for better healthcare
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
