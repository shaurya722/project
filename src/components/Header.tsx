import React, { useState } from 'react';
import { Menu, X, Shield, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LLMSecure</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('architecture')} className="text-gray-700 hover:text-blue-600 transition-colors">Architecture</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
          </nav>

          <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4">
            <div className="px-4 space-y-4">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => scrollToSection('architecture')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">Architecture</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;