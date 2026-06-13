import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGlobe } from 'react-icons/fa';

const SolarSystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planets = [
    {
      id: 'mercury',
      name: 'Mercury',
      gradient: 'from-gray-500 via-gray-400 to-gray-600',
      shadowColor: 'rgba(156, 163, 175, 0.4)',
      text: 'Mercury is the first planet from the Sun and the smallest planet in the Solar System.',
      details: {
        diameter: '4,879 km',
        distance: '57.9 million km (0.39 AU)',
        orbit: '88 Earth days',
        temp: '-173°C to 427°C',
        funFact: 'Despite being closest to the Sun, it is not the hottest planet (Venus is). It has no atmosphere to trap heat.',
      },
    },
    {
      id: 'venus',
      name: 'Venus',
      gradient: 'from-amber-600 via-yellow-500 to-orange-700',
      shadowColor: 'rgba(245, 158, 11, 0.4)',
      text: 'Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System.',
      details: {
        diameter: '12,104 km',
        distance: '108.2 million km (0.72 AU)',
        orbit: '225 Earth days',
        temp: '462°C (average)',
        funFact: 'Venus rotates in the opposite direction of most other planets (retrograde rotation). One day on Venus is longer than a year.',
      },
    },
    {
      id: 'mars',
      name: 'Mars',
      gradient: 'from-red-700 via-orange-600 to-red-900',
      shadowColor: 'rgba(239, 68, 68, 0.4)',
      text: 'Mars is the fourth planet and the furthest terrestrial planet from the Sun. Mars is a cold desert world.',
      details: {
        diameter: '6,779 km',
        distance: '227.9 million km (1.52 AU)',
        orbit: '687 Earth days',
        temp: '-153°C to 20°C',
        funFact: 'Mars is home to Olympus Mons, the largest volcano in the Solar System, which is three times the height of Mt. Everest.',
      },
    },
  ];

  return (
    <section id="rocky-planets" className="py-20 bg-[#020B18] relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
            ASTRONOMY DISCOVERY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
            Solar System Rocky Planets
          </h2>
          <p className="text-[#B0BEC5] font-inter text-sm sm:text-base max-w-xl mx-auto">
            The solar system has four rocky planets: Mercury, Venus, Earth, and Mars.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent rounded-full mx-auto mt-2"></div>
        </div>

        {/* Planet Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planets.map((planet) => (
            <motion.div
              key={planet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center justify-between group relative overflow-hidden"
            >
              {/* CSS Planet Sphere - slowly rotating */}
              <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
                {/* Back glow shadow */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundColor: planet.id === 'mercury' ? '#9ca3af' : planet.id === 'venus' ? '#f59e0b' : '#ef4444',
                    opacity: 0.25,
                  }}
                ></div>
                
                {/* Actual CSS sphere with 3D gradient look */}
                <div
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${planet.gradient} relative overflow-hidden shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.8)] animate-spin-slow`}
                  style={{
                    boxShadow: `0 0 30px ${planet.shadowColor}, inset -15px -15px 40px rgba(0, 0, 0, 0.9)`,
                  }}
                >
                  {/* Planet craters/textures (pure CSS details) */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
                  <div className="absolute top-4 left-6 w-3 h-3 bg-black/30 rounded-full"></div>
                  <div className="absolute top-10 left-12 w-6 h-4 bg-black/20 rounded-full rotate-12"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-black/40 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-5 h-3 bg-black/30 rounded-full -rotate-12"></div>
                </div>

                {/* Subtle atmosphere reflection overlay */}
                <div className="absolute w-28 h-28 rounded-full pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-10"></div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4 mb-6">
                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider group-hover:text-[#00B4FF] transition-colors">
                  {planet.name}
                </h3>
                <p className="text-[#B0BEC5] font-inter text-sm leading-relaxed min-h-[72px]">
                  {planet.text}
                </p>
              </div>

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedPlanet(planet)}
                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B4FF]/40 text-white rounded-full text-xs font-bold font-orbitron tracking-wider uppercase transition-all duration-300 shadow-md group-hover:scale-[1.02]"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Planet details drawer/modal */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#040D1F] border border-[#00B4FF]/30 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,180,255,0.2)] overflow-hidden"
            >
              {/* Star details background header decoration */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${selectedPlanet.gradient}`}></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPlanet(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white text-xl transition-colors z-20"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 pr-8">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${selectedPlanet.gradient}`}
                    style={{ boxShadow: `0 0 15px ${selectedPlanet.shadowColor}` }}
                  ></div>
                  <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white tracking-wider">
                    {selectedPlanet.name}
                  </h3>
                </div>

                <p className="text-gray-300 font-inter text-sm sm:text-base leading-relaxed border-b border-white/10 pb-4">
                  {selectedPlanet.text}
                </p>

                {/* Details Table */}
                <div className="space-y-3 font-inter text-sm sm:text-base">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Diameter:</span>
                    <span className="text-white font-medium">{selectedPlanet.details.diameter}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Distance from Sun:</span>
                    <span className="text-white font-medium">{selectedPlanet.details.distance}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Orbital Period:</span>
                    <span className="text-white font-medium">{selectedPlanet.details.orbit}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Surface Temp:</span>
                    <span className="text-white font-medium">{selectedPlanet.details.temp}</span>
                  </div>
                  <div className="flex flex-col py-1.5 space-y-1">
                    <span className="text-[#FFB830] font-bold text-xs tracking-wider uppercase font-orbitron">Fun Fact:</span>
                    <p className="text-gray-300 leading-relaxed text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                      {selectedPlanet.details.funFact}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPlanet(null)}
                    className="w-full glow-button-blue py-3 rounded-full text-xs font-bold font-orbitron tracking-wider uppercase"
                  >
                    Back to Solar System
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SolarSystem;
