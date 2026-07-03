import { FadeInView } from '../animations/FadeInView';

export default function SectionHeader({ badge, title, highlight, subtitle, centered = true, className = '' }) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <FadeInView delay={0}>
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3.5 py-1.5 text-sm font-semibold mb-4 tracking-wide">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
            {badge}
          </span>
        </FadeInView>
      )}
      <FadeInView delay={0.1}>
        <h2 className="heading-xl text-gray-900">
          {title}{' '}
          {highlight && (
            <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>
      </FadeInView>
      {subtitle && (
        <FadeInView delay={0.2}>
          <p className={`mt-4 text-gray-500 text-lead ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
            {subtitle}
          </p>
        </FadeInView>
      )}
    </div>
  );
}
