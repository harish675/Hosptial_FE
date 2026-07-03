import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctors } from '../../data/doctors';
import { departments } from '../../data/departments';
import BreadcrumbBanner from '../../components/common/BreadcrumbBanner';
import DoctorCard from '../../components/doctors/DoctorCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.conditionsTreated.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    
    return matchesSearch && matchesDept;
  });

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <BreadcrumbBanner 
        title="Find a Doctor" 
        subtitle="Search and book appointments with our expert specialists across various departments."
        crumbs={[{ label: 'Doctors' }]}
      />

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search doctor by name, specialty, or condition..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-64 relative">
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select 
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm appearance-none"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value="All">All Departments</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.name}>{dept.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 flex justify-between items-end">
          <h2 className="text-xl font-bold text-gray-900">
            {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Specialist' : 'Specialists'} Found
          </h2>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredDoctors.map(doctor => (
              <motion.div
                key={doctor.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <DoctorCard doctor={doctor} variant="grid" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <div className="text-gray-400 text-6xl mb-4">🩺</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Doctors Found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any doctors matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedDept('All');}}
              className="text-blue-700 font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
