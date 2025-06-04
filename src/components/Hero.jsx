function Hero() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-16 text-center transition-colors duration-300">
      <h1 className="text-4xl font-bold">
        I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Umar Farooq
        </span>
        ,<br className="md:hidden" /> MERN Stack Developer
      </h1>

      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full
          transform transition-transform duration-300 hover:scale-105"
        >
          <a href="#contact">Connect with me</a>
        </button>

        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-full
          transform transition-transform duration-300 hover:scale-105"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
