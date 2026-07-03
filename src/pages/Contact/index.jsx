import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import ContactForm from '../../components/forms/ContactForm';
import FAQAccordion from '../../components/common/FAQAccordion';
import { motion } from 'framer-motion';
import { FadeInView, StaggerChildren, staggerItem } from '../../components/animations/FadeInView';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaAmbulance, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title="Contact Us" 
        subtitle="We're here to help. Reach out to us for appointments, inquiries, or emergency assistance."
        crumbs={[{ label: 'Contact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <FadeInView>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            </FadeInView>
            
            <StaggerChildren className="space-y-4">
              {/* Emergency */}
              <motion.div variants={staggerItem} className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  <FaAmbulance />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Emergency 24/7</h3>
                  <a href="tel:104" className="text-red-600 font-bold text-xl hover:text-red-700 block">104</a>
                  <p className="text-xs text-red-700 mt-1">Ambulance & Trauma response</p>
                </div>
              </motion.div>

              {/* General Inquiries */}
              <motion.div variants={staggerItem} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">General Inquiries</h3>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 font-medium block">+91 98765 43210</a>
                  <p className="text-xs text-gray-400 mt-1">Mon-Sat, 8am-8pm</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={staggerItem} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:info@cityhospital.com" className="text-gray-600 hover:text-teal-600 font-medium block break-all">info@cityhospital.com</a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={staggerItem} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Health Care Street,<br/>
                    Medical District,<br/>
                    City Center, 400001
                  </p>
                </div>
              </motion.div>
            </StaggerChildren>
          </div>

          {/* Right: Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            <FadeInView delay={0.2}>
              <ContactForm />
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 h-[300px] md:h-[400px] overflow-hidden">
                {/* Map Placeholder */}
                <div className="w-full h-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle, #9ca3af 2px, transparent 2px)`,
                    backgroundSize: '30px 30px',
                  }}></div>
                  <FaMapMarkerAlt className="text-blue-500 text-5xl mb-3 relative z-10 drop-shadow-md" />
                  <div className="text-gray-600 font-semibold relative z-10">Interactive Map Placeholder</div>
                  <div className="text-gray-400 text-sm relative z-10">CityHospital, 123 Health Care Street</div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        <FAQAccordion limit={8} />
      </div>
    </main>
  );
}
