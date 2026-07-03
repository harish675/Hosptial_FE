import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import DepartmentsSection from '../../components/home/DepartmentsSection';
import CTABanner from '../../components/common/CTABanner';

export default function DepartmentsPage() {
  return (
    <main>
      <BreadcrumbBanner 
        title="Our Departments" 
        subtitle="Explore our comprehensive range of medical and surgical specialties."
        crumbs={[{ label: 'Departments' }]}
      />
      
      {/* We can reuse the home page component since it lists all departments in the data file 
          I will just render it, the data file has 15 items, the home page limits to 12. 
          Let me adjust this to render its own grid. */}
      
      <DepartmentsSection />
      
      <CTABanner />
    </main>
  );
}
