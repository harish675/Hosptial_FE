import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { departments } from '../../data/departments';
import SectionHeader from '../common/SectionHeader';
import { StaggerChildren, staggerItem } from '../animations/FadeInView';
import {
  FaArrowRight,
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaBaby,
  FaFemale,
  FaRibbon,
  FaDeaf,
  FaThermometerHalf,
  FaLungs,
  FaStethoscope,
  FaShieldAlt,
  FaUserMd,
  FaMicroscope,
  FaXRay,
} from 'react-icons/fa';

// Vector icons instead of raw emoji — emoji glyphs render at wildly
// different visual sizes/weights across OS/browsers (compare the heart
// vs. the brain in the old version), which broke visual consistency
// across the grid. react-icons gives every card the same stroke weight
// and optical size.
const iconMap = {
  heart: FaHeartbeat,
  brain: FaBrain,
  bone: FaBone,
  baby: FaBaby,
  female: FaFemale,
  ribbon: FaRibbon,
  ear: FaDeaf,
  thermometer: FaThermometerHalf,
  lungs: FaLungs,
  stethoscope: FaStethoscope,
  shield: FaShieldAlt,
  usermd: FaUserMd,
  microscope: FaMicroscope,
  xray: FaXRay,
};

// Font Awesome glyphs each carry a different amount of built-in padding
// inside their viewBox — e.g. FaBone and FaRibbon are drawn much smaller
// inside their box than FaHeartbeat or FaShieldAlt. Rendering every icon
// at the same `size` prop therefore makes them *look* like different
// font sizes even though the prop is identical. These per-icon
// multipliers even out the optical size so every icon fills its 64px
// box the same way.
const ICON_BASE_SIZE = 24;
const iconScale = {
  heart: 1,
  brain: 1,
  bone: 1.25,
  baby: 1,
  female: 1.05,
  ribbon: 1.2,
  ear: 1.1,
  thermometer: 1,
  lungs: 1,
  stethoscope: 1.05,
  shield: 0.95,
  usermd: 1,
  microscope: 1,
  xray: 1,
};

export default function DepartmentsSection() {
  const featured = departments.slice(0, 12);

  return (
    <section className="relative bg-gradient-to-b from-[#f8fbff] via-white to-[#f9fcff] py-20 md:py-24">
      {/* background glow — overflow-hidden lives on THIS wrapper only, not
          on the whole section. Previously it sat on <section>, which also
          clipped the CTA button's edge/shadow near the bottom of the
          section, making it look sliced off. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-[-80px] bottom-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        <SectionHeader
          badge="Our Specialties"
          title="Centers of"
          highlight="Excellence"
          subtitle="World-class care across 15 medical specialties, all under one roof with expert teams and advanced technology."
        />

        {/* GRID */}
        <StaggerChildren className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {featured.map((dept) => {
            const Icon = iconMap[dept.icon] || FaUserMd;
            const iconSize = Math.round(ICON_BASE_SIZE * (iconScale[dept.icon] || 1));
            return (
              <motion.div key={dept.id} variants={staggerItem} className="h-full">
                <Link
                  to={`/departments/${dept.slug}`}
                  className="group relative flex h-full min-h-[138px] items-center gap-4 rounded-[26px] border border-slate-200/70 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(29,78,216,0.12)]"
                >
                  {/* soft hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-cyan-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* icon — fixed box, fixed icon size, so every card matches */}
                  <div
                    className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: dept.bgColor }}
                  >
                    <Icon size={iconSize} className="text-slate-700" />
                  </div>

                  {/* text */}
                  <div className="relative z-10 min-w-0 text-left">
                    <h3 className="text-[18px] font-extrabold leading-[1.2] tracking-[-0.02em] text-slate-900">
                      {dept.name}
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-slate-500">
                      Specialist care
                    </p>

                    {/* Reserve space for "Learn more" even when hidden, so
                        the card height never shifts between hover states */}
                    <div className="mt-3 flex h-[18px] items-center gap-1 text-[13px] font-semibold text-blue-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <FaArrowRight size={11} className="translate-y-[1px]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerChildren>

        {/* CTA — increased top margin so the button never collides with
            the last grid row on smaller viewports */}
        <div className="mt-16 mb-2 flex justify-center">
          <Link
            to="/departments"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-4 text-[15px] font-semibold text-white shadow-[0_14px_34px_rgba(29,78,216,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(29,78,216,0.30)]"
          >
            <span>Explore All Departments</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <FaArrowRight size={12} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}