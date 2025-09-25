import React from 'react';
import { Shield, Users, AlertTriangle, Filter, Search, Network } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Auth Service',
      description: 'Secure authentication and user registration with OAuth integration, JWT tokens, and multi-factor authentication.',
      features: ['OAuth Integration', 'MFA Support', 'JWT Tokens', 'Password Reset']
    },
    {
      icon: Users,
      title: 'User Service',
      description: 'Comprehensive user profile management with RBAC and GDPR compliance for enterprise security.',
      features: ['Profile Management', 'RBAC Controls', 'GDPR Compliance', 'Company Data']
    },
    {
      icon: AlertTriangle,
      title: 'Red Team Service',
      description: 'Advanced negative testing to identify vulnerabilities and ensure your LLM handles malicious queries safely.',
      features: ['Negative Testing', 'Vulnerability Scanning', 'Bias Detection', 'Security Reports']
    },
    {
      icon: Filter,
      title: 'Blue Team Service',
      description: 'Real-time prompt sanitization with advanced filtering to prevent harmful content from reaching your LLM.',
      features: ['Prompt Sanitization', 'Content Filtering', 'Real-time Processing', 'Traceability']
    },
    {
      icon: Search,
      title: 'Agent Service',
      description: 'Comprehensive LLM scanning and performance analysis with detailed reporting and improvement suggestions.',
      features: ['Performance Analysis', 'Capability Assessment', 'Response Time Metrics', 'Detailed Reports']
    },
    {
      icon: Network,
      title: 'API Gateway',
      description: 'Centralized entry point with intelligent routing, rate limiting, and comprehensive monitoring capabilities.',
      features: ['Request Routing', 'Rate Limiting', 'Service Orchestration', 'Monitoring']
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive LLM Testing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our microservices architecture provides complete coverage for LLM security, 
            performance, and reliability testing in enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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

export default Services;