import { motion } from 'framer-motion';
import { FaGlobe, FaPalette, FaBookOpen, FaHandshake } from 'react-icons/fa';

const GrowWithUs = () => {
  const cards = [
    {
      id: 'planet-area',
      icon: <FaGlobe className="text-2xl text-[#FFB830]" />,
      title: 'Planet Area',
      text: 'Experience the wonders of space with our state-of-the-art portable planetarium. Get ready for an immersive journey through the universe. Join us today!',
    },
    {
      id: 'creative',
      icon: <FaPalette className="text-2xl text-[#FFB830]" />,
      title: 'Creative',
      text: 'Unleash your creativity with our portable planetarium. Explore the stars, galaxies, and beyond in a truly immersive experience. Join us now!',
    },
    {
      id: 'education',
      icon: <FaBookOpen className="text-2xl text-[#FFB830]" />,
      title: 'Education',
      text: 'Ignite curiosity and expand knowledge with our educational portable planetarium. Engage students in a captivating exploration of the universe. Join us today!',
    },
    {
      id: 'meeting',
      icon: <FaHandshake className="text-2xl text-[#FFB830]" />,
      title: 'Meeting',
      text: 'Elevate your meetings to new heights with our portable planetarium. Combine business with awe-inspiring stargazing experiences. Book your event now!',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="capabilities" className="py-20 bg-[#020B18] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white">
            Grow With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent rounded-full mx-auto mt-2"></div>
        </div>

        {/* 2x2 Grid (Stacks on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6 relative group"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB830]/10 group-hover:border-[#FFB830]/30 transition-all duration-300 shadow-md">
                {card.icon}
              </div>

              {/* Card Text */}
              <div className="space-y-3">
                <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#00B4FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#B0BEC5] font-inter text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Glowing Corner Effect */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00B4FF]/5 rounded-bl-3xl blur-md group-hover:bg-[#00B4FF]/10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default GrowWithUs;
