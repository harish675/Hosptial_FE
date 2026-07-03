import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import BlogSection from '../../components/home/BlogSection';

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title="Health & Wellness Blog" 
        subtitle="Expert articles, health tips, and medical updates from our specialists."
        crumbs={[{ label: 'Blog' }]}
      />

      <div className="pt-8">
        <BlogSection limit={100} />
      </div>
    </main>
  );
}
