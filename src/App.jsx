import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import GlobalAmbitions from './components/home/GlobalAmbitions';
import Steps from './components/home/Steps';
import WebinarsEvents from './components/home/WebinarsEvents';
import Testimonials from './components/home/Testimonials';
import Updates from './components/home/Updates';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <GlobalAmbitions />
      <Steps />
      <WebinarsEvents />
      <Testimonials />
      <Updates />
      <Footer />
    </div>
  );
}

export default App; 