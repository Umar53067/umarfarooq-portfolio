function Hero() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        
        {/* Main Content */}
        <div className="flex flex-col items-center text-center">
          
          {/* Small Intro Badge */}
          <span className="text-sm mb-4 px-4 py-1 rounded-full border border-gray-300 dark:border-gray-700">
            Available for freelance work
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Umar Farooq
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-semibold">
              .NET & React Developer
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400 text-sm md:text-base">
            I build scalable web applications and enterprise-level systems with clean architecture,
            modern UI, and high performance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
            <a
              href="#contact"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-full 
              transform transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Connect with me
            </a>

            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-full 
              transform transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Download Resume
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;