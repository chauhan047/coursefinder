import React from 'react';
import { Check } from 'lucide-react';
import '../../styles/GlobalAmbitions.scss';

const GlobalAmbitions = () => {
  const features = [
    "Virtual & In-Person Coaching and Counselling",
    "Comprehensive Assistance for Applications, Admissions & Visas",
    "High-Value Scholarships and Study Loans"
  ];

  return (
    <section id="counseling" className="global-ambitions section">
      <div className="container">
        <div className="global-content">
          <div className="global-image">
            <img 
              src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Education counseling session" 
            />
          </div>
          
          <div className="global-text">
            <h2>Realize your global ambitions with us</h2>
            <p>
              Within a span of few years, KC Overseas Education has emerged as a leading Global Education Consultant in India. Our mission is to blend your academic needs with your career goals.
            </p>
            
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="check-icon">
                    <Check size={16} />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAmbitions; 