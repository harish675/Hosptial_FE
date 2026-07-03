import { motion } from 'framer-motion';
import { accreditations } from '../../data/stats';
import { StaggerChildren, staggerItem } from '../animations/FadeInView';
import { FaCertificate } from 'react-icons/fa';

export default function AccreditationsSection() {
  return (
    <section className="py-9 md:py-10 bg-gray-50 border-y border-gray-100">
      <div className="site-container text-center">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
          Recognized for Excellence by Leading Health Organizations
        </h3>
        <StaggerChildren className="flex flex-wrap justify-center gap-3 md:gap-5">
          {accreditations.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <FaCertificate size={14} />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
