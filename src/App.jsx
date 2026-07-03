import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';

import TopInfoBar from './components/layout/TopInfoBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import DoctorsPage from './pages/Doctors';
import DoctorDetailPage from './pages/DoctorDetail';
import DepartmentsPage from './pages/Departments';
import DepartmentDetailPage from './pages/DepartmentDetail';
import AppointmentPage from './pages/Appointment';
import ServicesPage from './pages/Services';
import PackagesPage from './pages/Packages';
import TestimonialsPage from './pages/Testimonials';
import BlogPage from './pages/Blog';
import BlogDetailPage from './pages/BlogDetail';
import ContactPage from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-700">
            404
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Page Not Found
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            The page you are looking for does not exist or may have been moved.
            Please return to the homepage or continue browsing the hospital website.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-800 hover:shadow-blue-300"
            >
              Go to Homepage
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-blue-100 bg-blue-50 px-6 py-3 font-semibold text-blue-700 transition-all hover:border-blue-200 hover:bg-blue-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col overflow-x-clip bg-white font-sans text-gray-900">
        {/* Header */}
        <TopInfoBar />
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:slug" element={<DoctorDetailPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}