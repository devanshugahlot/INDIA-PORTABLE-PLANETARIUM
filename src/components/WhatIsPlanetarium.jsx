import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const WhatIsPlanetarium = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-[#020B18] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
                DISCOVER
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
                What is a Planetarium?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00B4FF] to-transparent rounded-full mt-2"></div>
            </div>

            <div className="space-y-4 text-[#B0BEC5] font-inter leading-relaxed text-sm sm:text-base">
              <p>
                A planetarium is a facility that provides a simulated representation of the night sky and celestial objects. It typically consists of a large dome-shaped projection screen onto which images of stars, planets, and other astronomical phenomena are displayed using specialized projectors and software.
              </p>
              <p>
                The India Portable Planetarium is a unique concept introduced by the Nehru Planetarium in Mumbai, India. It is a portable planetarium designed to offer an immersive and interactive experience for visitors. The dome-shaped structure is inflatable and can be easily transported and set up in various locations.
              </p>
              <p>
                Inside the India Portable Planetarium, visitors are surrounded by high-resolution projections of the night sky and other celestial wonders. These projections are created using specialized digital planetarium software and high-quality projectors, which project onto a curved fabric or projection screen covering the dome's interior walls.
              </p>
              <p>
                One of the advantages of the India Portable Planetarium is its portability. It can be easily transported and set up in a variety of locations, allowing it to reach a wider audience than a traditional planetarium. Additionally, its immersive and interactive nature can help to engage and inspire visitors of all ages to learn more about astronomy and space exploration.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center space-x-2 text-[#00B4FF] hover:text-[#00b4ff]/80 font-bold tracking-wide uppercase transition-colors"
                id="watch-video-link"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 hover:bg-[#00B4FF]/20 transition-all duration-300">
                  <FaPlay className="text-xs" />
                </span>
                <span>See this video to know more</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Image with Glass Shadow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group p-3 glass-card rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B18] via-transparent to-transparent opacity-40 z-10"></div>
              <img
                src="https://www.cosmosdome.in/wp-content/uploads/2023/07/NewDome1900.jpg"
                alt="Cosmos Dome Planetarium Inflatable Dome"
                className="rounded-2xl w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500 z-0"
              />
              {/* Image Glow Overlay */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-[#00B4FF]/30 transition-all duration-500 rounded-3xl pointer-events-none"></div>
            </div>
            {/* Background Decorative Nebula Glow */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#7B2FBE]/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#00B4FF]/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#00B4FF] text-3xl focus:outline-none transition-colors"
              aria-label="Close video modal"
            >
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-[#040D1F] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <iframe
                title="Cosmos Dome Planetarium Video"
                className="w-full h-full"
                src="https://www.youtube.com/embed/zDD_Pv8Adqg?si=Wz3YCBbnwy5Ygppz"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatIsPlanetarium;
