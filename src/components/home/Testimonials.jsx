import React from 'react';
import Slider from 'react-slick';
import { Quote } from 'lucide-react';
import '../../styles/Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Thank you, KC, for all the support you provide during the time of admission to a university. The time they provided for counseling and support of the KC counselors.",
      name: "Neelam Jangswami",
      university: "University of Sydney, Australia"
    },
    {
      quote: "The team made the entire process very easy. Everyone is very helpful and supportive. KC helps for making my dream come true.",
      name: "Amish Rajput",
      university: "University of Toronto, Canada"
    },
    {
      quote: "Helped with counseling and making the right decision about which course and university would be best for planning my desired future.",
      name: "Roshni Malhotra",
      university: "Imperial College London, UK"
    }
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">Our Students Love Us</h2>
        
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-uni">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials; 