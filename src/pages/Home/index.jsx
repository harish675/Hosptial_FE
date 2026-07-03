import HeroSection from '../../components/home/HeroSection';
import QuickActions from '../../components/home/QuickActions';
import StatsSection from '../../components/home/StatsSection';
import DepartmentsSection from '../../components/home/DepartmentsSection';
import FeaturedDoctors from '../../components/home/FeaturedDoctors';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import BlogSection from '../../components/home/BlogSection';
import CTABanner from '../../components/common/CTABanner';
import FAQAccordion from '../../components/common/FAQAccordion';
import AboutPreview from '../../components/home/AboutPreview';
import PackagesPreview from '../../components/home/PackagesPreview';
import AccreditationsSection from '../../components/home/AccreditationsSection';
import EmergencyStrip from '../../components/home/EmergencyStrip';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuickActions />
      <StatsSection />
      <AboutPreview />
      <DepartmentsSection />
      <FeaturedDoctors />
      <WhyChooseUs />
      <CTABanner />
      <PackagesPreview />
      <TestimonialsSection />
      <AccreditationsSection />
      <BlogSection />
      <FAQAccordion limit={5} />
      <EmergencyStrip />
    </main>
  );
}
