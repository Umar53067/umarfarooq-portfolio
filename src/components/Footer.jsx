import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 mb-10">

          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Umar Farooq</h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              .NET & React Developer focused on building scalable backend systems,
              APIs, and real-world enterprise applications.
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-500">
              Currently working on healthcare systems and production-level software.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>

            <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <a href="#home" className="hover:text-black dark:hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition">Projects</a>
              <a href="#services" className="hover:text-black dark:hover:text-white transition">Services</a>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            <div className="flex space-x-5">
              <a href="http://" aria-label="Facebook">
                <FaFacebook className="text-gray-500 hover:text-black dark:hover:text-white transition text-lg" />
              </a>
              <a href="http://" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-500 hover:text-black dark:hover:text-white transition text-lg" />
              </a>
              <a href="http://" aria-label="GitHub">
                <FaGithub className="text-gray-500 hover:text-black dark:hover:text-white transition text-lg" />
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Open to freelance & full-time roles
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Umar Farooq. Built with React & .NET mindset.
          </p>

          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="http://" className="hover:text-black dark:hover:text-white transition">
              Privacy
            </a>
            <a href="http://" className="hover:text-black dark:hover:text-white transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;