import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaUsers, FaUserMd, FaHospital, FaStar, FaThumbsUp, FaClock,
} from 'react-icons/fa';

/* ─── Data ─────────────────────────────────────────────────────── */
const stats = [
  {
    Icon: FaUsers,
    end: 15000,
    suffix: '+',
    label: 'Patients Treated',
    sub: 'Annually',
    iconColor: '#2563eb',
    iconBg: 'rgba(37,99,235,0.10)',
    numColor: '#1d4ed8',
  },
  {
    Icon: FaUserMd,
    end: 50,
    suffix: '+',
    label: 'Expert Specialists',
    sub: 'Across departments',
    iconColor: '#0d9488',
    iconBg: 'rgba(13,148,136,0.10)',
    numColor: '#0f766e',
  },
  {
    Icon: FaHospital,
    end: 25,
    suffix: '+',
    label: 'Years of Trust',
    sub: 'Since 2000',
    iconColor: '#059669',
    iconBg: 'rgba(5,150,105,0.10)',
    numColor: '#047857',
  },
  {
    Icon: FaStar,
    end: 98,
    suffix: '%',
    label: 'Patient Satisfaction',
    sub: 'Based on surveys',
    iconColor: '#d97706',
    iconBg: 'rgba(217,119,6,0.10)',
    numColor: '#b45309',
  },
  {
    Icon: FaThumbsUp,
    end: 15,
    suffix: '',
    label: 'Specialties',
    sub: 'Under one roof',
    iconColor: '#7c3aed',
    iconBg: 'rgba(124,58,237,0.10)',
    numColor: '#6d28d9',
  },
  {
    Icon: FaClock,
    end: null,       // special: 24/7
    display: '24/7',
    suffix: '',
    label: 'Emergency',
    sub: 'Round the clock',
    iconColor: '#dc2626',
    iconBg: 'rgba(220,38,38,0.10)',
    numColor: '#b91c1c',
  },
];

/* ─── Count-up hook ─────────────────────────────────────────────── */
function useCountUp(end, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!started || end === null) return;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [started, end, duration]);

  return count;
}

/* ─── Single stat card ──────────────────────────────────────────── */
function StatCard({ stat, index, started }) {
  const count = useCountUp(stat.end, stat.end > 1000 ? 2000 : 1400, started);
  const display = stat.end === null
    ? stat.display
    : (stat.end >= 1000 ? count.toLocaleString() : count) + stat.suffix;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        padding: '28px 12px 20px',
        position: 'relative',
      }}
    >
      {/* Divider between items */}
      {index > 0 && (
        <div style={{
          position: 'absolute', left: 0, top: '20%', height: '60%',
          width: 1, background: 'rgba(0,0,0,0.07)',
        }} />
      )}

      {/* Icon container */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: stat.iconBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 14,
        transition: 'transform 0.3s',
      }}>
        <stat.Icon size={22} color={stat.iconColor} />
      </div>

      {/* Number */}
      <div style={{
        fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
        fontSize: 'clamp(1.65rem,2.2vw,2.1rem)',
        fontWeight: 800,
        color: stat.numColor,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        marginBottom: 7,
        tabularNums: true,
      }}>
        {display}
      </div>

      {/* Label */}
      <div style={{
        fontFamily: "'Manrope','Inter',sans-serif",
        fontSize: '0.875rem',
        fontWeight: 700,
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 3,
        letterSpacing: '-0.005em',
      }}>
        {stat.label}
      </div>

      {/* Sub-label */}
      <div style={{
        fontFamily: "'Manrope','Inter',sans-serif",
        fontSize: '0.72rem',
        fontWeight: 500,
        color: '#94a3b8',
        textAlign: 'center',
      }}>
        {stat.sub}
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */
export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section
      ref={ref}
      style={{
        background: '#ffffff',
        borderTop: '1px solid #f1f5f9',
        borderBottom: '1px solid #f1f5f9',
      }}
    >
      <div className="site-container">
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} started={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .stats-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
