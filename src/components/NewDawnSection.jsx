import React from 'react';
import { motion } from 'framer-motion';

const NewDawnSection = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="sales" className="py-24 bg-[#040D1F] relative overflow-hidden z-10 border-y border-white/5">
      {/* Premium Nebula Background Blurs */}
      <div className="absolute inset-0 bg-radial-gradient from-[#7B2FBE]/10 via-[#00B4FF]/5 to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#7B2FBE]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-[#00B4FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
            WHAT IS PLANETARIUM?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
            A New Dawn of Discovery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFB830] to-transparent rounded-full mx-auto mt-2"></div>
        </motion.div>

        {/* Detailed Paragraph Content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#B0BEC5] font-inter text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-light"
        >
          A Planetarium is a sky theatre built primarily for presenting educational and entertaining shows about astronomy and the night sky, or for training in celestial navigation. A dominant feature of most planetariums is the large dome-shaped projection screen onto which the scenes of stars, planets and other celestial objects can be made to appear and move realistically to simulate the complex "motions of the heavens". Planetarium systems of small fixed domes and portable (mobile) inflatable domes called "DIGIDOME" which are suitable for Schools, Colleges, Universities, Science Centres, Science Museums, Townships, Malls, Fun Parks, etc. They are perfect tools of edutainment to the students.
        </motion.p>

        {/* CTA Gold Glowing Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4"
        >
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="glow-button-gold inline-block px-10 py-4 rounded-full text-base font-bold tracking-wider uppercase shadow-xl"
            id="dawn-cta-quote"
          >
            Request A Quote
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default NewDawnSection;
