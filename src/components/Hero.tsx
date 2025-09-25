import React from 'react';
import { ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Zap className="w-4 h-4 mr-2" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> {t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{t('hero.feature1')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{t('hero.feature2')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{t('hero.feature3')}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className={`group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                {t('hero.startTesting')}
                <ArrowRight className={`w-5 h-5 inline-block group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                {t('hero.viewDemo')}
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <div>
                    <p className="font-semibold text-red-800">{t('hero.redTeamTest')}</p>
                    <p className="text-red-600 text-sm">{t('hero.vulnerabilityDetected')}</p>
                  </div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div>
                    <p className="font-semibold text-blue-800">{t('hero.blueTeamScan')}</p>
                    <p className="text-blue-600 text-sm">{t('hero.sanitizingPrompts')}</p>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div>
                    <p className="font-semibold text-green-800">{t('hero.agentAnalysis')}</p>
                    <p className="text-green-600 text-sm">{t('hero.performance')}</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;