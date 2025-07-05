import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white px-8 md:px-16 lg:px-24 transition-colors duration-300">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hidden md:inline">Umar Farooq</div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links + ThemeToggle */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-400">About Me</a>
          <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-400">Projects</a>
          <a href="#services" className="hover:text-gray-600 dark:hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-400">Contact</a>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Hire Me Button */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full hidden md:inline transform transition-transform duration-300 hover:scale-105">
          <a href="#contact">Hire Me</a>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-black text-black dark:text-white px-4 py-4 space-y-4 transition-colors duration-300`}>
        <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-400 block">Home</a>
        <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-400 block">About</a>
        <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-400 block">Projects</a>
        <a href="#services" className="hover:text-gray-600 dark:hover:text-gray-400 block">Services</a>
        <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-400 block">Contact</a>
        <ThemeToggle />
          
          <a href="#contact" className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full w-full text-center transform transition-transform duration-300 hover:scale-105 mt-2 block">
            Hire Me
          </a>
       
      </div>
    </nav>
  );
}

export default Navbar;
