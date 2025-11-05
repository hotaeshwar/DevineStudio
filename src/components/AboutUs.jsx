import React from 'react';
import Logo from "../assets/image/logo.png";
import Navbar from '../components/Navbar';

export default function AboutUsPage() {
  return (
    <div id="about-us" className="min-h-screen bg-slate-800">
      <Navbar />
      
      {/* Yellow Border Header */}
      <div className="bg-yellow-400 border-t-4 border-b-4 border-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center lg:text-left">
            ABOUT US
          </h1>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Logo Section - Left */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-white border-4 border-gray-300 rounded-lg p-8 shadow-lg">
                <img 
                  src={Logo} 
                  alt="de'Vine sTudiO - Architects and Interior Designers" 
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="text-center lg:text-left space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Welcome to <span className="text-yellow-400">de'Vine sTudiO</span>
              </h2>
              
              <div className="space-y-5">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="block mb-3">
                    de'Vine sTudiO is a premier architecture and interior design firm dedicated to creating exceptional spaces that blend aesthetics with functionality.
                  </span>
                  <span className="block">
                    Our award-winning team of architects and interior designers brings over a decade of expertise in transforming residential and commercial spaces into works of art.
                  </span>
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="block mb-3">
                    We specialize in comprehensive architectural services, bespoke interior design solutions, and complete project management.
                  </span>
                  <span className="block">
                    From contemporary homes to sophisticated commercial interiors, we craft environments that reflect your unique vision while optimizing space, light, and flow.
                  </span>
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="block mb-3">
                    Our design philosophy centers on collaboration, innovation, and sustainability.
                  </span>
                  <span className="block mb-3">
                    We work closely with each client to understand their lifestyle, business needs, and aesthetic preferences, delivering personalized solutions that exceed expectations.
                  </span>
                  <span className="block font-semibold text-white">
                    Experience the de'Vine difference where creative excellence meets professional craftsmanship.
                  </span>
                </p>
              </div>

              {/* Cities/Locations Section */}
              <div className="mt-10 pt-8 border-t-2 border-gray-600">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                  Cities / Locations We Offered:
                </h3>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    <span className="font-semibold">Chandigarh</span>
                    <span className="mx-3 text-gray-500">|</span>
                    <span className="text-gray-400">(Tricity)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    <span className="font-semibold">Punjab</span>
                    <span className="mx-3 text-gray-500">|</span>
                    <span className="text-gray-400">(Abohar, Fazilka,Amritsar)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    <span className="font-semibold">Rajasthan</span>
                    <span className="mx-3 text-gray-500">|</span>
                    <span className="text-gray-400">(Vijaynagar)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    <span className="font-semibold">Haryana</span>
                    <span className="mx-3 text-gray-500">|</span>
                    <span className="text-gray-400">(Sirsa, Gurgaon,Panchkula)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}