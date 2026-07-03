import { useParams, Navigate, Link } from 'react-router-dom';
import { departments } from '../../data/departments';
import { doctors } from '../../data/doctors';
import DoctorCard from '../../components/doctors/DoctorCard';
import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import { FaStethoscope, FaCheckCircle, FaHospital, FaArrowRight } from 'react-icons/fa';

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const department = departments.find(d => d.slug === slug);

  if (!department) {
    return <Navigate to="/departments" />;
  }

  const deptDoctors = doctors.filter(d => department.doctorSlugs.includes(d.slug) || d.department === department.name);

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <div className={`${department.bgColor} border-b border-gray-100 py-16 md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="text-[300px] absolute -right-20 top-1/2 -translate-y-1/2 select-none" style={{ color: department.color }}>
            {department.icon === 'heart' ? '❤️' : '🏥'}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-sm">
              Department
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{department.name}</h1>
            <p className="text-xl text-gray-700 leading-relaxed">{department.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaStethoscope style={{ color: department.color }} /> Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {department.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500" /> Key Treatments
                </h3>
                <ul className="space-y-4">
                  {department.treatments.map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-red-500">⚠️</span> Symptoms to Watch
                </h3>
                <ul className="space-y-4">
                  {department.symptoms.map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaHospital className="text-blue-500" /> Facilities & Technology
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {department.facilities.map(item => (
                  <div key={item} className="bg-gray-50 border border-gray-100 p-4 rounded-xl font-semibold text-gray-700 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Book Consultation</h3>
              <p className="text-blue-200 text-sm mb-6">Schedule an appointment with our {department.name} specialists today.</p>
              <Link 
                to="/appointment"
                className="block w-full bg-white text-blue-900 font-bold py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Book Now
              </Link>
            </div>

            {deptDoctors.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="text-xl font-bold text-gray-900">Our Specialists</h3>
                  <Link to="/doctors" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                    View All <FaArrowRight size={10} />
                  </Link>
                </div>
                <div className="space-y-4">
                  {deptDoctors.slice(0, 3).map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} variant="list" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
