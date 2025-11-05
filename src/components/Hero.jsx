import React, { useState, useEffect } from 'react';
import HeroImage1 from '../assets/image/hero1.jpg';
import HeroImage2 from '../assets/image/hero2.jpg';

const Hero = () => {
  // State to control animation
  const [isVisible, setIsVisible] = useState(false);
  // State to control carousel
  const [currentImage, setCurrentImage] = useState(0);
  // Array of hero images
  const heroImages = [HeroImage1, HeroImage2];
  
  // Function to scroll to the projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('our-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect to trigger animation on component mount (page refresh)
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Effect to handle carousel rotation
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(carouselTimer);
  }, [heroImages.length]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Images Carousel */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transform scale-105 transition-all duration-1000 ${
            isVisible && currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transition: 'opacity 1.2s ease-in-out' }}
        >
          <img 
            src={image} 
            alt={`Hero Background ${index + 1}`} 
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Improved gradient overlay - lighter for better black text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/5"></div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 z-20 flex justify-center gap-1 md:gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-yellow-400 scale-110' : 'bg-yellow-400/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              Create Beautiful Experiences
            </span>
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 lg:mb-10 max-w-xl sm:max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0 py-3 px-4 transition-all duration-300 hover:bg-white hover:text-black hover:rounded-lg"
            style={{ 
              transition: 'all 1.2s ease-in-out 0.2s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Launch your project with our award-winning design and development solutions.
          </p>
          
          {/* Call to Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 md:mt-8"
            style={{ 
              transition: 'all 1.2s ease-in-out 0.4s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <button className="px-6 sm:px-7 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm md:text-base font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
              Get Started
            </button>
            <button 
              onClick={scrollToProjects}
              className="px-6 sm:px-7 md:px-8 py-2.5 md:py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 text-sm md:text-base font-bold rounded-lg transform transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-16 md:h-20 lg:h-24 bg-gradient-to-t from-black/40 to-transparent z-5 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute -bottom-2 right-0 w-1/2 sm:w-2/5 md:w-1/3 h-16 md:h-20 lg:h-24 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-full blur-3xl z-5 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
        }`}
      ></div>
      <div 
        className={`absolute -top-10 -left-10 w-1/3 sm:w-1/4 h-1/4 bg-yellow-400/10 rounded-full blur-3xl z-5 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
        }`}
      ></div>
    </div>
  );
};

export default Hero;