import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaShieldAlt,
  FaAward,
  FaStar,
  FaHeartbeat,
} from 'react-icons/fa';
import { EASE } from '../animations/motion';

const trustPills = [
  { icon: FaShieldAlt, label: 'NABH Accredited' },
  { icon: FaAward, label: '25+ Years Excellence' },
  { icon: FaStar, label: '98% Patient Satisfaction' },
  { icon: FaHeartbeat, label: '24/7 Emergency Support' },
];

const leftParticles = [
  { top: '18%', left: '8%', size: 4, delay: '0s' },
  { top: '34%', left: '22%', size: 3, delay: '-2s' },
  { top: '52%', left: '6%', size: 5, delay: '-4s' },
  { top: '68%', left: '18%', size: 3, delay: '-1s' },
  { top: '28%', left: '32%', size: 4, delay: '-3s' },
  { top: '76%', left: '10%', size: 3, delay: '-5s' },
];

const centerParticles = [
  { top: '22%', left: '48%', size: 4, delay: '-1s' },
  { top: '44%', left: '56%', size: 3, delay: '-3s' },
  { top: '62%', left: '50%', size: 5, delay: '-2s' },
  { top: '38%', left: '62%', size: 3, delay: '-4s' },
  { top: '72%', left: '58%', size: 4, delay: '-6s' },
];

const heroSequence = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const eyebrowReveal = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE },
  },
};

const lineReveal = {
  hidden: { opacity: 0, y: 36, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE },
  },
};

const paragraphReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.18 },
  },
};

const pillReveal = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

function FloatingParticles({ items, className = '' }) {
  return (
    <div className={`hero-particles ${className}`} aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className="hero-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function EcgWave({ reduce }) {
  return (
    <svg
      className={`hero-ecg ${reduce ? 'hero-motion-static' : ''}`}
      viewBox="0 0 480 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="hero-ecg-line"
        d="M0 60 H60 L72 60 L78 38 L84 82 L90 60 L102 60 L108 48 L114 72 L120 60 H480"
        stroke="rgba(77, 227, 255, 0.14)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="hero-ecg-glow"
        d="M0 60 H60 L72 60 L78 38 L84 82 L90 60 L102 60 L108 48 L114 72 L120 60 H480"
        stroke="rgba(77, 227, 255, 0.06)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoleculeMesh({ className = '', reduce = false }) {
  const nodes = [
    { cx: 40, cy: 30 },
    { cx: 120, cy: 18 },
    { cx: 200, cy: 42 },
    { cx: 90, cy: 80 },
    { cx: 170, cy: 72 },
    { cx: 250, cy: 58 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5], [1, 4],
  ];

  return (
    <svg
      className={`hero-molecule ${className} ${reduce ? 'hero-motion-static' : ''}`}
      viewBox="0 0 290 100"
      fill="none"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          className="hero-molecule-edge"
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="rgba(77, 227, 255, 0.1)"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          className="hero-molecule-node"
          cx={n.cx}
          cy={n.cy}
          r="3"
          fill="rgba(77, 227, 255, 0.22)"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  );
}

function CenterBridge({ reduce }) {
  return (
    <svg
      className={`hero-bridge ${reduce ? 'hero-motion-static' : ''}`}
      viewBox="0 0 800 400"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="hero-bridge-line"
        d="M40 200 C180 160, 280 240, 420 200 S640 140, 760 180"
        stroke="rgba(77, 227, 255, 0.07)"
        strokeWidth="1"
      />
      <path
        className="hero-bridge-line hero-bridge-line-alt"
        d="M60 260 C200 220, 320 300, 460 260 S660 200, 780 240"
        stroke="rgba(13, 138, 143, 0.08)"
        strokeWidth="1"
      />
    </svg>
  );
}

function DnaHelix({ className = '', reduce = false, faint = false }) {
  const uid = useId().replace(/:/g, '');
  const rungs = Array.from({ length: faint ? 10 : 16 }, (_, i) => {
    const total = faint ? 9 : 15;
    const t = i / total;
    const y = 48 + i * (faint ? 52 : 44);
    const spread = (faint ? 60 : 88) + Math.sin(t * Math.PI) * (faint ? 48 : 72);
    const cx = 200;
    return { y, x1: cx - spread / 2, x2: cx + spread / 2, delay: `${i * 0.08}s` };
  });

  return (
    <svg
      className={`hero-dna-helix ${className} ${reduce ? 'hero-motion-static' : ''}`}
      viewBox="0 0 400 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`helixGrad-${uid}`} x1="80" y1="0" x2="320" y2="760" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4de3ff" stopOpacity={faint ? 0.25 : 0.55} />
          <stop offset="0.5" stopColor="#0d8a8f" stopOpacity={faint ? 0.35 : 0.65} />
          <stop offset="1" stopColor="#173c8f" stopOpacity={faint ? 0.2 : 0.45} />
        </linearGradient>
        <filter id={`helixSoftGlow-${uid}`} x="-50%" y="-20%" width="200%" height="140%">
          <feGaussianBlur stdDeviation={faint ? 2 : 3} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        className="hero-dna-strand"
        d="M248 0C340 88 352 188 248 288C140 392 128 520 248 760"
        stroke={`url(#helixGrad-${uid})`}
        strokeWidth={faint ? 1.5 : 2.5}
        strokeLinecap="round"
        filter={`url(#helixSoftGlow-${uid})`}
      />
      <path
        className="hero-dna-strand hero-dna-strand-alt"
        d="M152 0C60 96 48 196 152 296C260 400 272 528 152 760"
        stroke={`url(#helixGrad-${uid})`}
        strokeWidth={faint ? 1.2 : 2}
        strokeLinecap="round"
        opacity="0.55"
        filter={`url(#helixSoftGlow-${uid})`}
      />

      {rungs.map((rung) => (
        <g key={rung.y} className="hero-dna-rung" style={{ animationDelay: rung.delay }}>
          <line
            x1={rung.x1}
            y1={rung.y}
            x2={rung.x2}
            y2={rung.y}
            stroke="rgba(77, 227, 255, 0.28)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx={rung.x1} cy={rung.y} r={faint ? 2.5 : 3.5} fill="rgba(77, 227, 255, 0.45)" />
          <circle cx={rung.x2} cy={rung.y} r={faint ? 2.5 : 3.5} fill="rgba(13, 138, 143, 0.35)" />
        </g>
      ))}
    </svg>
  );
}

function HeroBackground({ reduce }) {
  const staticClass = reduce ? 'hero-motion-static' : '';

  return (
    <div className="hero-bg-layer" aria-hidden="true">
      <div className="hero-bg-gradient" />

      {/* ── Left zone ── */}
      <div className={`hero-zone hero-zone-left ${staticClass}`}>
        <div className="hero-bg-orb hero-bg-orb-left" />
        <FloatingParticles items={leftParticles} className="hero-particles-left" />
        <EcgWave reduce={reduce} />
        <MoleculeMesh className="hero-molecule-left" reduce={reduce} />
        <DnaHelix className="hero-dna-fragment-left" reduce={reduce} faint />
      </div>

      {/* ── Center zone ── */}
      <div className={`hero-zone hero-zone-center ${staticClass}`}>
        <div className="hero-bg-orb hero-bg-orb-center" />
        <div className="hero-pulse-rings">
          <span className="hero-pulse-ring" />
          <span className="hero-pulse-ring" />
          <span className="hero-pulse-ring" />
        </div>
        <FloatingParticles items={centerParticles} className="hero-particles-center" />
        <CenterBridge reduce={reduce} />
        <div className="hero-center-ring hero-center-ring-one" />
        <div className="hero-center-ring hero-center-ring-two" />
        <DnaHelix className="hero-dna-fragment-center" reduce={reduce} faint />
      </div>

      {/* ── Right zone ── */}
      <div className={`hero-zone hero-zone-right ${staticClass}`}>
        <div className="hero-bg-orb hero-bg-orb-right" />
        <div className="hero-bg-ring hero-bg-ring-one" />
        <div className="hero-bg-ring hero-bg-ring-two" />
        <div className="hero-dna-cluster">
          <DnaHelix className="hero-dna-primary" reduce={reduce} />
          <DnaHelix className="hero-dna-secondary" reduce={reduce} faint />
        </div>
      </div>

      <div className="hero-bg-dots" />
      <div className="hero-bg-vignette" />
      <div className="hero-bg-text-shield" />
    </div>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="hero-section">
      <HeroBackground reduce={reduce} />

      <div className="site-container hero-content-wrap">
        <motion.div
          className="hero-content"
          variants={heroSequence}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={eyebrowReveal} className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span>Trusted Multi-Specialty Hospital since 2000</span>
          </motion.div>

          <motion.h1 className="hero-headline" variants={heroSequence}>
            <motion.span variants={lineReveal} className="hero-headline-line block">
              Compassionate Care,
            </motion.span>
            <motion.span variants={lineReveal} className="hero-headline-line block">
              <span className="hero-headline-accent">Advanced</span>{' '}
              Medicine
            </motion.span>
          </motion.h1>

          <motion.p variants={paragraphReveal} className="hero-lead">
            CityHospital brings world-class medical expertise and compassionate
            care to every patient. With 50+ specialists, 15 departments, and
            round-the-clock emergency services, we deliver complete healthcare
            under one roof.
          </motion.p>

          <motion.ul className="hero-trust-pills" variants={heroSequence}>
            {trustPills.map((pill) => (
              <motion.li key={pill.label} variants={pillReveal} className="hero-trust-pill">
                <pill.icon className="hero-trust-pill-icon" aria-hidden="true" />
                <span>{pill.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80H1440V38C1218 68 982 8 720 24C458 40 228 4 0 32V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
