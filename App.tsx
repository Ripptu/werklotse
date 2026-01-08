import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import PainPoints from './components/PainPoints';
import BentoGrid from './components/BentoGrid';
import WhyUs from './components/WhyUs';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-white text-charcoal font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <PainPoints />
        <BentoGrid />
        <WhyUs />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;