import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Footer = () => {
  // Create refs for elements we want to animate
  const contactHeaderRef = useRef(null);
  const mapSectionRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const contactItemsRef = useRef([]);
  const socialMediaRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when element comes into view
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          // Stop observing once animation is applied
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all refs
    if (contactHeaderRef.current) observer.observe(contactHeaderRef.current);
    if (mapSectionRef.current) observer.observe(mapSectionRef.current);
    if (contactDetailsRef.current) observer.observe(contactDetailsRef.current);
    contactItemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    if (socialMediaRef.current) observer.observe(socialMediaRef.current);
    if (copyrightRef.current) observer.observe(copyrightRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Add a contact item to the refs array
  const addContactItemRef = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Contact Us Header Section - Matching About Us */}
      <div 
        id="contact-us" 
        ref={contactHeaderRef}
        className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 py-2 sm:py-3 md:py-4 lg:py-6 mb-3 sm:mb-4 md:mb-6 lg:mb-12 relative overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
      >
        <div className="absolute top-0 right-0 w-12 sm:w-20 md:w-32 lg:w-64 h-full bg-white/20 skew-x-12 -translate-x-6 sm:-translate-x-10 md:-translate-x-16 lg:-translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-6 sm:w-10 md:w-16 lg:w-32 h-6 sm:h-10 md:h-16 lg:h-32 bg-white/10 rounded-full -translate-y-2 sm:-translate-y-4 md:-translate-y-8 lg:-translate-y-12"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-wider relative z-10 text-center sm:text-left">
            CONTACT US
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6">
        {/* Contact Us Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Map Section - Takes full width on mobile, half on desktop */}
          <div 
            ref={mapSectionRef}
            className="w-full lg:w-1/2 h-56 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8417388514185!2d76.81673937589694!3d30.638417490184217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb5d14accaef%3A0xa2059528532adeb6!2sde&#39;Vine%20sTudiO!5e0!3m2!1sen!2sin!4v1742004205342!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="de'Vine sTudiO Location"
            ></iframe>
          </div>
          
          {/* Contact Details Section */}
          <div 
            ref={contactDetailsRef}
            className="w-full lg:w-1/2 flex flex-col justify-center bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-lg shadow-lg border border-yellow-300/30 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 font-bold">de'Vine sTudiO</span>
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div 
                  ref={addContactItemRef}
                  className="flex items-start opacity-0 translate-y-8 transition-all duration-500 ease-out delay-300"
                >
                  <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 mr-3 sm:mr-4 shrink-0 border border-yellow-300/30">
                    <i className="fas fa-map-marker-alt text-yellow-300 text-sm sm:text-base"></i>
                  </span>
                  <address className="not-italic text-gray-300 leading-relaxed text-sm sm:text-base">
                    SOHO 926 Block D&E,<br />
                    Chandigarh Citi Center Office,<br />
                    VIP Road, Zirakpur,<br />
                    Punjab 140603
                  </address>
                </div>
                
                <div 
                  ref={addContactItemRef}
                  className="flex items-center opacity-0 translate-y-8 transition-all duration-500 ease-out delay-400"
                >
                  <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 mr-3 sm:mr-4 shrink-0 border border-yellow-300/30">
                    <i className="fas fa-phone-alt text-yellow-300 text-sm sm:text-base"></i>
                  </span>
                  <a href="tel:+919779433175" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm sm:text-base">
                    9779433175
                  </a>
                </div>
                
                <div 
                  ref={addContactItemRef}
                  className="flex items-center opacity-0 translate-y-8 transition-all duration-500 ease-out delay-500"
                >
                  <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 mr-3 sm:mr-4 shrink-0 border border-yellow-300/30">
                    <i className="fas fa-envelope text-yellow-300 text-sm sm:text-base"></i>
                  </span>
                  <a href="mailto:devinestudio56@gmail.com" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm sm:text-base break-all sm:break-normal">
                    devinestudio56@gmail.com
                  </a>
                </div>
                
                <div 
                  ref={addContactItemRef}
                  className="flex items-center opacity-0 translate-y-8 transition-all duration-500 ease-out delay-600"
                >
                  <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 mr-3 sm:mr-4 shrink-0 border border-yellow-300/30">
                    <i className="fas fa-globe text-yellow-300 text-sm sm:text-base"></i>
                  </span>
                  <a href="https://www.devinestudio.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm sm:text-base break-all sm:break-normal">
                    www.devinestudio.com
                  </a>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div 
                ref={socialMediaRef}
                className="pt-3 sm:pt-4 border-t border-yellow-300/20 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-700"
              >
                <h4 className="text-xs sm:text-sm uppercase tracking-wider text-yellow-300/70 mb-2 sm:mb-3">Connect With Us</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-yellow-300/20 border border-yellow-300/30 hover:border-yellow-300/70 transition-all">
                    <i className="fab fa-facebook-f text-yellow-300 text-sm sm:text-base"></i>
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-yellow-300/20 border border-yellow-300/30 hover:border-yellow-300/70 transition-all">
                    <i className="fab fa-instagram text-yellow-300 text-sm sm:text-base"></i>
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-yellow-300/20 border border-yellow-300/30 hover:border-yellow-300/70 transition-all">
                    <i className="fab fa-twitter text-yellow-300 text-sm sm:text-base"></i>
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-yellow-300/20 border border-yellow-300/30 hover:border-yellow-300/70 transition-all">
                    <i className="fab fa-linkedin-in text-yellow-300 text-sm sm:text-base"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div 
          ref={copyrightRef}
          className="border-t border-yellow-300/20 pt-6 sm:pt-8 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out delay-800"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">de'Vine sTudiO</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;