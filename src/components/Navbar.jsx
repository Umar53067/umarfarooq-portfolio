import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white sticky top-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl md:text-2xl font-semibold tracking-tight">
            Umar Farooq
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:opacity-70 transition">Home</a>
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#projects" className="hover:opacity-70 transition">Projects</a>
            <a href="#services" className="hover:opacity-70 transition">Services</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            <a
              href="#contact"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          
          <a href="#home" className="block hover:opacity-70">Home</a>
          <a href="#about" className="block hover:opacity-70">About</a>
          <a href="#projects" className="block hover:opacity-70">Projects</a>
          <a href="#services" className="block hover:opacity-70">Services</a>
          <a href="#contact" className="block hover:opacity-70">Contact</a>

          <div className="pt-2">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            className="block text-center bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-full font-semibold mt-3 hover:scale-105 transition-transform duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;