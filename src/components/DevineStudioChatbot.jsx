import React from 'react';
import { Calendar } from 'lucide-react';

export default function CalendlyApp() {
  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/devinestudio56/30min?hide_gdpr_banner=1&primary_color=b8960c'
      });
    } else {
      // Fallback: open in new tab if the script hasn't loaded yet
      window.open('https://calendly.com/devinestudio56/30min', '_blank');
    }
  };

  return (
    <button
      onClick={handleScheduleClick}
      className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center gap-3 group border-2 border-black"
      aria-label="Schedule Meeting"
    >
      <Calendar className="w-6 h-6" />
      <span className="hidden md:inline-block pr-2 font-semibold">
        Schedule Meeting
      </span>
    </button>
  );
}
