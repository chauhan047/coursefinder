import React from 'react';
import '../../styles/shared/Card.scss';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = '24px'
}) => {
  return (
    <div 
      className={`card ${hover ? 'hover' : ''} ${className}`}
      style={{ padding }}
    >
      {children}
    </div>
  );
};

export default Card; 