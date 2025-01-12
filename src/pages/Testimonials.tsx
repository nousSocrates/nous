import React from "react";
import Slider from "react-slick";
import "../css/testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "The coding lessons were outstanding! Highly recommend Socrates Schools.",
    image: "/static/images/felo.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Learning music here was a game-changer for my child. Thank you!",
    image: "/static/images/madamjulie.png",
  },
  {
    name: "Emily White",
    feedback: "Amazing experience! The personalized attention made all the difference.",
    image: "/static/images/socratespurple.png",
  },
  {
    name: "Michael Brown",
    feedback: "Great place to learn both coding and music. Very professional.",
    image: "/static/images/nousonphone.png",
  },
  {
    name: "John Doe",
    feedback: "The coding lessons were outstanding! Highly recommend Socrates Schools.",
    image: "/static/images/felo.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Learning music here was a game-changer for my child. Thank you!",
    image: "/static/images/madamjulie.png",
  },
  {
    name: "Emily White",
    feedback: "Amazing experience! The personalized attention made all the difference.",
    image: "/static/images/socratespurple.png",
  },
  {
    name: "Michael Brown",
    feedback: "Great place to learn both coding and music. Very professional.",
    image: "/static/images/nousonphone.png",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
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

export default Testimonials;
