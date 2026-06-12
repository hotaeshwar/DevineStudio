import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Loader2 } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form states when closing
      setStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: '',
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/devinestudio56@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Project Type": formData.projectType,
          Message: formData.message,
          _subject: `New de'Vine sTudiO Website Enquiry - ${formData.name}`,
          _honey: "", // Honeypot field to prevent spam
          _captcha: "false" // Disable standard captcha to allow silent AJAX submission
        })
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setStatus('success');
        // Auto-close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error(result.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setStatus('error');
      setErrorMessage(error.message || "An unexpected error occurred. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop with premium blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-2xl border border-yellow-400/30 shadow-2xl shadow-yellow-500/5 overflow-hidden z-10 transform transition-all duration-300 scale-100 flex flex-col">
        
        {/* Top Decorative Gold Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-white/5 relative">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 uppercase tracking-wider">
              Enquire With Us
            </h3>
            <p className="text-xs text-gray-400 mt-1">Tell us about your project and design needs</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-yellow-400 transition-colors p-1.5 rounded-full hover:bg-white/5 focus:outline-none"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Architectural grid lines background (subtle decoration) */}
          <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-between px-10">
            <div className="w-px h-full bg-white"></div>
            <div className="w-px h-full bg-white"></div>
            <div className="w-px h-full bg-white"></div>
          </div>
        </div>

        {/* Body / Form */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center border border-yellow-400">
                <CheckCircle size={36} className="text-yellow-400 animate-bounce" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">Enquiry Sent!</h4>
              <p className="text-gray-400 max-w-xs text-sm">
                Thank you for reaching out to de'Vine sTudiO. Our architects will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Status Notice for Errors */}
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Name field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="modal-name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name <span className="text-yellow-400">*</span></label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="modal-email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email <span className="text-yellow-400">*</span></label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="modal-phone" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Project Type field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="modal-project" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Type</label>
                <div className="relative">
                  <select
                    id="modal-project"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="Residential">Residential Architecture</option>
                    <option value="Commercial">Commercial Design</option>
                    <option value="Interior Design">Bespoke Interior Design</option>
                    <option value="Consultation">Consultation Session</option>
                    <option value="Other">Other Design Service</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-yellow-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="modal-message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Details <span className="text-yellow-400">*</span></label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your design vision, budget constraints, or site details..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
