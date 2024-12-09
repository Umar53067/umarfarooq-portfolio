import heroImage from "../assets/hero.jpg";
function Hero() {
  return (
    <div className="bg-black text-white py-16 text-center">
      <img
        src={heroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Umar Farooq
        </span>
        ,<br className="md:hidden" /> React Developer
      </h1>
      <p className="text-lg mt-4 text-gray-300">
        I am a front-end web developer. I can provide clean code and pixel
        perfect design. I also make the website more & more interactive
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full
       transform transition-transform  duration-300  hover:scale-105"
        >
          <a href="#contact">Connect with me</a>
        </button>
        <a
          href="/resume.pdf" 
          download="UmarFarooq_Resume.pdf" 
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
