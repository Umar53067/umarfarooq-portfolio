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
    <section
      id="experience"
      className="bg-white dark:bg-black text-black dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading (CONSISTENT LEFT STYLE) */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            My professional journey building scalable systems, APIs, and real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 space-y-10">

          {experiences.map((exp, index) => (
            <div key={index} className="relative group">

              {/* ICON */}
              <div className="absolute -left-[18px] top-2 bg-white dark:bg-black p-1 rounded-full">
                <FaBriefcase className="text-green-400 text-lg" />
              </div>

              {/* CARD */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl 
              border border-transparent hover:border-gray-300 dark:hover:border-gray-700 
              transition-all duration-300 hover:shadow-xl">

                {/* Role */}
                <h3 className="text-lg md:text-xl font-semibold">
                  {exp.role}
                </h3>

                {/* Company + Duration */}
                <p className="text-sm text-green-400 font-medium mt-1">
                  {exp.company} • {exp.duration}
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 leading-relaxed">
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