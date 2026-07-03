import { useParams, Navigate, Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import { FaUserMd, FaClock, FaCalendarAlt, FaTag, FaArrowLeft } from 'react-icons/fa';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" />;
  }

  // Get related blogs
  const relatedBlogs = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 3);
  if (relatedBlogs.length === 0) {
    relatedBlogs.push(...blogs.filter(b => b.id !== blog.id).slice(0, 3));
  }

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title={blog.title}
        crumbs={[{ label: 'Blog', path: '/blog' }, { label: 'Article' }]}
        bgClass="bg-gradient-to-br from-blue-950 to-teal-900"
      />

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-64 md:h-80 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-8xl opacity-50">
                📰
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-6 mb-6">
                  <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">
                    <FaTag /> {blog.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium"><FaUserMd /> {blog.author}</span>
                  <span className="flex items-center gap-1.5"><FaCalendarAlt /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><FaClock /> {blog.readTime}</span>
                </div>

                <div className="prose prose-blue max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
                    {blog.excerpt}
                  </p>
                  
                  {blog.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('##')) {
                      return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
                    }
                    if (paragraph.startsWith('-')) {
                      return (
                        <ul key={index} className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                          {paragraph.split('\n').map((item, i) => (
                            <li key={i}>{item.replace('-', '').trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={index} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>;
                  })}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                  <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    <FaArrowLeft size={14} /> Back to all articles
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-full mx-auto flex items-center justify-center text-xl font-bold mb-4">
                {blog.author.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{blog.author}</h3>
              <p className="text-sm text-gray-500 mb-4">Specialist Doctor</p>
              <Link to="/doctors" className="text-blue-600 text-sm font-semibold hover:underline">
                View Profile
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="font-bold text-gray-900 text-lg mb-6">Related Articles</h3>
              <div className="space-y-6">
                {relatedBlogs.map(rb => (
                  <Link key={rb.id} to={`/blog/${rb.slug}`} className="group block">
                    <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-sm mb-1 line-clamp-2">
                      {rb.title}
                    </h4>
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                      <FaClock size={10} /> {rb.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-700 to-teal-600 rounded-3xl p-6 md:p-8 text-white text-center shadow-lg">
              <h3 className="text-xl font-bold mb-3">Need Medical Advice?</h3>
              <p className="text-blue-100 text-sm mb-6">Consult with our expert doctors for personalized care.</p>
              <Link 
                to="/appointment"
                className="block w-full bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
