import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const focusRing =
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/60';

function Interactive({ to, href, onClick, className, disabled, children, ...props }) {
  const reduce = useReducedMotion();
  const motionProps = disabled
    ? {}
    : {
        whileHover: reduce ? undefined : { y: -2 },
        whileTap: reduce ? undefined : { scale: 0.97 },
      };

  if (to && !disabled) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={className} {...props}>{children}</Link>
      </motion.div>
    );
  }
  if (href && !disabled) {
    return (
      <motion.a href={href} className={className} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function PrimaryButton({ children, size = 'md', className = '', disabled, ...rest }) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors shadow-md shadow-blue-200/70 ${focusRing} ${
    disabled
      ? 'bg-blue-300 text-white cursor-not-allowed shadow-none'
      : 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white hover:shadow-lg hover:shadow-blue-300/60'
  } ${sizes[size]} ${className}`;
  return <Interactive className={base} disabled={disabled} {...rest}>{children}</Interactive>;
}

export function SecondaryButton({ children, size = 'md', className = '', disabled, ...rest }) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors ${focusRing} ${
    disabled
      ? 'bg-white border-2 border-gray-200 text-gray-300 cursor-not-allowed'
      : 'bg-white hover:bg-blue-50 border-2 border-blue-700 text-blue-700'
  } ${sizes[size]} ${className}`;
  return <Interactive className={base} disabled={disabled} {...rest}>{children}</Interactive>;
}

export function GhostButton({ children, size = 'md', className = '', disabled, ...rest }) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors ${focusRing} ${
    disabled
      ? 'text-gray-300 cursor-not-allowed'
      : 'text-blue-700 hover:bg-blue-50'
  } ${sizes[size]} ${className}`;
  return <Interactive className={base} disabled={disabled} {...rest}>{children}</Interactive>;
}

export function EmergencyButton({ children, href, className = '', ...props }) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href || 'tel:104'}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-6 py-3 transition-colors shadow-lg shadow-red-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-300 ${className}`}
      {...props}
    >
      <span className="w-2.5 h-2.5 bg-white rounded-full pulse-red"></span>
      {children || 'Emergency: 104'}
    </motion.a>
  );
}
