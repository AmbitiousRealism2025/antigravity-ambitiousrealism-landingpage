import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VibeSection from './components/VibeSection';
import TerminalSection from './components/TerminalSection';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <VibeSection />
      <TerminalSection />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
