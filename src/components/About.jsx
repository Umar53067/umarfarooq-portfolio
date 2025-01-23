function About() {
  return (
    <div className='bg-black text-white py-20' id="about">
        <div className='container mx-auto px-8 md-px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src='/hero.jpg' alt="" loading="lazy"
                className='w-72 h-80 object-cover mb-8 md:mb-0'/>
                <div className="flex-1">
                <p>
                    I am a front-end web developer. 
                    I can provide clean code and pixel perfect design. 
                    I also make the website more & more interactive with web animations.
                </p>
                <div className="space-y-4 p-4 sm:p-6">
    {/* Skills Section */}
    <div className="max-w-2xl mx-auto">
        {/* Skill Template */}
        <div className="flex items-center mb-3 sm:mb-4">
            <label className="w-1/3 sm:w-2/12 text-sm sm:text-base pr-2">HTML & CSS</label>
            <div className="grow bg-gray-800 rounded-full h-2 sm:h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 sm:h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-10/12">
                </div>
            </div>
        </div>

        {/* Repeat similar structure for other skills */}
        <div className="flex items-center mb-3 sm:mb-4">
            <label className="w-1/3 sm:w-2/12 text-sm sm:text-base pr-2">Tailwind CSS</label>
            <div className="grow bg-gray-800 rounded-full h-2 sm:h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 sm:h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-11/12">
                </div>
            </div>
        </div>

        {/* Javascript section */}
        <div className="flex items-center mb-3 sm:mb-4">
            <label className="w-1/3 sm:w-2/12 text-sm sm:text-base pr-2">Javascript</label>
            <div className="grow bg-gray-800 rounded-full h-2 sm:h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 sm:h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-11/12">
                </div>
            </div>
        </div>

        {/* React section */}
        <div className="flex items-center mb-3 sm:mb-4">
            <label className="w-1/3 sm:w-2/12 text-sm sm:text-base pr-2">React.js</label>
            <div className="grow bg-gray-800 rounded-full h-2 sm:h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 sm:h-2.5 rounded-full
                transform transition-transform duration-300 hover:scale-105 w-10/12">
                </div>
            </div>
        </div>

        {/* Experience/Stats Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div>
                <h3 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    1+
                </h3>
                <p className="text-xs sm:text-base">Years Experience</p>
            </div>
            <div>
                <h3 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    10+
                </h3>
                <p className="text-xs sm:text-base">Projects Completed</p>
            </div>
            <div>
                <h3 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    2+
                </h3>
                <p className="text-xs sm:text-base">Happy Clients</p>
            </div>
        </div>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About