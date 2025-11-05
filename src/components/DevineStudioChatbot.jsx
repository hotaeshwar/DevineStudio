import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';

export default function CalendlyApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Button - Fixed Position Bottom Right */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 flex items-center gap-3 group"
      >
        <Calendar className="w-6 h-6" />
        <span className="hidden md:inline-block pr-2 font-semibold">
          Schedule Meeting
        </span>
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center p-4"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden"
            style={{ 
              height: '70vh', 
              maxHeight: '650px',
              animation: 'slideUp 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Schedule a Meeting
              </h2>
              <p className="text-blue-100 mt-2">Book your 30-minute consultation with us</p>
            </div>

            {/* Calendly Iframe */}
            <div className="h-[calc(100%-100px)] overflow-hidden">
              <iframe
                src="https://calendly.com/devinestudio56/30min?hide_gdpr_banner=1&primary_color=2563eb"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
