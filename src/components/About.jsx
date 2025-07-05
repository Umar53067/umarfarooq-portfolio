function About() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20 transition-colors duration-300" id="about">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="umar.jpg"
            alt="Umar Farooq"
            loading="lazy"
            className="w-72 h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed">
              I am a MERN stack developer with a strong foundation in both front-end and back-end technologies. I build responsive, high-performance web applications using MongoDB, Express.js, React, and Node.js. I focus on writing clean, maintainable code and creating seamless user experiences with interactive designs and animations.
            </p>

            {/* Skills Section */}
            <div className="space-y-5">
              {[
                { label: "HTML & CSS", width: "w-10/12" },
                { label: "Tailwind CSS", width: "w-11/12" },
                { label: "Javascript", width: "w-11/12" },
                { label: "React.js", width: "w-10/12" },
                { label: "Node.js", width: "w-9/12" },
                { label: "Express.js", width: "w-11/12" },
                { label: "MongoDB", width: "w-10/12" },
              ].map((skill) => (
                <div className="flex items-center gap-4" key={skill.label}>
                  <span className="w-28 sm:w-32 text-sm sm:text-base">{skill.label}</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-105 ${skill.width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Stats Section */}
        {/* 
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "2+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {stat.value}
              </h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div> 
        */}
      </div>
    </div>
  );
}

export default About;
