import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

export default function BreadcrumbBanner({ title, subtitle, crumbs = [], bgClass = 'bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800' }) {
  return (
    <div className={`${bgClass} text-white py-16 md:py-20 relative overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-blue-200 text-sm mb-4">
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <FaHome size={12} />
            Home
          </Link>
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <FaChevronRight size={10} className="text-blue-300" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-blue-100 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
