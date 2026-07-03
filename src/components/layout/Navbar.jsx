import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Departments', path: '/departments' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Services', path: '/services' },
  {
    label: 'More',
    children: [
      { label: 'Health Packages', path: '/packages' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Health Blog', path: '/blog' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const moreRef = useRef(null);
  const location = useLocation();

  const isLinkActive = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileMoreOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gray-100 bg-white/95 shadow-lg shadow-blue-900/10 backdrop-blur-md'
            : 'border-b border-gray-100 bg-white'
        }`}
      >
        <div className="site-container">
          <div className="flex h-[76px] items-center justify-between gap-4 lg:gap-6">
            {/* LEFT: BRAND */}
            <Link to="/" className="flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-md">
                <span className="text-lg font-bold text-white">C</span>
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold text-blue-900">City</span>
                  <span className="text-xl font-bold text-teal-600">Hospital</span>
                </div>
                <p className="hidden text-xs text-gray-500 sm:block">
                  Multi-Specialty Healthcare
                </p>
              </div>
            </Link>

            {/* CENTER: DESKTOP NAV */}
            <nav
              className="hidden min-w-0 flex-1 items-center justify-center px-4 lg:flex xl:px-6"
              aria-label="Primary navigation"
            >
              <ul className="flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3">
                {navLinks.map((link) => {
                  const isActive = link.children
                    ? link.children.some((child) => isLinkActive(child.path))
                    : isLinkActive(link.path);

                  if (link.children) {
                    return (
                      <li key={link.label} className="relative" ref={moreRef}>
                        <button
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded={activeDropdown === link.label}
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            )
                          }
                          className={`group relative flex h-11 items-center gap-1.5 rounded-xl px-4 text-sm font-semibold transition-all duration-200 xl:px-5 ${
                            isActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                          }`}
                        >
                          <span>{link.label}</span>
                          <FaChevronDown
                            size={10}
                            className={`transition-transform duration-200 ${
                              activeDropdown === link.label ? 'rotate-180' : ''
                            }`}
                          />

                          <span
                            className={`absolute left-4 right-4 -bottom-[2px] h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300 ${
                              isActive
                                ? 'scale-x-100 opacity-100'
                                : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.18 }}
                              className="absolute left-1/2 top-[calc(100%+14px)] z-50 min-w-[240px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-blue-950/10"
                              role="menu"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  role="menuitem"
                                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                                    isLinkActive(child.path)
                                      ? 'bg-blue-50 text-blue-700'
                                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`group relative flex h-11 items-center rounded-xl px-4 text-sm font-semibold transition-all duration-200 xl:px-5 ${
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        {link.label}

                        {isActive ? (
                          <motion.span
                            layoutId="nav-active-indicator"
                            className="absolute left-4 right-4 -bottom-[2px] h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        ) : (
                          <span className="absolute left-4 right-4 -bottom-[2px] h-0.5 scale-x-50 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* RIGHT: CONTACT + CTA + MOBILE MENU */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
              <a
                href="tel:+919876543210"
                className="hidden items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 md:flex"
              >
                <FaPhone size={13} />
                <span className="whitespace-nowrap">+91 98765 43210</span>
              </a>

              <Link
                to="/appointment"
                className="hidden min-h-[46px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-blue-700 px-6 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-800 hover:shadow-blue-300 sm:inline-flex lg:px-7"
              >
                Book Appointment
              </Link>

              <button
                className="rounded-xl p-2.5 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 lg:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-[86vw] max-w-[360px] overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="p-5 sm:p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500">
                      <span className="font-bold text-white">C</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-900">CityHospital</div>
                      <div className="text-xs text-gray-500">
                        Multi-Specialty Healthcare
                      </div>
                    </div>
                  </Link>

                  <button
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                    aria-label="Close mobile menu"
                  >
                    <FaTimes className="text-gray-600" />
                  </button>
                </div>

                <nav className="space-y-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => {
                    const isActive = link.children
                      ? link.children.some((child) => isLinkActive(child.path))
                      : isLinkActive(link.path);

                    if (link.children) {
                      return (
                        <div key={link.label}>
                          <button
                            type="button"
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-3 font-semibold transition-colors ${
                              isActive || mobileMoreOpen
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                            }`}
                            onClick={() => setMobileMoreOpen((prev) => !prev)}
                            aria-expanded={mobileMoreOpen}
                          >
                            <span>{link.label}</span>
                            <FaChevronDown
                              size={12}
                              className={`transition-transform ${
                                mobileMoreOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileMoreOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.path}
                                      to={child.path}
                                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                        isLinkActive(child.path)
                                          ? 'bg-blue-50 text-blue-700'
                                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                                      }`}
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block rounded-xl px-3 py-3 font-medium transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8 space-y-3">
                  <Link
                    to="/appointment"
                    className="block rounded-xl bg-blue-700 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book Appointment
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="block rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-center font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    Call: +91 98765 43210
                  </a>
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 p-4">
                  <p className="mb-2 text-xs text-gray-500">Contact</p>
                  <a
                    href="tel:+919876543210"
                    className="block text-sm font-semibold text-blue-700"
                  >
                    +91 98765 43210
                  </a>
                  <p className="mt-1 text-xs text-gray-500">
                    Mon–Sat: 8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}