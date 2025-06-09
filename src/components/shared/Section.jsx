import React from 'react';
import '../../styles/shared/Section.scss';

const Section = ({ 
  children, 
  className = '', 
  id,
  title,
  background = 'white'
}) => {
  return (
    <section 
      id={id} 
      className={`section ${className}`}
      style={{ backgroundColor: `var(--${background}-bg)` }}
    >
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section; 