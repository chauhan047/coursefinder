import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, BookOpen } from 'lucide-react';
import './Steps.scss';

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: 1,
      icon: <MessageCircle size={32} />,
      title: "Counselling",
      description: "Plan your academic and career Goals"
    },
    {
      number: 2,
      icon: <BookOpen size={32} />,
      title: "Test Preparation",
      description: "Prepare for Standardized Tests"
    },
    // More steps would be added here
  ];
  
  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };
  
  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <section className="steps-section section">
      <div className="container">
        <h2 className="section-title">7 Easy Steps to Land in your Dream University</h2>
        
        <div className="steps-container">
          <div className="step-number">{steps[activeStep].number}</div>
          
          <div className="step-card">
            <div className="step-icon">{steps[activeStep].icon}</div>
            <h3>{steps[activeStep].title}</h3>
            <p>{steps[activeStep].description}</p>
          </div>
        </div>
        
        <div className="steps-navigation">
          <button className="nav-btn prev" onClick={prevStep}>
            <ArrowLeft size={20} />
            <span>Previous Step</span>
          </button>
          
          <div className="steps-dots">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`step-dot ${index === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              ></div>
            ))}
          </div>
          
          <button className="nav-btn next" onClick={nextStep}>
            <span>Next Step</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Steps; 