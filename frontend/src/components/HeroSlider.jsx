import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Shield, Users } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Compassionate Care for Your Loved Ones",
      subtitle: "Professional elder care services with a personal touch",
      icon: <Heart size={80} />,
      gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
      cta: "Learn More"
    },
    {
      id: 2,
      title: "24/7 Support When You Need It Most",
      subtitle: "Round-the-clock care and companionship services",
      icon: <Shield size={80} />,
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      cta: "Our Services"
    },
    {
      id: 3,
      title: "Trusted by Families Across the Community",
      subtitle: "Years of experience in providing quality elder care",
      icon: <Users size={80} />,
      gradient: "linear-gradient(135deg, #0891b2, #0e7490)",
      cta: "Contact Us"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.gradient }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <div className="slide-icon">
                  {slide.icon}
                </div>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <button className="cta-button">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slider-btn prev" onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        <ChevronRight />
      </button>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;