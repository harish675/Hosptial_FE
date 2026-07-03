import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { FadeInView } from '../animations/FadeInView';

export default function CTABanner({ 
  title = "Ready to Take the Next Step in Your Health?",
  subtitle = "Book an appointment with our specialist doctors today. Your health journey starts with a single step.",
  primaryLabel = "Book Appointment",
  primaryTo = "/appointment",
  secondaryLabel = "Call: +91 98765 43210",
  secondaryHref = "tel:+919876543210",
}) {
  const reduce = useReducedMotion();
  const hover = reduce ? undefined : { scale: 1.03 };
  const tap = reduce ? undefined : { scale: 0.97 };
  return (
    <section className="py-12 md:py-14 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/15 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-56 h-56 bg-blue-400/15 rounded-full translate-y-1/2 blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-[0.07]" />
      </div>

      <div className="site-container max-w-4xl text-center relative z-10">
        <FadeInView>
          <h2 className="heading-xl text-white mb-5">{title}</h2>
          <p className="text-blue-100 text-lead mb-7 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={hover} whileTap={tap}>
              <Link
                to={primaryTo}
                className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-full transition-colors shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
              >
                <FaCalendarAlt size={16} />
                {primaryLabel}
              </Link>
            </motion.div>
            <motion.div whileHover={hover} whileTap={tap}>
              <a
                href={secondaryHref}
                className="inline-flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white/15 font-bold px-8 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <FaPhone size={14} />
                {secondaryLabel}
              </a>
            </motion.div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
