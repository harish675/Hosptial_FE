import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doctors } from '../../data/doctors';
import { FaGraduationCap, FaStethoscope, FaTrophy, FaCalendarAlt, FaCheckCircle, FaStar, FaGlobe } from 'react-icons/fa';

export default function DoctorDetailPage() {
  const { slug } = useParams();
  const doctor = doctors.find(d => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/doctors" />;
  }

  const initials = doctor.name.split(' ').slice(1).map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <main className="bg-gray-50 min-h-screen pb-20 pt-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Profile Hero Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="h-40 bg-gradient-to-r from-blue-700 to-teal-600"></div>
          <div className="px-6 sm:px-10 pb-8 relative">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-end -mt-16 mb-6">
              <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl font-bold text-blue-700 border-4 border-white flex-shrink-0">
                {initials}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{doctor.name}</h1>
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{doctor.department}</span>
                  <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">
                    <FaStar /> {doctor.rating} ({doctor.reviewCount})
                  </span>
                </div>
                <p className="text-gray-500 font-medium mb-1">{doctor.specialization}</p>
                <p className="text-sm text-gray-400">{doctor.qualification}</p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link
                  to="/appointment"
                  className="block text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md w-full"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-gray-100 mb-6">
              <div className="text-center">
                <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Experience</div>
                <div className="font-bold text-gray-900">{doctor.experience}+ Years</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Patients</div>
                <div className="font-bold text-gray-900">5000+</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Availability</div>
                <div className="font-bold text-gray-900">{doctor.availability.join(', ')}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Languages</div>
                <div className="font-bold text-gray-900">{doctor.languages.length}</div>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FaStethoscope className="text-teal-500" /> About Dr. {doctor.name.split(' ')[1]}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {doctor.about}
              </p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Col */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Conditions Treated
              </h3>
              <ul className="space-y-3">
                {doctor.conditionsTreated.map(condition => (
                  <li key={condition} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaGlobe className="text-teal-500" /> Languages Spoken
              </h3>
              <div className="flex gap-2 flex-wrap">
                {doctor.languages.map(lang => (
                  <span key={lang} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-500" /> OPD Schedule
              </h3>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mb-4">
                <div className="font-bold text-emerald-800 mb-1">Standard Timings</div>
                <div className="text-emerald-600 text-sm">{doctor.timings}</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className={`flex-1 min-w-[60px] text-center py-2 rounded-lg text-xs font-bold border ${doctor.availability.includes(day) ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaTrophy className="text-amber-500" /> Awards & Recognitions
              </h3>
              <ul className="space-y-4">
                {doctor.awards.map(award => (
                  <li key={award} className="flex gap-3 text-sm">
                    <div className="mt-1 flex-shrink-0 text-amber-500"><FaTrophy size={14} /></div>
                    <span className="text-gray-600">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
