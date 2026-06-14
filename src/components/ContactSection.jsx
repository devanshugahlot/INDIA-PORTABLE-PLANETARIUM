import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Phone number is invalid.';
    }

    if (!formData.message.trim()) tempErrors.message = 'Message is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Construct WhatsApp message with user inputs
      const whatsappText = `Hello India Portable Planetarium,\n\nI would like to make an inquiry:\n- *Name*: ${formData.name}\n- *Email*: ${formData.email}\n- *Phone*: ${formData.phone}\n- *Message*: ${formData.message}`;
      const encodedText = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/918317228463?text=${encodedText}`;

      // Simulate delay, show success visual and open WhatsApp redirect
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        window.open(whatsappUrl, '_blank');

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#040D1F] relative overflow-hidden z-10">
      {/* Top background blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020B18] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
            Contact India Portable Planetarium
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent rounded-full mx-auto mt-2"></div>
        </div>

        {/* 3 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 — Address */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center space-y-4 border border-white/5 hover:border-[#FFB830]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#FFB830]/10 flex items-center justify-center border border-[#FFB830]/30">
              <FaMapMarkerAlt className="text-[#FFB830] text-xl" />
            </div>
            <h3 className="font-orbitron font-bold text-lg text-white tracking-wide">
              Address
            </h3>
            <p className="text-[#B0BEC5] font-inter text-sm sm:text-base leading-relaxed max-w-xs">
              Shadev housings socity pandav nagri flat no 06 nashik (MH 422009)
            </p>
          </div>

          {/* Card 2 — Phone */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center space-y-4 border border-white/5 hover:border-[#00B4FF]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#00B4FF]/10 flex items-center justify-center border border-[#00B4FF]/30">
              <FaPhoneAlt className="text-[#00B4FF] text-lg" />
            </div>
            <h3 className="font-orbitron font-bold text-lg text-white tracking-wide">
              Phone
            </h3>
            <a
              href="tel:+918317228463"
              className="text-[#B0BEC5] hover:text-[#00B4FF] font-inter text-base font-medium transition-colors"
              id="contact-tel-link"
            >
              +918317228463
            </a>
            <span className="text-xs text-gray-500 font-inter">Click to Call</span>
          </div>

          {/* Card 3 — Email */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center space-y-4 border border-white/5 hover:border-[#7B2FBE]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#7B2FBE]/10 flex items-center justify-center border border-[#7B2FBE]/30">
              <FaEnvelope className="text-[#7B2FBE] text-lg" />
            </div>
            <h3 className="font-orbitron font-bold text-lg text-white tracking-wide">
              Email
            </h3>
            <a
              href="mailto:Indiaportableplanetarium@gmail.com"
              className="text-[#B0BEC5] hover:text-[#00B4FF] font-inter text-sm sm:text-base font-medium transition-colors break-all"
              id="contact-mailto-link"
            >
              Indiaportableplanetarium@gmail.com
            </a>
            <span className="text-xs text-gray-500 font-inter">Click to Mail</span>
          </div>

        </div>

        {/* Contact Form Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B4FF] via-[#7B2FBE] to-[#FFB830]"></div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide border-b border-white/10 pb-4">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold tracking-wider font-orbitron text-gray-400 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4FF] focus:bg-white/10 transition-all font-inter`}
                        placeholder="Dr. Abdul Kalam"
                      />
                      {errors.name && <p className="text-red-500 text-xs font-inter">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold tracking-wider font-orbitron text-gray-400 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white/5 border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4FF] focus:bg-white/10 transition-all font-inter`}
                        placeholder="name@domain.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs font-inter">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider font-orbitron text-gray-400 uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4FF] focus:bg-white/10 transition-all font-inter`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-inter">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold tracking-wider font-orbitron text-gray-400 uppercase">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4FF] focus:bg-white/10 transition-all font-inter resize-none`}
                      placeholder="Write your inquiry here..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs font-inter">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="glow-button-blue w-full py-4 rounded-xl text-base font-bold tracking-wider uppercase flex items-center justify-center space-x-2"
                      id="contact-form-submit"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane className="text-xs" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 space-y-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00B4FF]/10 flex items-center justify-center border border-[#00B4FF] text-[#00B4FF] text-3xl animate-bounce">
                    <FaCheckCircle />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
                      Message Sent!
                    </h3>
                    <p className="text-[#B0BEC5] font-inter text-sm sm:text-base max-w-md">
                      Thank you for contacting India Portable Planetarium. Our team will review your inquiry and get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-3 rounded-full text-xs font-bold font-orbitron tracking-wider uppercase transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
