import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'School Events', href: '#events' },
    { name: 'Sales', href: '#sales' },
    { name: 'Bio', href: '#bio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#020B18]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,180,255,0.1)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 group-hover:border-[#00B4FF]/50 transition-all duration-300">
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🪐</span>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00B4FF] group-hover:from-white group-hover:to-[#00B4FF] transition-all duration-300">
                INDIA PORTABLE
              </span>
              <span className="font-orbitron text-[9px] sm:text-[10px] tracking-[4px] text-[#FFB830] font-semibold">
                PLANETARIUM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#00B4FF] hover:scale-105 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="glow-button-blue px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase"
              id="desktop-cta-btn"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#040D1F]/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-[#00B4FF] hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="glow-button-blue block w-full text-center py-3 rounded-full text-base font-semibold tracking-wider uppercase shadow-lg"
                  id="mobile-cta-btn"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
