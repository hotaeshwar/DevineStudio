import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProjectAlbums from './components/ProjectAlbums';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import DevineStudioChatbot from './components/DevineStudioChatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <AboutUs />
        <ProjectAlbums />
        <WhoWeAre />
        <Footer />
        
        {/* WhatsApp Chatbot Widget */}
        <DevineStudioChatbot />
      </div>
    </Router>
  );
}

export default App;