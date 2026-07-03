import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaArrowRight,
} from 'react-icons/fa';
import { staggerItem } from '../animations/FadeInView';

const departmentColors = {
  Cardiology: {
    bg: 'bg-red-50',
    soft: 'bg-red-100/60',
    text: 'text-red-600',
    border: 'border-red-100',
    pill: 'bg-red-100 text-red-700',
  },
  Neurology: {
    bg: 'bg-purple-50',
    soft: 'bg-purple-100/60',
    text: 'text-purple-600',
    border: 'border-purple-100',
    pill: 'bg-purple-100 text-purple-700',
  },
  Orthopedics: {
    bg: 'bg-amber-50',
    soft: 'bg-amber-100/60',
    text: 'text-amber-600',
    border: 'border-amber-100',
    pill: 'bg-amber-100 text-amber-700',
  },
  Gynecology: {
    bg: 'bg-pink-50',
    soft: 'bg-pink-100/60',
    text: 'text-pink-600',
    border: 'border-pink-100',
    pill: 'bg-pink-100 text-pink-700',
  },
  Pediatrics: {
    bg: 'bg-cyan-50',
    soft: 'bg-cyan-100/60',
    text: 'text-cyan-600',
    border: 'border-cyan-100',
    pill: 'bg-cyan-100 text-cyan-700',
  },
  Oncology: {
    bg: 'bg-violet-50',
    soft: 'bg-violet-100/60',
    text: 'text-violet-600',
    border: 'border-violet-100',
    pill: 'bg-violet-100 text-violet-700',
  },
  ENT: {
    bg: 'bg-sky-50',
    soft: 'bg-sky-100/60',
    text: 'text-sky-600',
    border: 'border-sky-100',
    pill: 'bg-sky-100 text-sky-700',
  },
  Dermatology: {
    bg: 'bg-orange-50',
    soft: 'bg-orange-100/60',
    text: 'text-orange-600',
    border: 'border-orange-100',
    pill: 'bg-orange-100 text-orange-700',
  },
  Pulmonology: {
    bg: 'bg-emerald-50',
    soft: 'bg-emerald-100/60',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
    pill: 'bg-emerald-100 text-emerald-700',
  },
  Gastroenterology: {
    bg: 'bg-teal-50',
    soft: 'bg-teal-100/60',
    text: 'text-teal-600',
    border: 'border-teal-100',
    pill: 'bg-teal-100 text-teal-700',
  },
  Urology: {
    bg: 'bg-indigo-50',
    soft: 'bg-indigo-100/60',
    text: 'text-indigo-600',
    border: 'border-indigo-100',
    pill: 'bg-indigo-100 text-indigo-700',
  },
  Nephrology: {
    bg: 'bg-blue-50',
    soft: 'bg-blue-100/60',
    text: 'text-blue-600',
    border: 'border-blue-100',
    pill: 'bg-blue-100 text-blue-700',
  },
};

const defaultInitials = (name = '') =>
  name
    .replace('Dr.', '')
    .trim()
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

export default function DoctorCard({ doctor, variant = 'grid' }) {
  const deptColor = departmentColors[doctor.department] || {
    bg: 'bg-blue-50',
    soft: 'bg-blue-100/60',
    text: 'text-blue-600',
    border: 'border-blue-100',
    pill: 'bg-blue-100 text-blue-700',
  };

  const initials = defaultInitials(doctor.name);

  if (variant === 'list') {
    return (
      <motion.div
        variants={staggerItem}
        className="group flex gap-5 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
      >
        <div
          className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl ${deptColor.bg} ${deptColor.text} text-2xl font-bold shadow-inner`}
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-blue-700">
                {doctor.specialization}
              </p>
              <p className="mt-1 text-sm text-slate-500">{doctor.qualification}</p>
            </div>

            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${deptColor.pill}`}
            >
              {doctor.department}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Experience
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800">
                {doctor.experience} Years
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3">
              <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-700">
                <FaStar size={10} />
                Rating
              </div>
              <div className="mt-1 text-sm font-bold text-slate-800">
                {doctor.rating}/5
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <FaClock size={13} />
              </div>

              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Consultation Hours
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {doctor.timings}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {doctor.availability?.join(', ')}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <Link
              to={`/doctors/${doctor.slug}`}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-blue-200 px-5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
            >
              View Profile
            </Link>

            <Link
              to="/appointment"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800"
            >
              <FaCalendarAlt size={12} />
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      variants={staggerItem}
      className="group flex h-full min-h-[455px] flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(15,23,42,0.10)]"
    >
      {/* Header */}
      <div
        className={`relative overflow-hidden border-b ${deptColor.border} ${deptColor.bg} px-6 pb-5 pt-6`}
      >
        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
        <div className="absolute left-0 bottom-0 h-20 w-20 rounded-full bg-white/20 blur-2xl" />

        <div className="relative flex items-start justify-between gap-3">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-[24px] bg-white ${deptColor.text} text-[30px] font-bold shadow-[0_12px_30px_rgba(255,255,255,0.55)]`}
          >
            {initials}
          </div>

          <span
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold ${deptColor.pill} shadow-sm`}
          >
            {doctor.department}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        {/* Main text */}
        <div>
          <h3 className="text-[1.35rem] font-bold leading-tight tracking-tight text-slate-900">
            {doctor.name}
          </h3>

          <p className="mt-1.5 text-[15px] font-semibold leading-snug text-blue-700">
            {doctor.specialization}
          </p>

          <p className="mt-2 text-[13px] leading-6 text-slate-500">
            {doctor.qualification}
          </p>
        </div>

        {/* Meta row */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <FaUserMd size={10} />
              Experience
            </div>
            <div className="mt-1 text-[15px] font-bold text-slate-900">
              {doctor.experience} Years
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-700">
              <FaStar size={10} />
              Rating
            </div>
            <div className="mt-1 text-[15px] font-bold text-slate-900">
              {doctor.rating}/5
            </div>
          </div>
        </div>

        {/* Timing block */}
        <div className="mt-4 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <FaClock size={14} />
            </div>

            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Consultation Hours
              </div>

              <div className="mt-1 text-[15px] font-bold leading-6 text-slate-900">
                {doctor.timings}
              </div>

              <div className="mt-1 text-[12px] leading-5 text-slate-500">
                {doctor.availability?.join(', ')}
              </div>
            </div>
          </div>
        </div>

        {/* spacer */}
        <div className="flex-1" />

        {/* CTA buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
          >
            View Profile
          </Link>

          <Link
            to="/appointment"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition-all duration-300 hover:bg-blue-800 hover:shadow-[0_14px_30px_rgba(37,99,235,0.28)]"
          >
            <FaCalendarAlt size={12} />
            Book Now
          </Link>
        </div>

        {/* optional learn more link */}
        <div className="mt-4 flex justify-end">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 transition-colors duration-300 hover:text-blue-700"
          >
            Learn more
            <FaArrowRight size={10} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}