import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { EASE, staggerItem as sharedStaggerItem } from './motion';

export function FadeInView({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const offset = reduce ? 0 : 30;
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
      x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: EASE,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={false}
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, className = '', staggerDelay = 0.08 }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Re-export the shared stagger item so existing imports keep working
export const staggerItem = sharedStaggerItem;
