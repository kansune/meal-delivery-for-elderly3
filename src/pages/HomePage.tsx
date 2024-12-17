import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedProviders from '../components/FeaturedProviders';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <HowItWorks />
        <FeaturedProviders />
        <Benefits />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;