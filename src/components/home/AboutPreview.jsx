import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  FaArrowRight, FaCheckCircle, FaShieldAlt,
  FaUsers, FaUserMd, FaBuilding, FaTrophy, FaPhone,
} from 'react-icons/fa';

/* ─── Left panel stat cards ────────────────────────────────────── */
const leftStats = [
  { Icon: FaUsers,    end: 15000, suffix: 'K+', divisor: 1000, label: 'Patients Per Year',    iconColor: '#2563eb', bg: 'rgba(37,99,235,0.08)'  },
  { Icon: FaUserMd,   end: 50,    suffix: '+',  divisor: 1,    label: 'Specialist Doctors',   iconColor: '#0d9488', bg: 'rgba(13,148,136,0.08)' },
  { Icon: FaBuilding, end: 15,    suffix: '',   divisor: 1,    label: 'Departments',          iconColor: '#7c3aed', bg: 'rgba(124,58,237,0.08)' },
  { Icon: FaTrophy,   end: 25,    suffix: '+',  divisor: 1,    label: 'Years of Trust',       iconColor: '#d97706', bg: 'rgba(217,119,6,0.08)'  },
];

const highlights = [
  'Founded in 2000 with a vision for accessible, quality healthcare',
  'Grown to 50+ specialists across 15 departments',
  'NABH accredited and ISO 9001:2015 certified',
  'Patient-first approach guiding every care decision',
];

/* ─── Count-up hook ─────────────────────────────────────────────── */
function useCountUp(end, divisor = 1, duration = 1600, started = false) {
  const [count, setCount] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * end));
      if (p < 1) frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [started, end, duration]);

  if (!started) return 0;
  const raw = count / divisor;
  return Number.isInteger(raw) ? raw : raw.toFixed(1);
}

/* ─── Left stat card ────────────────────────────────────────────── */
function StatCard({ stat, started, index }) {
  const val = useCountUp(stat.end, stat.divisor, stat.end >= 1000 ? 2000 : 1400, started);
  const display = `${val}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={started ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '20px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.25s',
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: stat.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <stat.Icon size={20} color={stat.iconColor} />
      </div>
      <div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
          fontSize: '1.45rem', fontWeight: 800,
          color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1,
          marginBottom: 3,
        }}>
          {display}
        </div>
        <div style={{
          fontFamily: "'Manrope','Inter',sans-serif",
          fontSize: '0.78rem', fontWeight: 600,
          color: '#64748b', lineHeight: 1.2,
        }}>
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── About Preview section ─────────────────────────────────────── */
export default function AboutPreview() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg,#f8faff 0%,#ffffff 100%)',
        padding: '88px 0 96px',
      }}
    >
      <div className="site-container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >

          {/* ── LEFT: Stats panel ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            {/* NABH floating badge */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: -20, right: -16,
                background: '#fff',
                borderRadius: 16,
                padding: '12px 16px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
                display: 'flex', alignItems: 'center', gap: 10,
                zIndex: 2,
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'rgba(37,99,235,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FaShieldAlt size={18} color="#2563eb" />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
                  fontSize: '0.82rem', fontWeight: 700, color: '#0f172a',
                }}>
                  NABH Accredited
                </div>
                <div style={{
                  fontFamily: "'Manrope','Inter',sans-serif",
                  fontSize: '0.7rem', fontWeight: 500, color: '#94a3b8', marginTop: 1,
                }}>
                  Quality &amp; Safety Certified
                </div>
              </div>
            </motion.div>

            {/* Main stats panel wrapper */}
            <div style={{
              background: 'linear-gradient(145deg,#eef4ff 0%,#f0fdf9 100%)',
              borderRadius: 24,
              padding: '32px',
              border: '1px solid rgba(37,99,235,0.1)',
              boxShadow: '0 4px 32px rgba(37,99,235,0.08)',
            }}>

              {/* 2×2 stat grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
                marginBottom: 16,
              }}>
                {leftStats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} started={inView} index={i} />
                ))}
              </div>

              {/* Emergency bar */}
              <div style={{
                background: 'linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 60%,#2563eb 100%)',
                borderRadius: 14,
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                boxShadow: '0 4px 20px rgba(29,78,216,0.3)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FaPhone size={16} color="#fff" />
                    <span style={{
                      position: 'absolute', width: 8, height: 8,
                      borderRadius: '50%', background: '#ef4444',
                      top: 0, right: 0,
                      animation: 'qa-ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                    }} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
                      fontWeight: 700, fontSize: '0.95rem', color: '#fff',
                      marginBottom: 2,
                    }}>
                      24 / 7 Emergency Care
                    </div>
                    <div style={{
                      fontFamily: "'Manrope','Inter',sans-serif",
                      fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontWeight: 500,
                    }}>
                      Immediate response, round the clock
                    </div>
                  </div>
                </div>
                <a
                  href="tel:104"
                  style={{
                    background: '#fff',
                    color: '#1d4ed8',
                    fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
                    fontWeight: 800,
                    fontSize: '1rem',
                    padding: '8px 18px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  104
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content block ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.15)',
              borderRadius: 999,
              padding: '6px 14px 6px 10px',
              marginBottom: 24,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#2563eb', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Manrope','Inter',sans-serif",
                fontSize: '0.8rem', fontWeight: 700,
                color: '#1d4ed8', letterSpacing: '0.01em',
              }}>
                About CityHospital
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
              fontSize: 'clamp(1.95rem,2.6vw,2.65rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              marginBottom: 20,
            }}>
              25 Years of{' '}
              <span style={{
                background: 'linear-gradient(115deg,#1d4ed8 0%,#0d9488 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Compassionate Care
              </span>
            </h2>

            {/* Body paragraph */}
            <p style={{
              fontFamily: "'Manrope','Inter',sans-serif",
              fontSize: '1.025rem',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.8,
              marginBottom: 32,
              maxWidth: 520,
            }}>
              CityHospital was founded in 2000 with a simple but powerful mission: to provide every
              patient with the quality, compassion, and dignity they deserve. Over 25 years, we
              have grown into a leading multi-specialty institution trusted by thousands of families.
            </p>

            {/* Highlights list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                >
                  <FaCheckCircle
                    size={17}
                    color="#059669"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span style={{
                    fontFamily: "'Manrope','Inter',sans-serif",
                    fontSize: '0.925rem',
                    fontWeight: 500,
                    color: '#334155',
                    lineHeight: 1.55,
                  }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              to="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'linear-gradient(135deg,#1d4ed8 0%,#2563eb 100%)',
                color: '#fff',
                fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
                fontSize: '0.95rem', fontWeight: 700,
                padding: '14px 28px',
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37,99,235,0.32)',
                transition: 'transform 0.25s, box-shadow 0.25s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.42)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.32)';
              }}
            >
              Our Story
              <FaArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .about-grid { gap: 36px !important; }
        }
        @keyframes qa-ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
