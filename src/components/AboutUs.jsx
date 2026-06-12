import React from 'react';
const Logo = "/assets/image/logo.png";

export default function AboutUsPage() {
  return (
    <div id="about-us" className="min-h-screen bg-slate-800">

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center lg:items-start max-w-7xl mx-auto">
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start lg:col-span-1">
              <div className="bg-white border-4 border-gray-300 rounded-lg p-8 shadow-lg">
                <img
                  src={Logo}
                  alt="de'Vine sTudiO - Architects and Interior Designers"
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left space-y-8 lg:col-span-2 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Welcome to <span className="text-yellow-400">de'Vine sTudiO</span>
              </h2>

              <div className="space-y-5">
                <p className="text-lg text-gray-300 leading-relaxed lg:pl-0">
                  <span className="block mb-3">
                    de'Vine sTudiO is a premier architecture and interior design firm dedicated to creating exceptional spaces that blend aesthetics with functionality.
                  </span>
                  <span className="block">
                    Our award-winning team of architects and interior designers brings over a decade of expertise in transforming residential and commercial spaces into works of art.
                  </span>
                </p>

                <p className="text-lg text-gray-300 leading-relaxed lg:pl-8">
                  <span className="block mb-3">
                    We specialize in comprehensive architectural services, bespoke interior design solutions, and complete project management.
                  </span>
                  <span className="block">
                    From contemporary homes to sophisticated commercial interiors, we craft environments that reflect your unique vision while optimizing space, light, and flow.
                  </span>
                </p>

                <p className="text-lg text-gray-300 leading-relaxed lg:pl-16">
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
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 lg:pl-0">
                  Locations We Offered:
                </h3>
                <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                  <div className="w-full max-w-md p-4 bg-slate-700/40 border-l-4 border-yellow-400 rounded-r-xl shadow-md transform lg:translate-x-0 transition-all duration-300 hover:bg-slate-700/70 hover:translate-x-1 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold text-white text-lg">Chandigarh (Tricity)</span>
                  </div>
                  <div className="w-full max-w-md p-4 bg-slate-700/40 border-l-4 border-yellow-400 rounded-r-xl shadow-md transform lg:translate-x-8 transition-all duration-300 hover:bg-slate-700/70 hover:translate-x-9 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold text-white text-lg">Punjab</span>
                  </div>
                  <div className="w-full max-w-md p-4 bg-slate-700/40 border-l-4 border-yellow-400 rounded-r-xl shadow-md transform lg:translate-x-16 transition-all duration-300 hover:bg-slate-700/70 hover:translate-x-17 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold text-white text-lg">Rajasthan</span>
                  </div>
                  <div className="w-full max-w-md p-4 bg-slate-700/40 border-l-4 border-yellow-400 rounded-r-xl shadow-md transform lg:translate-x-24 transition-all duration-300 hover:bg-slate-700/70 hover:translate-x-25 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold text-white text-lg">Haryana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}