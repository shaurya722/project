import React from 'react';
import { Lock, Zap, BarChart3, Globe, Clock, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Lock,
      title: t('features.security.title'),
      description: t('features.security.description'),
      stats: t('features.security.stats')
    },
    {
      icon: Zap,
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      stats: t('features.performance.stats')
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      stats: t('features.analytics.stats')
    },
    {
      icon: Globe,
      title: t('features.scalability.title'),
      description: t('features.scalability.description'),
      stats: t('features.scalability.stats')
    },
    {
      icon: Clock,
      title: t('features.realtime.title'),
      description: t('features.realtime.description'),
      stats: t('features.realtime.stats')
    },
    {
      icon: Layers,
      title: t('features.microservices.title'),
      description: t('features.microservices.description'),
      stats: t('features.microservices.stats')
    }
  ];

  return (
    <section id="features" className={`py-16 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
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
            {t('features.cta.title')}
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('features.cta.description')}
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            {t('features.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;