import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProjectAlbums from './components/ProjectAlbums';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import DevineStudioChatbot from './components/DevineStudioChatbot';
import SplashScreen from './components/SplashScreen';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      <Router>
        <div
          className="min-h-screen bg-black text-white"
          style={{
            opacity: splashDone ? 1 : 0,
            transform: splashDone ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Navbar />
          <Hero />
          <AboutUs />
          <ProjectAlbums />
          <WhoWeAre />
          <Footer />
          <DevineStudioChatbot />
        </div>
      </Router>
    </>
  );
}

export default App;
