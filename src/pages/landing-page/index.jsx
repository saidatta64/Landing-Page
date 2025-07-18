import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Hero from './components/HeroSection';
import Footer from './components/Footer';
import BenefitsSection from './components/BenefitsSection';
import Features from './components/Feature';

const LandingPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(
      135deg,
      #F8F4F0 0%,
      #DDD0C8 30%,
      #B0A89F 65%,
      #F9FAFB 100%
    )`,
        }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#989fac] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7c7f85] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />
          {/* Pricing Section */}
          <Features />
          <BenefitsSection/>
          <Footer/>
        </main>

      </div>
    </>
  );
};

export default LandingPage;