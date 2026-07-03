import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import { packages } from '../../data/packages';
import { motion } from 'framer-motion';
import { StaggerChildren, staggerItem } from '../../components/animations/FadeInView';
import { FaCheckCircle, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PackagesPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title="Preventive Health Packages" 
        subtitle="Proactive healthcare for you and your family. Choose from our comprehensive range of health screening packages."
        crumbs={[{ label: 'Health Packages' }]}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={staggerItem}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-700 to-teal-600 p-6 text-white relative">
                {pkg.badge && (
                  <span className="absolute top-4 right-4 bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                <div className="text-4xl mb-3">{pkg.icon}</div>
                <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-blue-100 text-sm">{pkg.tagline}</p>
              </div>
              
              {/* Body */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-baseline gap-3 mb-4 border-b border-gray-100 pb-4">
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-400 line-through text-base">{pkg.originalPrice}</span>
                </div>
                
                <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                  <FaTag className="text-teal-500" />
                  Ideal for: {pkg.idealFor}
                </p>
                
                <div className="flex-grow">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Includes {pkg.tests.length} Tests/Consultations</p>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.tests.map((test) => (
                      <li key={test} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={14} />
                        {test}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/appointment"
                  className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-colors mt-auto shadow-md shadow-blue-200"
                >
                  Book Package
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </main>
  );
}
