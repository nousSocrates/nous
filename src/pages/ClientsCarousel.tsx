import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "The coding lessons were outstanding! Highly recommend Socrates Schools.",
    image: "john-doe.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Learning music here was a game-changer for my child. Thank you!",
    image: "jane-smith.jpg",
  },
  {
    name: "Emily White",
    feedback: "Amazing experience! The personalized attention made all the difference.",
    image: "emily-white.jpg",
  },
  {
    name: "Michael Brown",
    feedback: "Great place to learn both coding and music. Very professional.",
    image: "michael-brown.jpg",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="carousel-section">
      <h2>Clients & Students Feedback</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="carousel-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="carousel-content">
              <h3>{testimonial.name}</h3>
              <p>"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
