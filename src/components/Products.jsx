import React from 'react';
import { Zap, Brain, Bot, Sparkles } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "AI Assistant Pro",
      description: "Your personal AI assistant for everyday tasks. Powered by advanced language models.",
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      features: ["24/7 Availability", "Multi-language Support", "Task Automation"]
    },
    {
      title: "Neural Analytics",
      description: "Transform your data into actionable insights with our AI-powered analytics platform.",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      features: ["Real-time Analysis", "Predictive Modeling", "Custom Dashboards"]
    },
    {
      title: "SmartBot Creator",
      description: "Build and deploy custom AI chatbots for your business in minutes.",
      icon: <Sparkles className="w-8 h-8 text-green-500" />,
      features: ["No-code Platform", "Custom Training", "Easy Integration"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our AI Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;