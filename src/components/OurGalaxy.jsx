import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const OurGalaxy = () => {
  const items = [
    'Space Missions and Discoveries',
    'Telescopes and Space Exploration',
    'Exoplanets and the Search for Life',
  ];

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
    <section id="galaxy" className="py-24 bg-[#040D1F] relative overflow-hidden z-10">
      {/* Galaxy CSS Overlay styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(123,47,190,0.18)_0%,rgba(0,180,255,0.08)_50%,transparent_100%)] pointer-events-none"></div>
      
      {/* Glowing horizontal divider above section */}
      <div className="glow-divider absolute top-0 left-0 w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual graphic */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer spinning galaxy rings */}
              <div className="absolute inset-0 border border-[#7B2FBE]/20 rounded-full animate-spin-slow scale-110"></div>
              <div className="absolute inset-4 border border-[#00B4FF]/10 rounded-full [animation-direction:reverse] [animation-duration:15s] scale-100"></div>
              
              {/* Center Galaxy Circle */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#7B2FBE]/20 via-[#00B4FF]/10 to-[#FFB830]/10 flex items-center justify-center p-8 backdrop-blur-md border border-white/5 shadow-[0_0_40px_rgba(0,180,255,0.1)]">
                <div className="text-center space-y-2">
                  <span className="text-5xl">🌌</span>
                  <p className="font-orbitron text-[10px] tracking-[4px] text-[#FFB830] uppercase font-bold">MILKY WAY</p>
                  <p className="text-white/40 text-xs font-inter font-light">100,000 Light Years across</p>
                </div>
              </div>
            </div>
            {/* Background blur overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00B4FF]/10 rounded-full blur-[80px] pointer-events-none"></div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
                FEATURED RESEARCH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
                Our Galaxy
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#7B2FBE] to-transparent rounded-full mt-2"></div>
            </div>

            <p className="text-[#B0BEC5] font-inter text-base sm:text-lg leading-relaxed font-light">
              The India Portable Planetarium is an immersive and portable educational and entertainment experience. Schools, colleges, museums, and small planetariums love its high-resolution projections and interactive features. Astronomy, stargazing parties, and immersive films. Space adventures await!
            </p>

            {/* List items with glowing arrow icons */}
            <div className="space-y-3 pt-2">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FFB830]/40 transition-colors">
                    <FaArrowRight className="text-[#FFB830] text-[10px] transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base tracking-wide font-inter group-hover:text-[#00B4FF] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="glow-button-blue inline-block px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg"
                id="galaxy-cta-book"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurGalaxy;
