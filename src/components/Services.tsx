import React from 'react';
import { Shield, Users, AlertTriangle, Filter, Search, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t('services.auth.title'),
      description: t('services.auth.description'),
      features: [t('services.auth.feature1'), t('services.auth.feature2'), t('services.auth.feature3'), t('services.auth.feature4')]
    },
    {
      icon: Users,
      title: t('services.user.title'),
      description: t('services.user.description'),
      features: [t('services.user.feature1'), t('services.user.feature2'), t('services.user.feature3'), t('services.user.feature4')]
    },
    {
      icon: AlertTriangle,
      title: t('services.redTeam.title'),
      description: t('services.redTeam.description'),
      features: [t('services.redTeam.feature1'), t('services.redTeam.feature2'), t('services.redTeam.feature3'), t('services.redTeam.feature4')]
    },
    {
      icon: Filter,
      title: t('services.blueTeam.title'),
      description: t('services.blueTeam.description'),
      features: [t('services.blueTeam.feature1'), t('services.blueTeam.feature2'), t('services.blueTeam.feature3'), t('services.blueTeam.feature4')]
    },
    {
      icon: Search,
      title: t('services.agent.title'),
      description: t('services.agent.description'),
      features: [t('services.agent.feature1'), t('services.agent.feature2'), t('services.agent.feature3'), t('services.agent.feature4')]
    },
    {
      icon: Network,
      title: t('services.gateway.title'),
      description: t('services.gateway.description'),
      features: [t('services.gateway.feature1'), t('services.gateway.feature2'), t('services.gateway.feature3'), t('services.gateway.feature4')]
    }
  ];

  return (
    <section id="services" className={`py-16 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.description')}
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
                  <li key={featureIndex} className={`flex items-center text-sm text-gray-700 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-blue-600 rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
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