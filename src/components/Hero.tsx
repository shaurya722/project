import React from 'react';
import { ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Enterprise LLM Security Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Test & Secure Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> LLM Models</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive testing platform for Large Language Models with advanced security scanning, 
              prompt sanitization, and vulnerability assessment in a controlled environment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Advanced red-team security testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Real-time prompt sanitization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Comprehensive performance analysis</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Testing Now
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                View Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <div>
                    <p className="font-semibold text-red-800">Red Team Test</p>
                    <p className="text-red-600 text-sm">Vulnerability detected</p>
                  </div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div>
                    <p className="font-semibold text-blue-800">Blue Team Scan</p>
                    <p className="text-blue-600 text-sm">Sanitizing prompts...</p>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div>
                    <p className="font-semibold text-green-800">Agent Analysis</p>
                    <p className="text-green-600 text-sm">Performance: 94.2%</p>
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