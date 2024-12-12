import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Next-Generation AI Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Empower your business with cutting-edge artificial intelligence tools designed for the modern workplace.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
          Get Started
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Hero;