import { useState, useEffect } from "react";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      quote: "Discover Available Scholarships",
      subtext: "Explore a wide range of scholarships tailored to your needs.",
    },
    {
      image: img2,
      quote: "Stay Updated with New Opportunities",
      subtext: "Get notified about the latest scholarships and deadlines.",
    },
    {
      image: img3,
      quote: "Streamline Your Application Process",
      subtext: "Easily manage and submit scholarship applications online.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Blurred Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 
            filter"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              {/* Main Quote */}
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow:
                    "0 4px 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.5)",
                }}
              >
                {slide.quote}
              </h1>

              {/* Subtext */}
              <p
                className={`text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide drop-shadow-lg transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  textShadow: "0 2px 20px rgba(0, 0, 0, 0.7)",
                }}
              >
                {slide.subtext}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-white"
                : "w-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="absolute inset-0 rounded-full bg-white/30 blur-sm group-hover:blur-md transition-all" />
          </button>
        ))}
      </div>

      {/* Previous/Next Arrows
      <button
        onClick={() =>
          goToSlide((currentSlide - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}

      {/* Font imports */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Lato:wght@300;400&family=Montserrat:wght@500;600&display=swap");
      `}</style>
    </div>
  );
}
