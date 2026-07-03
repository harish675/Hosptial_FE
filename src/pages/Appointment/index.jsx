import AppointmentForm from '../../components/forms/AppointmentForm';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FadeInView, StaggerChildren, staggerItem } from '../../components/animations/FadeInView';
import { motion } from 'framer-motion';

export default function AppointmentPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left: Info */}
          <div className="lg:col-span-1 space-y-8">
            <FadeInView>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Schedule your visit with our expert specialists. We ensure a seamless experience with minimal waiting time.
              </p>
            </FadeInView>

            <StaggerChildren className="space-y-4">
              <motion.div variants={staggerItem} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call for Appointment</h3>
                  <a href="tel:+919876543210" className="text-gray-500 hover:text-blue-600 transition-colors block">+91 98765 43210</a>
                  <a href="tel:104" className="text-red-500 font-bold hover:text-red-600 transition-colors block mt-1">Emergency: 104</a>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">OPD Timings</h3>
                  <p className="text-gray-500">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-500">Sun: 9:00 AM - 2:00 PM</p>
                </div>
              </motion.div>
            </StaggerChildren>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <FadeInView delay={0.2}>
              <AppointmentForm />
            </FadeInView>
          </div>

        </div>
      </div>
    </main>
  );
}
