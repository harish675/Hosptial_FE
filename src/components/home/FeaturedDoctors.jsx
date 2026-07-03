import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { doctors } from '../../data/doctors';
import SectionHeader from '../common/SectionHeader';
import DoctorCard from '../doctors/DoctorCard';
import { StaggerChildren } from '../animations/FadeInView';

export default function FeaturedDoctors() {
  const featuredDoctors = doctors.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white py-20 md:py-24 lg:py-28">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-100/35 blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Our Medical Team"
          title="Meet Our"
          highlight="Expert Doctors"
          subtitle="Highly qualified specialists committed to delivering outstanding clinical care, trusted guidance, and personalized patient attention across every stage of treatment."
        />

        {/* Doctors Grid */}
        <div className="mt-12 md:mt-14 lg:mt-16">
          <StaggerChildren className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4 items-stretch">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </StaggerChildren>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            to="/doctors"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-4 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(29,78,216,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(29,78,216,0.32)]"
          >
            <span>View All Doctors</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <FaArrowRight size={12} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}