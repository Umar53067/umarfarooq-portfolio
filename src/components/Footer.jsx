import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/5 py-14 mt-12 bg-background relative overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-white">
              Umar<span className="text-gray-500">.</span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              .NET & React Developer focused on building scalable backend systems,
              APIs, and real-world enterprise applications.
            </p>

          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>

            <div className="flex flex-col space-y-3 text-sm text-gray-400">
              <a href="#home" className="hover:text-white transition-colors w-max">Home</a>
              <a href="#about" className="hover:text-white transition-colors w-max">About</a>
              <a href="#projects" className="hover:text-white transition-colors w-max">Projects</a>
              <a href="#services" className="hover:text-white transition-colors w-max">Services</a>
              <a href="#contact" className="hover:text-white transition-colors w-max">Contact</a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>

            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="LinkedIn" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
                <FaGithub size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-500 transition-all">
                <FaFacebook size={18} />
              </a>
            </div>

            <p className="text-xs text-gray-500 font-medium">
              Available for freelance & full-time roles
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Umar Farooq. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;