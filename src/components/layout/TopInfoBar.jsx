import { FaPhone, FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TopInfoBar() {
  return (
    <div className="hidden border-b border-white/10 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white md:block">
      <div className="site-container">
        <div className="flex min-h-[44px] items-center justify-between gap-6 py-2">
          {/* Left info */}
          <div className="flex min-w-0 items-center gap-4 lg:gap-6 xl:gap-7">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-blue-50/95 transition-colors hover:text-white"
            >
              <FaPhone className="shrink-0 text-blue-300" size={11} />
              <span>+91 98765 43210</span>
            </a>

            <div className="hidden items-center gap-2 whitespace-nowrap text-[13px] text-blue-100/90 lg:flex">
              <FaClock className="shrink-0 text-blue-300" size={11} />
              <span>Mon–Sat: 8:00 AM – 8:00 PM</span>
            </div>

            <div className="hidden min-w-0 items-center gap-2 text-[13px] text-blue-100/90 xl:flex">
              <FaMapMarkerAlt className="shrink-0 text-blue-300" size={11} />
              <span className="truncate">123 Health Care Street, City</span>
            </div>
          </div>

          {/* Right info */}
          <div className="flex shrink-0 items-center gap-3 lg:gap-4">
            <a
              href="mailto:info@cityhospital.com"
              className="hidden items-center gap-2 whitespace-nowrap text-[13px] font-medium text-blue-50/95 transition-colors hover:text-white lg:flex"
            >
              <FaEnvelope className="shrink-0 text-blue-300" size={11} />
              <span>info@cityhospital.com</span>
            </a>

            <motion.a
              href="tel:104"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-[12px] font-bold text-white shadow-md shadow-red-950/20 transition-colors hover:bg-red-700"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse"></span>
              <span>Emergency: 104</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}