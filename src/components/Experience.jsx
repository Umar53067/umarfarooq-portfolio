import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "IntelDevs",
      duration: "July 2024 – September 2024",
      description:
        "Worked on frontend development, building responsive UI components and improving user experience using modern JavaScript frameworks."
    },
    {
      role: ".NET Intern",
      company: "Lancers Tech",
      duration: "Jan 2025 – March 2025",
      description:
        "Worked on backend development including APIs, database integration, and core business logic using ASP.NET technologies."
    },
    {
      role: ".NET Developer",
      company: "Lancers Tech",
      duration: "March 2025 – February 2026",
      description:
        "Built and maintained scalable backend systems, REST APIs, and production-level enterprise features with clean architecture."
    },
    {
      role: ".NET Developer",
      company: "Instacare.pk",
      duration: "March 2026 – Present",
      description:
        "Currently working on healthcare systems, designing backend services, APIs, and system architecture for real production environments."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
            Experience<span className="text-accent">.</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mb-6 mx-auto md:mx-0"></div>
          <p className="text-gray-400 text-lg text-center md:text-left">
            My professional journey building scalable systems, APIs, and real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-white/10 pl-8 space-y-12 ml-4 md:ml-0">

          {experiences.reverse().map((exp, index) => (
            <div key={index} className="relative group">

              {/* Glowing Dot */}
              <div className="absolute -left-[41px] top-5 w-5 h-5 rounded-full bg-background border-4 border-accent shadow-[0_0_15px_rgba(0,112,243,0.5)]"></div>

              {/* CARD */}
              <div className="glass-card p-6 md:p-8">

                {/* Header: Role and Duration */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-gray-300 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/5">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;