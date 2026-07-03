import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FaAmbulance, FaPhone } from 'react-icons/fa';

export default function EmergencyStrip() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-white rounded-full -translate-y-1/2 blur-2xl"></div>
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 pulse-red">
            <FaAmbulance size={32} />
          </div>
          <div>
            <h2 className="heading-md text-2xl md:text-3xl font-bold mb-1">Need Emergency Help?</h2>
            <p className="text-red-100 font-medium">Our emergency team and ambulances are available 24/7, 365 days a year.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <motion.a
            href="tel:104"
            whileHover={reduce ? undefined : { scale: 1.05 }}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-red-600 font-bold px-8 py-3.5 rounded-full text-lg shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <span className="w-3 h-3 bg-red-600 rounded-full pulse-red"></span>
            Call 104
          </motion.a>
          <motion.a
            href="tel:+919876543210"
            whileHover={reduce ? undefined : { scale: 1.05 }}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 border-2 border-white/60 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full text-lg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            <FaPhone size={16} />
            +91 98765 43210
          </motion.a>
        </div>
      </div>
    </section>
  );
}
