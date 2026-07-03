import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import SectionHeader from '../common/SectionHeader';
import { StaggerChildren, staggerItem } from '../animations/FadeInView';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUserMd } from 'react-icons/fa';

const categoryColors = {
  'Cardiology': 'bg-red-50 text-red-600',
  'General Medicine': 'bg-blue-50 text-blue-600',
  'Pediatrics': 'bg-cyan-50 text-cyan-600',
  'Orthopedics': 'bg-amber-50 text-amber-600',
  'Gynecology': 'bg-pink-50 text-pink-600',
  'Emergency Care': 'bg-red-50 text-red-700',
};

const bgGradients = [
  'from-blue-100 to-blue-200',
  'from-teal-100 to-teal-200',
  'from-emerald-100 to-emerald-200',
  'from-purple-100 to-purple-200',
];

export default function BlogSection({ limit = 3 }) {
  const displayBlogs = blogs.slice(0, limit);

  return (
    <section className="section-pad bg-gray-50">
      <div className="site-container">
        <SectionHeader
          badge="Health Insights"
          title="Tips & Insights from Our"
          highlight="Specialists"
          subtitle="Expert health articles, medical guidance, and wellness tips from our team of specialist doctors."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {displayBlogs.map((blog, i) => (
            <motion.div key={blog.id} variants={staggerItem}>
              <Link
                to={`/blog/${blog.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Image Placeholder */}
                <div className={`h-44 bg-gradient-to-br ${bgGradients[i % bgGradients.length]} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-30">📰</div>
                  <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[blog.category] || 'bg-gray-100 text-gray-600'}`}>
                    {blog.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                      <FaUserMd size={10} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaClock size={10} />
                        {blog.readTime}
                      </span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-3 rounded-full font-semibold transition-all"
          >
            Read All Articles
            <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
