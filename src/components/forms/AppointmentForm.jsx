import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { departments } from '../../data/departments';
import { doctors } from '../../data/doctors';

export default function AppointmentForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedDept = watch('department');
  
  // Filter doctors based on selected department
  const availableDoctors = selectedDept 
    ? doctors.filter(d => d.department === selectedDept)
    : doctors;

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Appointment Request:', data);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
      >
        <FaCheckCircle className="text-emerald-500 text-6xl mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you. Our team will contact you shortly to confirm your appointment time.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 to-teal-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">Schedule a Visit</h3>
        <p className="text-blue-100 text-sm">Fill in your details and we'll get back to you.</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
            <input 
              {...register('name', { required: 'Name is required' })}
              className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
              placeholder="John Doe"
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
          </div>
          
          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
            <input 
              type="tel"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number' }
              })}
              className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
              placeholder="9876543210"
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
            <input 
              type="email"
              {...register('email', { 
                pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' }
              })}
              className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
              placeholder="john@example.com"
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department *</label>
            <select 
              {...register('department', { required: 'Select a department' })}
              className={`w-full bg-gray-50 border ${errors.department ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
            >
              <option value="">Select Department</option>
              {departments.map(d => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
            </select>
            {errors.department && <span className="text-red-500 text-xs mt-1 block">{errors.department.message}</span>}
          </div>

          {/* Doctor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Doctor</label>
            <select 
              {...register('doctor')}
              className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4"
            >
              <option value="">Any Available Doctor</option>
              {availableDoctors.map(d => (
                <option key={d.id} value={d.name}>{d.name} ({d.specialization})</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date *</label>
            <input 
              type="date"
              {...register('date', { required: 'Select a date' })}
              className={`w-full bg-gray-50 border ${errors.date ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
            />
            {errors.date && <span className="text-red-500 text-xs mt-1 block">{errors.date.message}</span>}
          </div>

          {/* Time Preference */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Time Preference</label>
            <select 
              {...register('time')}
              className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4"
            >
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 8 PM)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Symptoms / Message</label>
          <textarea 
            {...register('message')}
            rows={3}
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4 resize-none"
            placeholder="Briefly describe your symptoms or reason for visit..."
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md shadow-blue-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" />
              Processing...
            </>
          ) : (
            'Confirm Appointment Request'
          )}
        </button>
        <p className="text-center text-xs text-gray-400 mt-3">
          For medical emergencies, please call <a href="tel:104" className="text-red-500 font-bold">104</a> immediately.
        </p>
      </form>
    </div>
  );
}
