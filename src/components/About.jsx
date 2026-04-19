function About() {
  return (
    <section id="about" className="py-24 relative">
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Me<span className="text-accent">.</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full"></div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE + CARD */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="umar.jpg"
                alt="Umar Farooq"
                className="relative w-72 h-80 object-cover rounded-2xl shadow-soft-3d border border-white/10 transition-transform duration-500 group-hover:-translate-y-2"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl">
                <p className="text-sm font-medium text-white">
                  C# .NET &<br /> React Developer
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="space-y-8">

            {/* Intro */}
            <div>
              <h3 className="text-xl font-medium text-white mb-3">
                Who I Am
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am a .NET & React Developer focused on building scalable backend systems
                and modern web applications. I currently work on real-world healthcare systems,
                developing APIs, business logic, and production-level features.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-xl font-medium text-white mb-3">
                What I Do
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I specialize in ASP.NET MVC, Web APIs, and React-based frontends.
                My focus is on clean architecture, performance, and building systems
                that solve real business problems.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-medium text-white mb-3">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  ".NET",
                  "ASP.NET MVC",
                  "Web API",
                  "React",
                  "Tailwind CSS",
                  "SQL Server",
                  "Firebase",
                  "Supabase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-md glass border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-8 text-center divide-x divide-white/10 glass-card py-8">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "Real", label: "Production Systems" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">
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