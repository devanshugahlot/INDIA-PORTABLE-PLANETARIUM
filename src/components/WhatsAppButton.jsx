import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918317228463"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      id="whatsapp-float-btn"
    >
      <span className="absolute inset-0 rounded-full whatsapp-pulse bg-[#25D366] opacity-75"></span>
      <FaWhatsapp className="relative z-10 text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
