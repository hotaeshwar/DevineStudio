import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/image/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (isMenuOpen) toggleMenu();
      const navbarHeight = document.querySelector('nav').offsetHeight;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) toggleMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-visible ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Navbar inner — tight height via py-0, logo overflows via negative margin */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center h-14 sm:h-16">

        {/* Logo — larger than the navbar height, overflows via negative margin */}
        <Link
          to="/"
          className="flex items-center group flex-shrink-0 -my-4"
          onClick={handleHomeClick}
          style={{ zIndex: 60 }}
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 transition-all duration-300 transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
          <NavLinks
            scrollToSection={scrollToSection}
            handleHomeClick={handleHomeClick}
            isScrolled={isScrolled}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full transition-all duration-300 hover:bg-gray-200/20 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-4 sm:w-5 flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'gap-0' : 'gap-1'}`}>
            <span className={`block w-4 sm:w-5 h-0.5 rounded-full transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`block w-4 sm:w-5 h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`block w-4 sm:w-5 h-0.5 rounded-full transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col space-y-1 sm:space-y-2">
          <div className="rounded-lg sm:rounded-xl p-2 sm:p-3 bg-black/70 backdrop-blur-sm shadow-lg">
            <NavLinksMobile
              toggleMenu={toggleMenu}
              scrollToSection={scrollToSection}
              handleHomeClick={handleHomeClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ scrollToSection, handleHomeClick, isScrolled }) => {
  const links = [
    { name: 'About Us', sectionId: 'about-us' },
    { name: 'Projects', sectionId: 'our-projects' },
    { name: 'Who We Are', sectionId: 'who-we-are' },
    { name: 'Contact Us', sectionId: 'contact-us' },
  ];

  const baseClass = `font-medium tracking-wide font-sans uppercase text-xs lg:text-sm relative group px-2 py-1 rounded-lg overflow-hidden`;
  const colorClass = isScrolled ? 'text-black hover:text-blue-700' : 'text-white hover:text-blue-100';
  const underlineClass = isScrolled
    ? 'group-hover:w-full group-hover:bg-blue-600 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)]'
    : 'group-hover:w-full group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(96,165,250,0.8)]';
  const bgClass = isScrolled
    ? 'group-hover:h-full group-hover:opacity-10 group-hover:bg-blue-600/50'
    : 'group-hover:h-full group-hover:opacity-20 group-hover:bg-blue-400/50';

  return (
    <>
      <button onClick={handleHomeClick} className={`${baseClass} ${colorClass}`}>
        Home
        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${underlineClass}`}></span>
        <span className={`absolute inset-0 w-full h-0 transition-all duration-300 ease-out -z-10 opacity-0 rounded-lg ${bgClass}`}></span>
      </button>

      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => scrollToSection(link.sectionId)}
          className={`${baseClass} ${colorClass}`}
        >
          {link.name}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${underlineClass}`}></span>
          <span className={`absolute inset-0 w-full h-0 transition-all duration-300 ease-out -z-10 opacity-0 rounded-lg ${bgClass}`}></span>
        </button>
      ))}
    </>
  );
};

const NavLinksMobile = ({ toggleMenu, scrollToSection, handleHomeClick }) => {
  const links = [
    { name: 'About Us', sectionId: 'about-us' },
    { name: 'Projects', sectionId: 'our-projects' },
    { name: 'Who We Are', sectionId: 'who-we-are' },
    { name: 'Contact Us', sectionId: 'contact-us' },
  ];

  return (
    <>
      <button
        onClick={handleHomeClick}
        className="w-full text-left font-sans font-medium py-1.5 sm:py-2 px-2 block border-b transition-all duration-300
          text-white hover:text-blue-100 border-blue-500/30 rounded-t-lg hover:rounded-lg relative group overflow-hidden
          hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-blue-800/10 hover:pl-3 sm:hover:pl-4 text-sm"
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
      </button>

      {links.map((link, index) => (
        <button
          key={link.name}
          onClick={() => scrollToSection(link.sectionId)}
          className="w-full text-left font-sans font-medium py-1.5 sm:py-2 px-2 block border-b transition-all duration-300
            text-white hover:text-blue-100 border-blue-500/30 hover:rounded-lg relative group overflow-hidden
            hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-blue-800/10 hover:pl-3 sm:hover:pl-4 text-sm"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
        </button>
      ))}
    </>
  );
};

export default Navbar;
