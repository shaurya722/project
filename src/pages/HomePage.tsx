import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Architecture from '../components/Architecture';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Architecture />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;