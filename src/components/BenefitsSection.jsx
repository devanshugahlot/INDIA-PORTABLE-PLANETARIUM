import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Customized Shows',
      desc: 'Age-appropriate cosmic visual programs customized from KG to Class 12.',
    },
    {
      title: 'Follow-up Quiz',
      desc: 'Interactive evaluation sessions immediately after the show to solidify concepts.',
    },
    {
      title: 'Accessibility / Flexibility',
      desc: 'Can be set up inside any school auditorium, gymnasium, or open space in hours.',
    },
    {
      title: 'Cost-effective Solution',
      desc: 'Eradicates logistics, transport, and insurance costs of fixed planetarium field trips.',
    },
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
    <section id="benefits" className="py-20 bg-[#040D1F] relative overflow-hidden z-10">
      {/* Subtle top divider line */}
      <div className="glow-divider absolute top-0 left-0 w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
                BENEFITS OF PLANETARIUM
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
                India Portable Planetarium
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00B4FF] to-transparent rounded-full mt-2"></div>
            </div>

            <p className="text-[#B0BEC5] font-inter text-base sm:text-lg leading-relaxed font-light">
              The shows are customized class wise and designed for students from KG to class 12, keeping in mind their acumen. Each show is evaluated by a follow up quiz for students. The shows help students to relate their knowledge with real sky. Mobile Planetarium can be set-up anywhere at any time. Eradicates the cost of travelling to fixed Planetariums.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="glow-button-blue inline-block px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg"
                id="benefits-cta-contact"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Column: Benefit Points Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl flex items-start space-x-4 border border-white/5 hover:border-[#00B4FF]/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00B4FF]/10 flex items-center justify-center border border-[#00B4FF]/30 group-hover:bg-[#00B4FF]/20 group-hover:border-[#00B4FF] transition-all duration-300">
                  <FaCheckCircle className="text-[#00B4FF] text-lg" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-orbitron font-bold text-base sm:text-lg text-white tracking-wide group-hover:text-[#FFB830] transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-[#B0BEC5] font-inter text-sm sm:text-base leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Nebula background accent glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7B2FBE]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default BenefitsSection;
