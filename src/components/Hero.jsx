function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
        
        {/* Main Content */}
        <div className="flex flex-col items-center text-center">
          
          {/* Small Intro Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Available for new opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Umar Farooq
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl font-medium text-gray-400 mb-8 max-w-2xl">
            Crafting digital experiences with <span className="text-white">.NET</span> & <span className="text-white">React</span>
          </h2>

          {/* Subtext */}
          <p className="max-w-2xl text-gray-500 text-base md:text-lg mb-12">
            I build scalable web applications and enterprise-level systems with clean architecture,
            modern UI, and high performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-glass"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;