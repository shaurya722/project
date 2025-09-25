import React from 'react';
import { Lock, Zap, BarChart3, Globe, Clock, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, multi-factor authentication, and role-based access control for maximum security.',
      stats: '99.9% Security Rating'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-second response times with the ability to handle 10,000+ simultaneous testing requests.',
      stats: '<1s Response Time'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting with detailed insights into LLM performance, vulnerabilities, and improvements.',
      stats: '50+ Metrics Tracked'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Horizontally scalable architecture deployed across multiple regions for optimal performance.',
      stats: '99.99% Uptime'
    },
    {
      icon: Clock,
      title: 'Real-time Testing',
      description: 'Continuous monitoring and real-time testing capabilities with instant vulnerability detection.',
      stats: '24/7 Monitoring'
    },
    {
      icon: Layers,
      title: 'Microservices Architecture',
      description: 'Modular, independently scalable services with robust communication and failover mechanisms.',
      stats: '6 Core Services'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LLMSecure?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for enterprise requirements with uncompromising security, performance, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-blue-600 font-semibold text-sm">{feature.stats}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Secure Your LLM Infrastructure?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join leading enterprises who trust LLMSecure to test and secure their AI models.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;