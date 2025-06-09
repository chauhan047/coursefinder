import React from 'react';
import { BookOpen, FileText, GraduationCap, Award } from 'lucide-react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';
import '../../styles/Services.scss';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Test Preparation & Coaching",
    },
    {
      icon: FileText,
      title: "Application Assistance",
    },
    {
      icon: GraduationCap,
      title: "Courses, Coaching & University Selection",
    },
    {
      icon: Award,
      title: "Scholarships",
    },
  ];

  return (
    <Section id="services" title="Services we provide" className="services">
      <div className="services-grid">
        {services.map((service, index) => (
          <Card key={index} className="service-card">
            <div className="service-icon">
              <service.icon size={24} />
            </div>
            <h3 className="service-title">{service.title}</h3>
          </Card>
        ))}
      </div>
      
      <div className="explore-more">
        <Button 
          variant="primary"
          size="large"
          icon={BookOpen}
          iconPosition="left"
        >
          Enquire Now
        </Button>
      </div>
    </Section>
  );
};

export default Services; 