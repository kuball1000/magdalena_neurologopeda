import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Offer from './components/Sections/Offer';
import Certificates from './components/Sections/Certificates';
import Reviews from './components/Sections/Reviews';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import WhatsAppFAB from './components/Layout/WhatsAppFAB';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-beige text-brand-dark selection:bg-brand-sage selection:text-white">
      <Navbar />
      
      <main>
        <Element name="hero">
          <Hero />
        </Element>
        
        <Element name="about">
          <About />
        </Element>
        
        <Element name="offer">
          <Offer />
        </Element>
        
        <Element name="certificates">
          <Certificates />
        </Element>
        
        <Element name="reviews">
          <Reviews />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
