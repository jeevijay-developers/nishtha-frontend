'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '#home', type: 'section', id: 'home' },
    { name: 'About', href: '#about', type: 'section', id: 'about' },
    { name: 'Skill & Achievements', href: '#skills', type: 'section', id: 'skills' },
    { name: 'Projects', href: '#projects', type: 'section', id: 'projects' },
    { name: 'Contact', href: '#contact', type: 'section', id: 'contact' },
    { name: 'Gallery', href: '/gallery', type: 'page', id: 'gallery' },
  ];

  // Detect active section based on scroll position
  useEffect(() => {
    if (pathname !== '/') {
      // If we're not on the home page, set active section based on pathname
      if (pathname === '/gallery') {
        setActiveSection('gallery');
      }
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (item) => {
    if (item.type === 'section' && pathname !== '/') {
      // If we're not on home page and clicking a section link, navigate to home with hash
      router.push(`/${item.href}`);
    } else if (item.type === 'section' && pathname === '/') {
      // If we're on home page, smooth scroll to section
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (item) => {
    if (item.type === 'page') {
      return pathname === item.href;
    } else {
      return activeSection === item.id;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/">
                <img 
                  src="/logonisi.png" 
                  alt="Nishtha Logo" 
                  className="h-15 w-15 sm:h-24 sm:w-24 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.type === 'page' ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 relative ${
                      isActive(item)
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    {isActive(item) && (
                      <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 relative ${
                      isActive(item)
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    {isActive(item) && (
                      <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Let's Connect Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-[#424874] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#5d65a1] transition-all duration-300 transform hover:scale-102 shadow-lg hover:shadow-xl">
              Let's Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.type === 'page' ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 relative ${
                    isActive(item)
                      ? 'text-blue-600 bg-blue-100 font-semibold border-l-4 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left w-full block px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 relative ${
                    isActive(item)
                      ? 'text-blue-600 bg-blue-100 font-semibold border-l-4 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
            {/* Mobile Let's Connect Button */}
            <div className="pt-4 pb-2 px-3">
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;