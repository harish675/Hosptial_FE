/**
 * Centralized Motion System
 * ---------------------------------------------------------------
 * A single source of truth for all Framer Motion variants and
 * transitions used across the site. Keeps animations consistent,
 * subtle, premium, and performant (transform/opacity only).
 */

// Premium easing curve used site-wide
export const EASE = [0.21, 0.47, 0.32, 0.98];

// Default viewport config for scroll reveals (trigger once, ~20% visible)
export const viewportOnce = { once: true, amount: 0.2, margin: '-40px' };

/* ---------- Entrance variants ---------- */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

/* ---------- Stagger orchestration ---------- */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ---------- Micro-interactions ---------- */
export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.25, ease: EASE } },
};

export const tapScale = { scale: 0.97 };
export const hoverScale = { scale: 1.03 };
