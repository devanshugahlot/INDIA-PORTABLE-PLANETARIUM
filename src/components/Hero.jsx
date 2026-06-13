import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left/Center Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"
            >
              <span className="text-sm font-semibold tracking-wider text-[#FFB830] font-inter uppercase">
                🌟 Inspired by Dr. APJ Abdul Kalam's Vision
              </span>
            </motion.div>

            {/* Main Heading (3 Lines) */}
            <h1 className="font-orbitron font-extrabold tracking-tight leading-none text-left">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={wordVariants}
                  className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-black"
                >
                  Convert
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={wordVariants}
                  className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#00B4FF] to-[#7B2FBE] font-black"
                >
                  your school in
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={wordVariants}
                  className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold"
                >
                  cosmic Haven.
                </motion.span>
              </span>
            </h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-[#B0BEC5] max-w-xl font-light tracking-wide"
            >
              India's Premier Portable Planetarium Experience
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="glow-button-blue px-8 py-4 rounded-full text-base font-bold tracking-wider uppercase text-center"
                id="hero-cta-book"
              >
                Book Appointment
              </a>
              <a
                href="#about"
                onClick={handleScrollToNext}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#00B4FF]/30"
                id="hero-cta-video"
              >
                Watch Video <FaPlay className="text-xs text-[#00B4FF]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Rotating Planet Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0"
          >
            {/* Concentric Glowing Space Rings */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] border border-[#00B4FF]/10 rounded-full planet-orbit opacity-40"></div>
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] border border-[#7B2FBE]/10 rounded-full planet-orbit opacity-30 [animation-direction:reverse] [animation-duration:60s]"></div>
            <div className="absolute w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] border border-[#FFB830]/5 rounded-full planet-orbit opacity-20 [animation-duration:80s]"></div>

            {/* 3D-style Globe */}
            <div className="globe-container">
              <div className="globe-texture"></div>
              {/* Outer Atmosphere Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020B18]/70 via-transparent to-[#00B4FF]/20 pointer-events-none rounded-full"></div>
            </div>
            
            {/* Small orbiting moon element */}
            <div className="absolute w-6 h-6 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-spin-slow origin-[160px_center] sm:origin-[220px_center]"></div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-75 hover:opacity-100 transition-opacity" onClick={handleScrollToNext}>
        <span className="text-xs font-orbitron tracking-[3px] text-[#FFB830] uppercase mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaChevronDown className="text-xl text-[#00B4FF]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
