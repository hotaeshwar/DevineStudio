import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProjectAlbums from './components/ProjectAlbums';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import DevineStudioChatbot from './components/DevineStudioChatbot';
import Logo from './assets/image/logo.png';

/* ─── Splash Screen (inline) ─── */
const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('loading'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 2800);
    const t3 = setTimeout(() => onComplete(), 3500);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Architectural grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
        {[...Array(10)].map((_, i) => (
          <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 10}%` }} />
        ))}
        {[...Array(10)].map((_, i) => (
          <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${(i + 1) * 10}%` }} />
        ))}
      </div>

      {/* Gold corner accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2" style={{ borderColor: '#b8960c' }} />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2" style={{ borderColor: '#b8960c' }} />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2" style={{ borderColor: '#b8960c' }} />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: '#b8960c' }} />

      {/* Center content */}
      <div
        className="flex flex-col items-center gap-10"
        style={{
          opacity: phase === 'exit' ? 0 : 1,
          transform: phase === 'exit' ? 'scale(1.04)' : 'scale(1)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Logo + glow */}
        <div
          style={{
            opacity: phase === 'enter' ? 0 : 1,
            transform: phase === 'enter' ? 'scale(0.82) translateY(16px)' : 'scale(1) translateY(0)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="relative flex items-center justify-center">
            <div
              className="absolute rounded-full"
              style={{
                width: 240,
                height: 240,
                background: 'radial-gradient(circle, rgba(184,150,12,0.2) 0%, transparent 70%)',
                filter: 'blur(20px)',
                animation: phase === 'loading' ? 'splash-pulse 2s ease-in-out infinite' : 'none',
              }}
            />
            <img
              src={Logo}
              alt="de'Vine sTudiO"
              style={{ width: 210, height: 210, objectFit: 'contain', position: 'relative', zIndex: 2 }}
            />
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: phase === 'enter' ? 0 : 1,
            transform: phase === 'enter' ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <p style={{
            color: '#b8960c',
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.45em',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            fontWeight: 300,
          }}>
            Architects &amp; Interior Designers
          </p>
        </div>

        {/* Loader */}
        <div
          className="flex flex-col items-center gap-3"
          style={{
            opacity: phase === 'enter' ? 0 : 1,
            transition: 'opacity 0.5s ease 0.3s',
          }}
        >
          {/* Bar track */}
          <div style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 9999, overflow: 'hidden', position: 'relative' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, height: '100%', borderRadius: 9999,
              background: 'linear-gradient(90deg, #b8960c, #f5c518, #b8960c)',
              backgroundSize: '200% 100%',
              animation: phase === 'loading' ? 'splash-fill 2s ease-in-out forwards, splash-shimmer 1.5s linear infinite' : 'none',
              width: '0%',
            }} />
          </div>

          {/* Dot bounce */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} style={{
                width: i === 2 ? 6 : 4,
                height: i === 2 ? 6 : 4,
                borderRadius: '50%',
                background: '#b8960c',
                opacity: 0.35,
                animation: phase === 'loading' ? `splash-dot 1.2s ease-in-out ${i * 0.12}s infinite` : 'none',
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Exit curtain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: '#0a0a0a',
          transformOrigin: 'top',
          transform: phase === 'exit' ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.6s cubic-bezier(.77,0,.18,1)',
        }}
      />

      <style>{`
        @keyframes splash-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.1); }
        }
        @keyframes splash-fill {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes splash-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes splash-dot {
          0%, 80%, 100% { transform: translateY(0);    opacity: 0.35; }
          40%            { transform: translateY(-5px); opacity: 1;    }
        }
      `}</style>
    </div>
  );
};

/* ─── App ─── */
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
