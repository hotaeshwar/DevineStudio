import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Logo = "/assets/image/logo.png";

/* ── Sliding Tab Nav ── */
const TabNavLinks = ({ scrollToSection, handleHomeClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  const links = [
    { name: 'Home',       href: '#',            action: (e) => { e.preventDefault(); handleHomeClick(); } },
    { name: 'About Us',   href: '#about-us',    action: (e) => { e.preventDefault(); scrollToSection('about-us'); } },
    { name: 'Projects',   href: '#our-projects', action: (e) => { e.preventDefault(); scrollToSection('our-projects'); } },
    { name: 'Who We Are', href: '#who-we-are',  action: (e) => { e.preventDefault(); scrollToSection('who-we-are'); } },
    { name: 'Contact Us', href: '#contact-us',  action: (e) => { e.preventDefault(); scrollToSection('contact-us'); } },
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
          background: 'rgba(184,150,12,0.12)',
          borderBottom: '2px solid #b8960c',
          backdropFilter: 'blur(4px)',
        }}
      />
      {links.map((link, i) => (
        <a
          key={link.name}
          href={link.href}
          ref={el => buttonRefs.current[i] = el}
          onClick={link.action}
          onMouseEnter={() => { setHoveredIndex(i); movePill(i); }}
          className="relative z-10 px-3 lg:px-4 py-2 font-sans font-semibold
                     tracking-widest uppercase text-xs lg:text-sm
                     transition-colors duration-200 whitespace-nowrap cursor-pointer text-center"
          style={{
            color: hoveredIndex === i ? '#b8960c' : '#1a1a1a',
          }}
        >
          {link.name}
        </a>
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      style={{ height: '80px' }}
    >
      {/* Main bar — fixed height, never grows */}
      <div
        className="container mx-auto px-6 sm:px-8 md:px-10 flex justify-between items-center h-full"
      >

        {/* Logo — vertically centered, no overflow */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="flex items-center group flex-shrink-0 relative h-full"
          style={{ zIndex: 60 }}
        >
          <img
            src={Logo}
            alt="Company Logo"
            style={{ 
              height: '120px', 
              width: 'auto',
              maxHeight: 'none',
              position: 'relative',
              top: '12px'
            }}
            className="transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />
        </Link>

        {/* Desktop Nav - vertically centered */}
        <div className="hidden md:flex items-center pr-2 lg:pr-4">
          <TabNavLinks
            scrollToSection={scrollToSection}
            handleHomeClick={handleHomeClick}
          />
        </div>

        {/* Hamburger - vertically centered */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full
                     transition-all duration-300 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col items-center justify-center gap-1">
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 transform
              ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
              bg-black`} />
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300
              ${isMenuOpen ? 'opacity-0 scale-0' : ''}
              bg-black`} />
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 transform
              ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
              bg-black`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="rounded-xl p-3 bg-black/75 backdrop-blur-md shadow-xl flex flex-col gap-1">
            {[
              { name: 'Home', href: '#', id: null },
              { name: 'About Us', href: '#about-us', id: 'about-us' },
              { name: 'Projects', href: '#our-projects', id: 'our-projects' },
              { name: 'Who We Are', href: '#who-we-are', id: 'who-we-are' },
              { name: 'Contact Us', href: '#contact-us', id: 'contact-us' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  link.id ? scrollToSection(link.id) : handleHomeClick();
                }}
                className="w-full text-left text-white font-sans font-semibold text-xs
                           py-2 px-3 rounded-lg border-b border-white/10 last:border-0
                           relative group overflow-hidden tracking-widest uppercase
                           hover:bg-white/10 transition-all duration-300 block"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 h-px w-0 bg-yellow-400
                                 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
