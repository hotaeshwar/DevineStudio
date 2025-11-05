import React from 'react';
import { motion } from 'framer-motion';
// Import team member images from assets folder
import TeamMember1 from '../assets/image/hero1.jpg'; // Update with your actual image names
import TeamMember3 from '../assets/image/hero1.jpg';
import TeamMember4 from '../assets/image/hero2.jpg';
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const WhoWeAre = () => {
  // Function to get the appropriate icon based on platform name
  const getIcon = (platform) => {
    switch(platform) {
      case 'twitter': return faTwitter;
      case 'facebook': return faFacebook;
      case 'instagram': return faInstagram;
      default: return faTwitter;
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Ar. Amrita Sachdeva",
      role: "Principal Architect & Interior Design Consultant",
      image: TeamMember1,
      bio: "With over a decade of expertise in residential and commercial architecture, Ar. Amrita specializes in sustainable design solutions that harmonize aesthetics with environmental responsibility.",
      social: {
        facebook: "https://www.facebook.com/share/1Ah62byaab/",
        twitter: "https://twitter.com",
        instagram: "https://www.instagram.com/devinestudio56?igsh=aHVlcWx5dDBkdTEw"
      }
    },
    {
      id: 3,
      name: "Ar. Karnveer Singh",
      role: "Senior Architect - Urban Planning & Design",
      image: TeamMember3,
      bio: "Specializing in urban planning and contemporary architectural design, Ar. Karnveer brings innovative solutions that seamlessly blend functionality with modern aesthetics.",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 4,
      name: "Ar. Rahul Masuta",
      role: "Project Architect & Design Specialist",
      image: TeamMember4,
      bio: "An accomplished architectural specialist with proven expertise in managing complex projects, delivering exceptional results within timeline and budget parameters.",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  return (
    <section id="who-we-are" className="py-4 sm:py-8 md:py-16 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
      {/* Mobile-optimized Header Banner - Matching ABOUT US style */}
      <div className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 py-2 sm:py-3 md:py-4 lg:py-6 mb-3 sm:mb-4 md:mb-8 lg:mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-64 h-full bg-white/20 skew-x-12 -translate-x-8 sm:-translate-x-16 md:-translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-8 sm:w-16 md:w-32 h-8 sm:h-16 md:h-32 bg-white/10 rounded-full -translate-y-3 sm:-translate-y-6 md:-translate-y-12"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-wider relative z-10">
            WHO WE ARE
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl">
        {/* Team Introduction - Similar to the About Us content format */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl border border-yellow-300/30">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 font-bold">de'Vine</span> <span className="text-white">sTudio</span> <span className="text-gray-200">Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg"
            >
              Our dedicated team of licensed architects and interior designers brings together decades of collective experience in creating transformative spaces. From residential masterpieces to commercial landmarks, office environments, restaurant concepts, and hospitality ventures, we deliver comprehensive architectural solutions. We seamlessly integrate innovative design thinking with precise technical execution to craft exceptional built environments that exceed client expectations.
            </motion.p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 text-yellow-300 text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-full border border-yellow-300/30 hover:border-yellow-300/70 transition-all duration-300">#ArchitecturalDesign</span>
              <span className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 text-yellow-300 text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-full border border-yellow-300/30 hover:border-yellow-300/70 transition-all duration-300">#InteriorDesignExperts</span>
              <span className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 text-yellow-300 text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-full border border-yellow-300/30 hover:border-yellow-300/70 transition-all duration-300">#InnovativeSpaces</span>
            </div>
          </div>
          <div></div> {/* Empty div to match the About Us layout */}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
          {teamMembers.map((member, index) => (
            <motion.article 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:translate-y-[-10px] group-hover:shadow-2xl group-hover:shadow-yellow-400/20 h-full flex flex-col border border-yellow-300/10 group-hover:border-yellow-300/30">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center overflow-hidden">
                    {/* Use imported image or fallback */}
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role} at de'Vine sTudio`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-700">
                        <span className="text-gray-400 text-base sm:text-lg md:text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  
                  {/* Social Links - Twitter, Facebook, and Instagram */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 flex justify-center space-x-2 sm:space-x-3 md:space-x-4 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    {Object.keys(member.social).map((platform) => (
                      <a 
                        key={platform} 
                        href={member.social[platform]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-yellow-400 transition-all duration-200"
                        aria-label={`Follow ${member.name} on ${platform}`}
                      >
                        <FontAwesomeIcon icon={getIcon(platform)} className="text-white text-xs sm:text-sm md:text-base" />
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="p-3 sm:p-4 md:p-6 flex-grow flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1 text-white group-hover:text-yellow-300 transition-colors duration-300">{member.name}</h3>
                  <p className="text-yellow-300 font-medium mb-2 sm:mb-3 md:mb-4 tracking-wide text-xs sm:text-sm">{member.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base flex-grow line-clamp-3 sm:line-clamp-4 md:line-clamp-none">{member.bio}</p>
                  
                  {/* Responsive button - visible on all screens but styled differently */}
                  <div className="mt-3 sm:mt-4 md:mt-6">
                    <button 
                      className="group-hover:bg-yellow-400 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-full w-full border border-yellow-300/30 transition-all duration-300 relative overflow-hidden"
                      aria-label={`View detailed profile of ${member.name}`}
                    >
                      <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">View Profile</span>
                      <span className="absolute inset-0 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300 -z-0"></span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;