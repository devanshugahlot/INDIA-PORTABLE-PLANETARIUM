import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAstronaut } from 'react-icons/fa';

const AboutCosmos = () => {
  return (
    <section id="bio" className="py-20 bg-[#040D1F] relative overflow-hidden z-10">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020B18] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: APJ Abdul Kalam Portrait & Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6 lg:border-r lg:border-white/10 lg:pr-8"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00B4FF] via-[#7B2FBE] to-[#FFB830] opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-300"></div>
              
              <img
                src="https://www.cosmosdome.in/wp-content/uploads/2023/07/APJ-Abdul-Kalam.png"
                alt="Dr APJ Abdul Kalam - Inspiration behind Cosmos Dome Planetarium"
                className="relative rounded-full w-52 h-52 object-cover border-4 border-[#00B4FF] mx-auto z-10 shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="max-w-xs mx-auto space-y-2">
              <span className="text-[#FFB830] text-xs font-semibold tracking-[3px] font-orbitron uppercase block">
                THE INSPIRATION
              </span>
              <p className="text-white font-orbitron text-lg font-bold tracking-wide">
                Dr. APJ Abdul Kalam
              </p>
              <p className="text-[#B0BEC5] italic text-sm font-inter">
                "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great."
              </p>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Custom Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#00B4FF]/10 border border-[#00B4FF]/35 px-4 py-1.5 rounded-full">
              <FaUserAstronaut className="text-[#00B4FF] text-sm" />
              <span className="text-xs font-semibold tracking-wider text-[#00B4FF] font-orbitron uppercase">
                INDIA PORTABLE PLANETARIUM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white leading-tight">
              A Unique Educational Initiative
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFB830] to-transparent rounded-full mt-2"></div>

            <div className="space-y-6 text-[#B0BEC5] font-inter leading-relaxed text-sm sm:text-base">
              <p>
                The first unique concept of portable Planetarium introduced by Nehru Planetarium, Mumbai for Schools, Colleges, Organisations, Small Planetariums Owners and Operators in Maharashtra, India. India Portable Planetarium is a type of portable planetarium that is designed to provide an immersive and interactive experience for visitors. It consists of a large inflatable dome-shaped structure that can be easily transported and set up in a variety of locations.
              </p>
              <p>
                Inside the dome, high-resolution images of the night sky and other astronomical phenomena are projected onto a curved fabric or projection screen that covers the interior walls of the dome. The projections are typically created using specialized digital planetarium software and high-quality projectors. The India Portable Planetarium is often used in schools, museums, and other educational settings to teach astronomy and related subjects. It can also be used for entertainment purposes, such as stargazing parties or immersive movie screenings.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00B4FF]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
    </section>
  );
};

export default AboutCosmos;
