import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // luxury hotel
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1724582586413-6b69e1c94a17?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Slider - background images */}
      <Slider {...settings} className="absolute inset-0 z-0 h-full w-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-screen">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-50">
              {/* Text content on top */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 md:px-10 text-white max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Experience{" "}
                  <span className="text-yellow-400">
                    <Typewriter
                      words={["Luxury.", "Comfort.", "Elegance."]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-200 max-w-xl">
                  Discover unforgettable stays in world-class rooms. Book your
                  perfect escape with us today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link to="/rooms">
                    <button className="btn btn-primary px-8 py-3">
                      View Rooms
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
