function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-black text-black dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE + CARD */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="umar.jpg"
                alt="Umar Farooq"
                className="w-72 h-80 object-cover rounded-2xl shadow-xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium">
                  C# .NET &<br /> React Developer
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="space-y-8">

            {/* Intro */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Who I Am
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a .NET & React Developer focused on building scalable backend systems
                and modern web applications. I currently work on real-world healthcare systems,
                developing APIs, business logic, and production-level features.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What I Do
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in ASP.NET MVC, Web APIs, and React-based frontends.
                My focus is on clean architecture, performance, and building systems
                that solve real business problems.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  ".NET",
                  "ASP.NET MVC",
                  "Web API",
                  "React",
                  "Tailwind CSS",
                  "Bootstrap",
                  "SQL Server",
                  "Firebase",
                  "Supabase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "Real", label: "Production Systems" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;