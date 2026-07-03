import { FaShieldAlt, FaUserMd, FaClock, FaAward, FaFlask, FaHeart } from 'react-icons/fa';
import { StaggerChildren, staggerItem } from '../animations/FadeInView';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: FaUserMd,
    title: '50+ Expert Specialists',
    desc: 'Our team of over 50 senior consultants brings decades of clinical expertise across all medical specialties.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FaShieldAlt,
    title: 'NABH Accredited',
    desc: 'Certified by the National Accreditation Board for Hospitals, ensuring the highest standards of patient safety and quality care.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: FaClock,
    title: '24/7 Emergency Care',
    desc: 'Our ER operates round the clock with a dedicated trauma team, rapid response unit, and full ICU support.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: FaFlask,
    title: 'Advanced Diagnostics',
    desc: 'NABL-certified lab, 3T MRI, 128-slice CT, PET-CT, and digital pathology — delivering fast, accurate results.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: FaHeart,
    title: 'Patient-First Philosophy',
    desc: 'Every decision we make is guided by what is best for the patient. Compassionate care is at the heart of everything we do.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
  },
  {
    icon: FaAward,
    title: '25+ Years of Excellence',
    desc: 'Established in 2000, CityHospital has been a trusted name in healthcare for over two decades, serving thousands every year.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-800/30 rounded-full blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
            Why Patients Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Healthcare You Can{' '}
            <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Trust
            </span>
          </h2>
          <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto">
            We combine medical expertise, advanced technology, and genuine compassion to deliver an exceptional healthcare experience.
          </p>
        </div>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 md:p-6 hover:bg-white/15 transition-all hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 ${reason.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <reason.icon className={reason.color} size={20} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
