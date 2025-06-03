import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobalAmbitions from './components/GlobalAmbitions';
import Steps from './components/Steps';
import WebinarsEvents from './components/WebinarsEvents';
import Testimonials from './components/Testimonials';
import Updates from './components/Updates';
import Footer from './components/Footer';

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