import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', { name, email });
    setName('');
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2>Stay updated with KC Overseas</h2>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 