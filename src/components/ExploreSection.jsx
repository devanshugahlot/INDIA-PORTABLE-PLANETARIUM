import { motion } from 'framer-motion';

const ExploreSection = () => {
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
    <section id="explore" className="py-20 bg-[#020B18] relative overflow-hidden z-10">
      {/* Decorative vertical glowing line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#00B4FF]/25 to-transparent hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Let's Explore With Us */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between space-y-6 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-md relative"
          >
            {/* Corner blue gradient overlay */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#00B4FF]/5 rounded-tl-3xl blur-md pointer-events-none"></div>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
                  SPACE EDUCATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white leading-tight">
                  Let's Explore With Us
                </h2>
                <div className="w-16 h-1 bg-[#00B4FF] rounded-full mt-2"></div>
              </div>

              <p className="text-gray-300 font-inter text-base sm:text-lg leading-relaxed font-light">
                Students will explore significant space missions and major discoveries in astronomy, including the Hubble Space Telescope, Mars rovers, and the Voyager missions. They will understand the impact of these discoveries on our understanding of the universe.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="glow-button-blue inline-block px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase text-center shadow-lg w-full sm:w-auto"
                id="explore-cta-join"
              >
                Join Us Now
              </a>
            </div>
          </motion.div>

          {/* Right Column: Immersive Tech / Portable Dome description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-md relative"
          >
            {/* Corner purple gradient overlay */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#7B2FBE]/5 rounded-br-3xl blur-md pointer-events-none"></div>

            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
                IMMERSIVE EXPERIENCE
              </span>
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white tracking-wide">
                Interactive Space Voyages
              </h3>
              <div className="w-16 h-0.5 bg-[#7B2FBE] rounded-full"></div>
            </div>

            <p className="text-gray-300 font-inter text-sm sm:text-base leading-relaxed font-light">
              The India Portable Planetarium is a portable planetarium that takes visitors on an interactive space voyage. Its huge inflated dome-shaped structure makes it a flexible and portable instructional and entertaining tool. The India Portable Planetarium is important in schools, museums, and other educational contexts. It immerses students in astronomy and related subjects. The dome's powerful projections take pupils to distant planets, moons, and stars to experience the universe's wonders. The planetarium's interactivity helps pupils learn and appreciate complex astronomical ideas.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
