import React from 'react';
import image1 from '../assets/imageaic.svg';
import image2 from '../assets/imagebc.svg';
import './Updates.scss';

const Updates = () => {
  return (
    <section className="updates section">
      <div className="container">
        <h2 className="section-title">Latest KC Updates</h2>
        
        <div className="updates-grid">
          <div className="update-card hiring">
            <h3>We're Hiring!</h3>
            <p>
              KC continues recruitment for its offices across India and Asia
              even during the unprecedented times of Covid!
            </p>
            <button className="btn btn-outline">Apply Now</button>
          </div>
          
          <div className="certifications">
            <div className="cert-card">
              <div className="cert-logo">
                <img src={image1} alt="American International" />
              </div>
              <div className="cert-text">
                <h4>Certified Agents</h4>
                <p>October 2019 - 2028</p>
              </div>
            </div>
            
            <div className="cert-card">
              <div className="cert-logo">
                <img src={image2} alt="British Council" />
              </div>
              <div className="cert-text">
                <h4>Advanced Agent</h4>
                <p>August 2016 - 2029</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="read-more">
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Updates; 