import { motion } from 'framer-motion';
import { FaUserAstronaut } from 'react-icons/fa';

const AboutPlanetarium = () => {
  return (
    <section id="bio" className="py-20 bg-[#040D1F] relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020B18] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6 lg:border-r lg:border-white/10 lg:pr-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00B4FF] via-[#7B2FBE] to-[#FFB830] opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-300"></div>

              <img
                src="/media/india-portable-planetarium-logo.jpeg"
                alt="India Portable Planetarium brand emblem"
                className="relative rounded-full w-56 h-56 object-cover border-4 border-[#00B4FF] mx-auto z-10 shadow-2xl transition-transform duration-300 group-hover:scale-105"
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
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
                India Portable Planetarium brings an immersive astronomy experience directly to schools, colleges, organisations, and community events. The portable inflatable dome can be transported easily and installed in a variety of indoor or outdoor spaces.
              </p>
              <p>
                Inside the dome, high-resolution visuals of the night sky, planets, moons, galaxies, and space missions are projected across the curved interior. The shows are designed for education with entertainment, helping students understand astronomy through a memorable 360 degree experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00B4FF]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
    </section>
  );
};

export default AboutPlanetarium;
