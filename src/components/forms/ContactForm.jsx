import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSpinner, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      console.log('Contact Request:', data);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center"
      >
        <FaCheckCircle className="text-teal-500 text-6xl mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out to us. Our support team will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
      <p className="text-gray-500 text-sm mb-6">Fill out the form below and we will contact you shortly.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
            <input 
              {...register('name', { required: 'Name is required' })}
              className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
              placeholder="Your Name"
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
              placeholder="Your Phone Number"
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
          <input 
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' }
            })}
            className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4`}
            placeholder="Your Email Address"
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
          <select 
            {...register('subject')}
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-blue-200 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4"
          >
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback / Suggestions</option>
            <option value="billing">Billing Issue</option>
            <option value="careers">Careers</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
          <textarea 
            {...register('message', { required: 'Please enter your message' })}
            rows={4}
            className={`w-full bg-gray-50 border ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'} rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-4 resize-none`}
            placeholder="How can we help you?"
          />
          {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
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
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
