'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', type: 'page' },
    { name: 'About', href: '#about', type: 'section' },
    { name: 'Skill & Achievements', href: '#skills', type: 'section' },
    { name: 'Projects', href: '#projects', type: 'section' },
    { name: 'Gallery', href: '/gallery', type: 'page' },
    { name: 'Contact', href: '#contact', type: 'section' },
  ];

  const handleNavClick = (item) => {
    if (item.type === 'section' && pathname !== '/') {
      // If we're not on home page and clicking a section link, go to home first
      window.location.href = `/${item.href}`;
    }
    setIsMenuOpen(false);
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
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-50 ${
                      pathname === item.href 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-50"
                  >
                    {item.name}
                  </a>
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
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
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