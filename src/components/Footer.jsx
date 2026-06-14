const Footer = () => {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
    <footer className="bg-[#010810] pt-16 pb-8 border-t border-white/5 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, '#home')}
              className="inline-block"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/media/india-portable-planetarium-logo.jpeg"
                  alt="India Portable Planetarium logo"
                  className="h-12 w-12 object-cover bg-white/5 rounded-lg border border-white/10"
                />
                <div className="flex flex-col">
                  <span className="font-orbitron font-extrabold text-base tracking-wider text-white">
                    INDIA PORTABLE
                  </span>
                  <span className="font-orbitron text-[8px] tracking-[3px] text-[#FFB830] font-semibold">
                    PLANETARIUM
                  </span>
                </div>
              </div>
            </a>

            <p className="text-[#B0BEC5] font-inter text-sm leading-relaxed max-w-sm">
              Bringing the secrets of the universe to schools, colleges, and local
              communities across India. Inspired by the educational vision of
              Dr. APJ Abdul Kalam.
            </p>

            <div className="text-xs font-orbitron tracking-wider text-[#FFB830]/80 uppercase">
              Inspired by Dr. APJ Abdul Kalam's Vision of Astronomy
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-orbitron font-bold text-sm tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-inter text-sm">
              <li>
                <a href="#home" onClick={(e) => handleScrollToSection(e, '#home')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollToSection(e, '#about')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rocky-planets" onClick={(e) => handleScrollToSection(e, '#rocky-planets')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => handleScrollToSection(e, '#events')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-orbitron font-bold text-sm tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 font-inter text-sm">
              <li>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Request A Quote
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleScrollToSection(e, '#testimonials')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#bio" onClick={(e) => handleScrollToSection(e, '#bio')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Bio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollToSection(e, '#contact')} className="text-[#B0BEC5] hover:text-[#00B4FF] transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-orbitron font-bold text-sm tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3 font-inter text-sm text-[#B0BEC5]">
              <li className="flex items-start space-x-2">
                <span className="text-[#FFB830] mt-0.5">Address:</span>
                <span>Shadev housings socity pandav nagri flat no 06 nashik (MH 422009)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#00B4FF]">Phone:</span>
                <a href="tel:+918317228463" className="hover:text-[#00B4FF] transition-colors">
                  +918317228463
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#7B2FBE]">Email:</span>
                <a href="mailto:Indiaportableplanetarium@gmail.com" className="hover:text-[#00B4FF] transition-colors break-all">
                  Indiaportableplanetarium@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="glow-divider my-8"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-inter text-[#B0BEC5] space-y-4 sm:space-y-0 text-center sm:text-left">
          <p>Copyright 2023 India Portable Planetarium. All Rights Reserved.</p>
          <p>
            Designed and Developed by{' '}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B4FF] hover:underline transition-all"
            >
              Devanshu
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
