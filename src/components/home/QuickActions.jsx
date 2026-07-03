import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaPhone, FaUserMd } from 'react-icons/fa';

const actions = [
  {
    icon: FaCalendarAlt,
    label: 'Book Appointment',
    desc: 'Online in 30 seconds',
    path: '/appointment',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #1e40af 100%)',
    glow: 'rgba(37,99,235,0.35)',
    pulse: false,
  },
  {
    icon: FaPhone,
    label: 'Emergency Help',
    desc: 'Available 24 / 7 — Call 104',
    href: 'tel:104',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 60%, #991b1b 100%)',
    glow: 'rgba(220,38,38,0.35)',
    pulse: true,
  },
  {
    icon: FaUserMd,
    label: 'Find a Doctor',
    desc: '50+ specialists ready',
    path: '/doctors',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 60%, #115e59 100%)',
    glow: 'rgba(13,148,136,0.35)',
    pulse: false,
  },
];

export default function QuickActions() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg,#f8faff 0%,#ffffff 100%)',
        borderBottom: '1px solid #e8eef8',
        padding: '0 0 0 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="site-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Pull the strip up so it overlaps the hero wave */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            transform: 'translateY(-32px)',
          }}
          className="qa-grid"
        >
          {actions.map((action, i) => {
            const Card = (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: action.gradient,
                  borderRadius: '18px',
                  boxShadow: `0 8px 28px ${action.glow}, 0 2px 8px rgba(0,0,0,0.12)`,
                  padding: '22px 26px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.28s',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '90px',
                }}
              >
                {/* Subtle shine overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg,rgba(255,255,255,0.14) 0%,transparent 60%)',
                  borderRadius: 'inherit', pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative',
                }}>
                  <action.icon size={22} color="#fff" />
                  {action.pulse && (
                    <span style={{
                      position: 'absolute', width: 10, height: 10,
                      borderRadius: '50%', background: '#fff',
                      top: -3, right: -3, animation: 'qa-ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                    }} />
                  )}
                </div>

                {/* Text */}
                <div>
                  <div style={{
                    color: '#fff', fontFamily: "'Plus Jakarta Sans','Manrope',sans-serif",
                    fontSize: '1rem', fontWeight: 700, lineHeight: 1.25, marginBottom: 4,
                    letterSpacing: '-0.01em',
                  }}>
                    {action.label}
                  </div>
                  <div style={{
                    color: 'rgba(255,255,255,0.78)',
                    fontFamily: "'Manrope','Inter',sans-serif",
                    fontSize: '0.82rem', fontWeight: 500,
                  }}>
                    {action.desc}
                  </div>
                </div>
              </motion.div>
            );

            return action.path
              ? <Link to={action.path} key={action.label} style={{ display: 'block', textDecoration: 'none' }}>{Card}</Link>
              : <a href={action.href} key={action.label} style={{ display: 'block', textDecoration: 'none' }}>{Card}</a>;
          })}
        </div>
      </div>

      <style>{`
        @keyframes qa-ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @media (max-width: 767px) {
          .qa-grid {
            grid-template-columns: 1fr !important;
            transform: translateY(-20px) !important;
            gap: 12px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .qa-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
