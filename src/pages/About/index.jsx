import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import CTABanner from '../../components/common/CTABanner';
import StatsSection from '../../components/home/StatsSection';
import AccreditationsSection from '../../components/home/AccreditationsSection';
import { FadeInView } from '../../components/animations/FadeInView';
import { FaCheckCircle, FaHospital, FaHeart, FaUserMd } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbBanner 
        title="About CityHospital" 
        subtitle="Dedicated to delivering world-class healthcare with compassion, integrity, and excellence since 2000."
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Story Section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInView direction="right">
              <div className="relative">
                <div className="aspect-square md:aspect-video lg:aspect-square bg-blue-100 rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-500/20 mix-blend-multiply"></div>
                  {/* Placeholder for actual hospital image */}
                  <div className="absolute inset-0 flex items-center justify-center text-blue-900/10 text-9xl">
                    <FaHospital />
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden md:block">
                  <div className="text-teal-600 text-4xl mb-2">
                    <FaHeart />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To provide accessible, affordable, and world-class healthcare to all, with a commitment to clinical excellence and patient safety.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView direction="left">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                A Legacy of Healing &{' '}
                <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                  Trust
                </span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Established in the year 2000, CityHospital began as a 50-bed nursing home with a simple vision: to provide the highest quality of healthcare to our community. 
                </p>
                <p>
                  Today, we have grown into a 200+ bed multi-specialty tertiary care hospital, equipped with state-of-the-art infrastructure, advanced medical technology, and a team of highly experienced specialists across 15+ departments.
                </p>
                <p>
                  What hasn't changed is our core philosophy. We believe that healthcare is not just about treating illnesses; it's about holistic healing, empathy, and restoring the quality of life for our patients.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                    <FaCheckCircle className="text-teal-500" /> Patient First
                  </div>
                  <p className="text-sm text-gray-500">Every decision is guided by what is best for the patient.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                    <FaCheckCircle className="text-teal-500" /> Excellence
                  </div>
                  <p className="text-sm text-gray-500">Commitment to the highest medical and surgical standards.</p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Chairman Message */}
      <section className="section-pad bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg">
              <FaUserMd />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message from the Chairman</h3>
            <p className="text-blue-600 font-semibold mb-8">Dr. A. K. Sharma (Founder & Chairman)</p>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed relative">
              <span className="absolute -top-4 -left-4 text-6xl text-blue-100">"</span>
              At CityHospital, our goal has never been just to treat the disease, but to treat the person. We strive every day to create an environment where clinical excellence meets genuine compassion. Your trust is our greatest achievement.
              <span className="absolute -bottom-8 -right-4 text-6xl text-blue-100">"</span>
            </blockquote>
          </FadeInView>
        </div>
      </section>

      <AccreditationsSection />

      <CTABanner 
        title="Experience Healthcare That Cares"
        subtitle="Whether you need a routine checkup or complex surgery, our team is here to support you at every step."
      />
    </main>
  );
}
