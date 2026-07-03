import { Link } from 'react-router-dom';
import { packages } from '../../data/packages';
import SectionHeader from '../common/SectionHeader';
import { StaggerChildren, staggerItem } from '../animations/FadeInView';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaTag } from 'react-icons/fa';

export default function PackagesPreview() {
  const featured = packages.slice(0, 3);

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <SectionHeader
          badge="Health Packages"
          title="Preventive Health"
          highlight="Checkup Packages"
          subtitle="Comprehensive health screening packages at affordable prices. Take charge of your health proactively."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={staggerItem}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-5 text-white relative">
                {pkg.badge && (
                  <span className="absolute top-4 right-4 bg-white text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}
                <div className="text-3xl mb-2">{pkg.icon}</div>
                <h3 className="font-bold text-base mb-1">{pkg.name}</h3>
                <p className="text-blue-100 text-xs">{pkg.tagline}</p>
              </div>
              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-blue-700">{pkg.price}</span>
                  <span className="text-gray-400 line-through text-sm">{pkg.originalPrice}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                  <FaTag size={10} />
                  {pkg.idealFor}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {pkg.tests.slice(0, 5).map((test) => (
                    <li key={test} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-emerald-500 flex-shrink-0" size={12} />
                      {test}
                    </li>
                  ))}
                  {pkg.tests.length > 5 && (
                    <li className="text-xs text-blue-600 font-medium">+{pkg.tests.length - 5} more tests</li>
                  )}
                </ul>
                <Link
                  to="/appointment"
                  className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm mt-auto"
                >
                  Book This Package
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <div className="text-center mt-8">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-3 rounded-full font-semibold transition-all"
          >
            View All Packages
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
