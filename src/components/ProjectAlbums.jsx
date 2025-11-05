import React, { useState } from 'react';

// Project images 
import Residential1 from '../assets/image/residential1.jpg';
import Residential2 from '../assets/image/residential2.jpg';
import Residential3 from '../assets/image/residential3.jpg';
import Residential4 from '../assets/image/residential4.jpg';
import Residential5 from '../assets/image/residential5.jpg';
import Commercial1 from '../assets/image/commercial1.jpg';
import Commercial2 from '../assets/image/commercial2.jpg';
import Commercial3 from '../assets/image/commercial3.jpg';
import Commercial5 from "../assets/image/commercial5.jpg";
import Office1 from '../assets/image/office1.jpg';
import Office2 from '../assets/image/office2.jpg';
import Office3 from '../assets/image/office3.jpg';
import Office4 from '../assets/image/office4.jpg';
import Office6 from '../assets/image/office6.jpg';
import Restaurant1 from '../assets/image/restaurant1.jpg';
import Restaurant2 from '../assets/image/restaurant2.jpg';
import Restaurant3 from '../assets/image/restaurant3.jpg';
import Restaurant4 from "../assets/image/restaurant4.jpg";
import Interior1 from '../assets/image/interior1.jpg';
import Interior2 from '../assets/image/interior2.jpg';
import Interior3 from '../assets/image/interior3.jpg';
import Interior4 from '../assets/image/interior4.jpg';
import Interior11 from '../assets/image/interior11.jpg';
import Interior21 from '../assets/image/interior21.jpg';
import Interior31 from '../assets/image/interior31.jpg';
import Interrior4 from '../assets/image/interrior4.jpg';

const ProjectGallery = () => {
  const projectImages = {
    Residential: [
      { 
        name: "Panchkula Residence", 
        location: "Panchkula", 
        size: "300 SQYD", 
        images: [Residential1],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-1"
      },
      { 
        name: "Jaipur Residence", 
        location: "Jaipur", 
        size: "200 SQYD", 
        images: [Residential2],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-2"
      },
      { 
        name: "Kalka Residence", 
        location: "Kalka", 
        size: "200 SQYD", 
        images: [Residential3],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-3"
      },
      { 
        name: "Zirakpur Residence", 
        location: "Zirakpur", 
        size: "1 Kanal (600 SQYD)", 
        images: [Residential4],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-4"
      },
      { 
        name: "Ambala Residence", 
        location: "Ambala", 
        size: "500 SQYD", 
        images: [Residential5],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-5"
      }
    ],
    Commercial: [
      { 
        name: "Commercial Project", 
        location: "", 
        images: [Commercial5, Commercial1, Commercial2, Commercial3, Office4],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-6"
      }
    ],
    Offices: [
      { 
        name: "Office Project", 
        location: "", 
        images: [Office2, Office1, Office3, Office6],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-8"
      }
    ],
    Restaurant: [
      { 
        name: "Restaurant Project", 
        location: "", 
        images: [Restaurant1, Restaurant2, Restaurant3, Restaurant4],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-7"
      }
    ],
    Interior: [
      { 
        name: "Interior Project", 
        location: "", 
        images: [Interior1, Interior2, Interior3, Interior4, Interior11, Interior21, Interior31, Interrior4],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-9"
      }
    ],
    Collaboration: [
      { 
        name: "Architectural Innovations", 
        location: "", 
        images: [],
        driveLink: "https://drive.google.com/drive/folders/your-folder-id-10"
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('Residential');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = Object.keys(projectImages);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  return (
    <section id="our-projects" className="py-8 sm:py-12 md:py-16 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 bg-yellow-300 py-4 sm:py-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-64 h-full bg-white/20 skew-x-12 -translate-x-8 sm:-translate-x-16 md:-translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-8 sm:w-16 md:w-32 h-8 sm:h-16 md:h-32 bg-white/10 rounded-full -translate-y-3 sm:-translate-y-6 md:-translate-y-12"></div>
          <div className="container mx-auto px-3 sm:px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-wider relative z-10">
              OUR PROJECTS
            </h2>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 space-x-2 sm:space-x-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-3 sm:px-4 py-1.5 sm:py-2 m-1 rounded-full transition-all duration-300 text-xs sm:text-sm
                ${selectedCategory === category 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projectImages[selectedCategory].map((project, index) => (
            <div 
              key={index}
              onClick={() => handleProjectClick(project)}
              className={`
                relative group overflow-hidden rounded-lg shadow-lg 
                ${selectedCategory === "Collaboration" 
                  ? "bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-300 sm:col-span-2 lg:col-span-3 h-64 sm:h-72 lg:h-80" 
                  : "bg-gray-800"
                }
                transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl
                cursor-pointer
              `}
            >
              {selectedCategory === "Collaboration" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 sm:px-6 lg:px-12">
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 mb-2 sm:mb-4 text-xs sm:text-sm font-bold bg-gray-900 text-yellow-300 rounded-full transform -rotate-2">
                      {selectedCategory}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-black mb-1 sm:mb-2 text-gray-900">
                      {project.name}
                    </h3>
                    <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-yellow-300 text-sm sm:text-base font-bold rounded-lg shadow-lg transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      View This Project
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {project.images[0] && (
                    <div className="relative">
                      <img 
                        src={project.images[0]} 
                        alt={project.name} 
                        className="w-full h-48 sm:h-56 md:h-64 object-cover 
                                   filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {project.name}
                    </h3>
                    {project.location && (
                      <p className="text-xs sm:text-sm text-gray-400 mb-0.5">
                        Location: {project.location}
                      </p>
                    )}
                    {project.size && (
                      <p className="text-xs sm:text-sm text-gray-400">
                        Size: {project.size}
                      </p>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-yellow-300 rounded-full p-1.5 sm:p-2 shadow-md transform rotate-0 group-hover:rotate-45 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l5-5m0 0l-5-5m5 5H4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProject.images.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-3 sm:p-4 border-b border-gray-700 flex justify-between items-center">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">{selectedProject.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {selectedProject.location && `Location: ${selectedProject.location}`}
                    {selectedProject.size && ` | Size: ${selectedProject.size}`}
                  </p>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-yellow-300 transition-colors duration-300 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Image Viewer */}
              <div className="relative flex-grow">
                <div className="h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 bg-yellow-300 text-gray-900 rounded-full p-2 sm:p-3 shadow-lg hover:bg-yellow-400 transition-colors duration-300 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={handleNextImage}
                      className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 bg-yellow-300 text-gray-900 rounded-full p-2 sm:p-3 shadow-lg hover:bg-yellow-400 transition-colors duration-300 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="p-3 sm:p-4 flex space-x-2 sm:space-x-3 overflow-x-auto pb-2 sm:pb-0 border-t border-gray-700">
                {selectedProject.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-10 sm:h-14 w-14 sm:w-20 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${
                      idx === currentImageIndex 
                        ? 'ring-2 ring-yellow-300 scale-110' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Drive Link */}
              <div className="p-3 sm:p-4 border-t border-gray-700 flex justify-end">
                <a 
                  href={selectedProject.driveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-300 text-gray-900 text-xs sm:text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  View more images
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;