import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import { services } from '../../data/stats';
import { motion } from 'framer-motion';
import { FadeInView, StaggerChildren, staggerItem } from '../../components/animations/FadeInView';
import { FaCheckCircle } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title="Facilities & Services" 
        subtitle="State-of-the-art medical infrastructure and support services designed for optimal patient care."
        crumbs={[{ label: 'Services' }]}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <motion.div key={service.id} variants={staggerItem} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: service.color }} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </main>
  );
}
