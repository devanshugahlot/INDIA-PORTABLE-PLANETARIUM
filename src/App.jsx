import StarfieldBackground from './components/StarfieldBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsPlanetarium from './components/WhatIsPlanetarium';
import AboutPlanetarium from './components/AboutPlanetarium';
import GrowWithUs from './components/GrowWithUs';
import NewDawnSection from './components/NewDawnSection';
import StatsSection from './components/StatsSection';
import BenefitsSection from './components/BenefitsSection';
import MediaGallery from './components/MediaGallery';
import SolarSystem from './components/SolarSystem';
import OurGalaxy from './components/OurGalaxy';
import ExploreSection from './components/ExploreSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen bg-[#020B18] text-white">
      {/* Global animated twinkling starfield background */}
      <StarfieldBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Content Layout */}
      <main className="relative">
        {/* 1. Hero Landing */}
        <Hero />

        {/* 2. Discover / What is a Planetarium */}
        <WhatIsPlanetarium />

        {/* 3. Nehru Planetarium & APJ Kalam Inspiration */}
        <AboutPlanetarium />

        {/* 4. Grow With Us (Features) */}
        <GrowWithUs />

        {/* 5. A New Dawn of Discovery */}
        <NewDawnSection />

        {/* 6. Stats Section */}
        <StatsSection />

        {/* 7. Benefits of Planetarium */}
        <BenefitsSection />

        {/* 8. School events media gallery */}
        <MediaGallery />

        {/* 9. Rocky Planets (Solar System) */}
        <SolarSystem />

        {/* 10. Galaxy featured research */}
        <OurGalaxy />

        {/* 11. Let's Explore With Us */}
        <ExploreSection />

        {/* 12. Get in Touch Form */}
        <ContactSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
