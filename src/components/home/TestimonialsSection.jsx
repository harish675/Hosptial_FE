import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import SectionHeader from '../common/SectionHeader';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar key={s} className={s <= rating ? 'text-yellow-400' : 'text-gray-200'} size={14} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : pages - 1));
  const next = () => setCurrent((c) => (c < pages - 1 ? c + 1 : 0));

  const avatarColors = ['bg-blue-100 text-blue-700', 'bg-teal-100 text-teal-700', 'bg-emerald-100 text-emerald-700', 'bg-purple-100 text-purple-700', 'bg-pink-100 text-pink-700', 'bg-amber-100 text-amber-700'];

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <SectionHeader
            badge="Patient Stories"
            title="Real Experiences,"
            highlight="Real Results"
            subtitle="Hear from our patients about their healthcare journeys and recoveries at CityHospital."
            centered={false}
            className="mb-0"
          />
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={prev} aria-label="Previous testimonials" className="w-10 h-10 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-700 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/50">
              <FaChevronLeft size={14} />
            </button>
            <button onClick={next} aria-label="Next testimonials" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/50">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {visible.map((t, i) => (
              <div key={t.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 relative card-hover flex flex-col h-full min-h-52">
                <FaQuoteLeft className="text-blue-100 mb-4" size={28} />
                <StarRating rating={t.rating} />
                <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-5 line-clamp-3">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-auto">
                  <div className={`w-10 h-10 ${avatarColors[i % avatarColors.length]} rounded-full flex items-center justify-center font-bold text-sm`}>
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.treatment} · {t.location}</div>
                  </div>
                </div>
                {/* Treatment badge */}
                <span className="absolute top-4 right-4 bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                  {t.department}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'bg-blue-700 w-6' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
