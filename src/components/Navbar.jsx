import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/image/logo.png";

/* ── Sliding Tab Nav ── */
const TabNavLinks = ({ scrollToSection, handleHomeClick, isScrolled }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  const links = [
    { name: 'Home',       action: handleHomeClick },
    { name: 'About Us',   action: () => scrollToSection('about-us')    },
    { name: 'Projects',   action: () => scrollToSection('our-projects') },
    { name: 'Who We Are', action: () => scrollToSection('who-we-are')  },
    { name: 'Contact Us', action: () => scrollToSection('contact-us')  },
  ];

  const movePill = (index) => {
    const btn = buttonRefs.current[index];
    const container = containerRef.current;
    if (!btn || !container) return;
    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setPillStyle({
      width: btnRect.width,
      left: btnRect.left - containerRect.left,
      opacity: 1,
    });
  };

  const hidePill = () => {
    setPillStyle(prev => ({ ...prev, opacity: 0 }));
    setHoveredIndex(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
      onMouseLeave={hidePill}
    >
      <span
        className="absolute top-0 h-full rounded-md pointer-events-none transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)]"
        style={{
          width: pillStyle.width,
          left: pillStyle.left,
          opacity: pillStyle.opacity,
          background: isScrolled
            ? 'rgba(184,150,12,0.12)'
            : 'rgba(255,255,255,0.12)',
          borderBottom: `2px solid ${isScrolled ? '#b8960c' : '#f5c518'}`,
          backdropFilter: 'blur(4px)',
        }}
      />
      {links.map((link, i) => (
        <button
          key={link.name}
          ref={el => buttonRefs.current[i] = el}
          onClick={link.action}
          onMouseEnter={() => { setHoveredIndex(i); movePill(i); }}
          className="relative z-10 px-3 lg:px-4 py-2 font-sans font-semibold
                     tracking-widest uppercase text-xs lg:text-sm
                     transition-colors duration-200 whitespace-nowrap"
          style={{
            color: hoveredIndex === i
              ? (isScrolled ? '#b8960c' : '#f5c518')
              : (isScrolled ? '#1a1a1a' : '#ffffff'),
          }}
        >
          {link.name}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (isMenuOpen) toggleMenu();
      const navbarHeight = document.querySelector('nav').offsetHeight;
      window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) toggleMenu();
  };

  const navLinks = [
    { name: 'About Us',   id: 'about-us'    },
    { name: 'Projects',   id: 'our-projects' },
    { name: 'Who We Are', id: 'who-we-are'  },
    { name: 'Contact Us', id: 'contact-us'  },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-visible ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      style={{ height: '70px' }}
    >
      {/* Main bar — fixed height, never grows */}
      <div
        className="container mx-auto px-6 sm:px-8 md:px-10 flex justify-between items-center"
        style={{ height: '70px' }}
      >

        {/* Logo — larger, overflows navbar with negative margin */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="flex items-center group flex-shrink-0"
          style={{ zIndex: 60, marginTop: '-50px', marginBottom: '-50px' }}
        >
          <img
            src={Logo}
            alt="Company Logo"
            style={{ height: '170px', width: 'auto' }}
            className="transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center pr-2 lg:pr-4">
          <TabNavLinks
            scrollToSection={scrollToSection}
            handleHomeClick={handleHomeClick}
            isScrolled={isScrolled}
          />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full
                     transition-all duration-300 hover:bg-white/10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col items-center justify-center gap-1">
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 transform
              ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
              ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300
              ${isMenuOpen ? 'opacity-0 scale-0' : ''}
              ${isScrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 transform
              ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
              ${isScrolled ? 'bg-black' : 'bg-white'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="rounded-xl p-3 bg-black/75 backdrop-blur-md shadow-xl flex flex-col gap-1">
            {[{ name: 'Home', id: null }, ...navLinks].map((link) => (
              <button
                key={link.name}
                onClick={() => link.id ? scrollToSection(link.id) : handleHomeClick()}
                className="w-full text-left text-white font-sans font-semibold text-xs
                           py-2 px-3 rounded-lg border-b border-white/10 last:border-0
                           relative group overflow-hidden tracking-widest uppercase
                           hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 h-px w-0 bg-yellow-400
                                 transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
