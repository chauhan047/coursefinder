import React from 'react';
import { BookOpen, FileText, GraduationCap, Award } from 'lucide-react';
import './Services.scss';

const Services = () => {
  const services = [
    {
      icon: <BookOpen size={24} />,
      title: "Test Preparation & Coaching",
    },
    {
      icon: <FileText size={24} />,
      title: "Application Assistance",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Courses, Coaching & University Selection",
    },
    {
      icon: <Award size={24} />,
      title: "Scholarships",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Services we provide</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="explore-more">
          <button className="btn btn-primary">Enquire Now</button>
        </div>
      </div>
    </section>
  );
};

export default Services; 