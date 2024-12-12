import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of companies already leveraging our AI solutions to drive growth and innovation.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default CTA;