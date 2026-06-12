import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Helper component for count-up animation
const CounterCard = ({ targetValue, suffix, label }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const duration = 2000; // 2 seconds animation
          const end = targetValue;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out quad formula
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * (end - start) + start);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [targetValue, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center justify-center relative group min-h-[160px]"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#FFB830]/40 to-transparent rounded-t-3xl"></div>
      
      <span className="font-orbitron font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#FFB830] tracking-tight group-hover:scale-105 transition-transform duration-300">
        {count.toLocaleString()}{suffix}
      </span>
      
      <span className="mt-3 text-xs sm:text-sm font-semibold font-inter text-white tracking-wide leading-snug">
        {label}
      </span>
      
      {/* Subtle blue accent glow on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#00B4FF]/20 rounded-3xl pointer-events-none transition-all duration-300"></div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { targetValue: 500, suffix: '+', label: 'No. of Schools' },
    { targetValue: 20, suffix: '+', label: 'States' },
    { targetValue: 100, suffix: '+', label: 'Event Conducted Cities (Across India)' },
    { targetValue: 10, suffix: '+', label: 'Year of Experience' },
    { targetValue: 50000, suffix: '+', label: 'Students' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#020B18] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left/Heading Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2 text-left">
              <span className="text-sm font-semibold tracking-[3px] text-[#FFB830] font-orbitron uppercase block">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
                India Portable Planetarium For Every Student
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00B4FF] to-transparent rounded-full mt-2"></div>
            </div>

            <p className="text-[#B0BEC5] font-inter text-base leading-relaxed text-left">
              A team of Planetariums, Astronomers and Educators have designed the shows keeping in mind the acumen of students. The shows are education embedded with entertainment. More than thousand students from various schools across India have participated in these shows.
            </p>
          </motion.div>

          {/* Right/Background decorative illustration */}
          <div className="lg:col-span-6 hidden lg:flex justify-end relative">
            <div className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center animate-spin-slow">
              <div className="w-64 h-64 rounded-full border border-[#00B4FF]/10 flex items-center justify-center [animation-direction:reverse]">
                <div className="w-48 h-48 rounded-full border border-[#FFB830]/5 flex items-center justify-center">
                  <span className="text-white/20 font-orbitron text-[9px] tracking-[6px] uppercase rotate-12">COSMOS</span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#7B2FBE]/10 rounded-full blur-[60px] pointer-events-none"></div>
          </div>

        </div>

        {/* Counters Grid: 5 columns on desktop, 2x3 on mobile as requested */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`${
                idx === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <CounterCard
                targetValue={stat.targetValue}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
