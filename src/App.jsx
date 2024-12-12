import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;