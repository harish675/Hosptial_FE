import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { faqs } from '../../data/faqs';
import SectionHeader from '../common/SectionHeader';
import { FadeInView } from '../animations/FadeInView';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <FaChevronDown className={`${isOpen ? 'text-blue-700' : 'text-gray-400'}`} size={14} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({ limit = 6 }) {
  const [openId, setOpenId] = useState(null);
  const displayFaqs = faqs.slice(0, limit);

  return (
    <section className="section-pad bg-gray-50">
      <div className="site-container max-w-4xl">
        <SectionHeader
          badge="FAQs"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Get quick answers to the most common questions about our services, appointments, and facilities."
        />
        <FadeInView>
          <div className="space-y-3">
            {displayFaqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
