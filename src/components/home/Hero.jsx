import React from 'react';
import '../../styles/Hero.scss';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="stars">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
          </div>
          
          <h1>KC Overseas Education<br />Pune</h1>
          
          <p>
            We shape your career aspirations, with a strong focus on partnerships with the best that
            our global connections have to offer. Thousands of our students are pursuing their programs
            and aspirations in various universities globally and we welcome you to pursue yours!
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">Enquire Now</button>
            <button className="btn btn-outline">
              <MapPin size={16} className="icon" />
              Branch Address
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 