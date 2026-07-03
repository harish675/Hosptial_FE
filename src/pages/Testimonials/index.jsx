import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import { testimonials } from '../../data/testimonials';
import { motion } from 'framer-motion';
import { StaggerChildren, staggerItem } from '../../components/animations/FadeInView';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar key={s} className={s <= rating ? 'text-yellow-400' : 'text-gray-200'} size={14} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const avatarColors = ['bg-blue-100 text-blue-700', 'bg-teal-100 text-teal-700', 'bg-emerald-100 text-emerald-700', 'bg-purple-100 text-purple-700', 'bg-pink-100 text-pink-700', 'bg-amber-100 text-amber-700'];

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title="Patient Stories" 
        subtitle="Real experiences and recovery journeys from our patients at CityHospital."
        crumbs={[{ label: 'Testimonials' }]}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} variants={staggerItem} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow relative">
              <FaQuoteLeft className="text-blue-50 mb-4" size={40} />
              <StarRating rating={t.rating} />
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 ${avatarColors[i % avatarColors.length]} rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 text-right">
                <span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full block mb-1">
                  {t.department}
                </span>
                <span className="text-xs text-gray-400 block">{t.treatment}</span>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </main>
  );
}
