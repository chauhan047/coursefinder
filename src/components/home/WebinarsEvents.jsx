import React from 'react';
import { Calendar } from 'lucide-react';
import '../../styles/WebinarsEvents.scss';

const WebinarsEvents = () => {
  const events = [
    {
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "USA Virtual Admission Day",
      description: "Experience and showcase unmatched visa process, save money on offer and expedite your study plans.",
      date: "May, 15 - 2024",
      time: "10:00 AM to 02:00 PM"
    },
    {
      image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "UK Virtual Admissions Week",
      description: "Connect with top UK universities for on-spot admissions and scholarship opportunities.",
      date: "May, 18 - 2024",
      time: "11:00 AM to 04:00 PM"
    }
  ];

  return (
    <section id="events" className="webinars-events section">
      <div className="container">
        <h2 className="section-title">Webinars & Events</h2>
        
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <Calendar size={16} />
                  <span>{event.date} | {event.time}</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <button className="btn btn-primary">Register Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="see-more">
          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </section>
  );
};

export default WebinarsEvents; 