import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/image/logo.png";

/* ── Split-letter slide hover animation ── */
const SplitHoverLink = ({ label, onClick, isScrolled }) => {
  const letters = label.split('');

  return (
    <button
      onClick={onClick}
      className="relative group flex flex-col overflow-hidden px-3 py-1 cursor-pointer
                 bg-transparent border-none outline-none select-none"
    >
      {/* Top row — slides up on hover */}
      <span
        className="flex font-sans font-semibold tracking-widest uppercase text-xs lg:text-sm
                   transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)]
                   group-hover:-translate-y-full"
        style={{ color: isScrolled ? '#1a1a1a' : '#ffffff' }}
      >
        {letters.map((l, i) => (
          <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
            {l === ' ' ? '\u00A0' : l}
          </span>
        ))}
      </span>

      {/* Bottom clone — rises into view on hover */}
      <span
        className="flex font-sans font-semibold tracking-widest uppercase text-xs lg:text-sm
                   absolute top-full left-3
                   transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)]
                   group-hover:-translate-y-full"
        style={{ color: isScrolled ? '#b8960c' : '#f5c518' }}
      >
        {letters.map((l, i) => (
          <span key={i} className="inline-block" style={{ transitionDelay: `${i * 20}ms` }}>
            {l === ' ' ? '\u00A0' : l}
          </span>
        ))}
      </span>

      {/* Gold underline sweep */}
      <span
        className="absolute bottom-0 left-3 h-px w-0
                   transition-all duration-500 group-hover:w-[calc(100%-1.5rem)]"
        style={{ background: isScrolled ? '#b8960c' : '#f5c518' }}
      />
    </button>
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
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center py-1">

        {/* Logo — -my-8 lets it overflow the slim navbar */}
        <Link
          to="/"
          className="flex items-center group flex-shrink-0 -my-8"
          onClick={handleHomeClick}
          style={{ zIndex: 60 }}
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <SplitHoverLink label="Home" onClick={handleHomeClick} isScrolled={isScrolled} />
          {navLinks.map(link => (
            <SplitHoverLink
              key={link.id}
              label={link.name}
              onClick={() => scrollToSection(link.id)}
              isScrolled={isScrolled}
            />
          ))}
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
            {[{ name: 'Home', id: null }, ...navLinks].map((link, i) => (
              <button
                key={link.name}
                onClick={() => link.id ? scrollToSection(link.id) : handleHomeClick()}
                className="w-full text-left text-white font-sans font-medium text-xs
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
