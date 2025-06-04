import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Umar Farooq</h3>
            <p className="text-gray-700 dark:text-gray-400">
              I am a MERN Stack Developer specializing in building full-stack 
              Single Page Applications and Responsive Web Designs using MongoDB, Express.js, React, and Node.js.
            </p>
          </div>

          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:border-green-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-r-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Umar Farooq. All rights reserved.</p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a href="http://" aria-label="Facebook">
              <FaFacebook className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="http://" aria-label="LinkedIn">
              <FaLinkedin className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="http://" aria-label="GitHub">
              <FaGithub className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" />
            </a>
          </div>

          <div className="space-x-4">
            <a href="http://" className="hover:underline">
              Privacy
            </a>
            <a href="http://" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
