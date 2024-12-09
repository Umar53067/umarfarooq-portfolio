import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu on small screens

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo or Name (visible only on medium screens and up) */}
        <div className="text-2xl font-bold hidden md:inline">Umar Farooq</div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {/* Hamburger icon */}
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

        {/* Desktop Navigation Links (Only visible on medium and larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* "Hire Me" Button (Only on Medium Screens and Up) */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full hidden md:inline transform transition-transform duration-300 hover:scale-105">
          <a href="#contact">Hire Me</a>
        </button>
      </div>

      {/* Mobile Menu (only visible on small screens when isMenuOpen is true) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white px-4 py-4 space-y-4`}>
        <a href="#home" className="hover:text-gray-400 block">Home</a>
        <a href="#about" className="hover:text-gray-400 block">About Me</a>
        <a href="#projects" className="hover:text-gray-400 block">Projects</a>
        <a href="#services" className="hover:text-gray-400 block">Services</a>
        <a href="#contact" className="hover:text-gray-400 block">Contact</a>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full w-full transform transition-transform duration-300 hover:scale-105">
          <a href="#contact">Hire Me</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
