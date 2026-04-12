function Services() {
  const services = [
    {
      id: "01",
      title: "Full-Stack Web Application Development (.NET + React)",
      description:
        "Building scalable web applications using .NET (MVC/Web API) for backend and React for modern, responsive frontends with clean architecture.",
    },
    {
      id: "02",
      title: ".NET Backend & API Development",
      description:
        "Designing and developing secure, high-performance REST APIs using ASP.NET Core with proper layering, validation, and business logic.",
    },
    {
      id: "03",
      title: "Enterprise Application Development (MVC)",
      description:
        "Developing enterprise-level applications using ASP.NET MVC with structured architecture, role-based systems, and production-ready features.",
    },
    {
      id: "04",
      title: "Frontend Development (React + Tailwind / Bootstrap)",
      description:
        "Creating fast, responsive, and user-friendly interfaces using React along with Tailwind CSS or Bootstrap for modern UI design.",
    },
    {
      id: "05",
      title: "Authentication & Authorization Systems",
      description:
        "Implementing secure authentication and role-based access control using JWT, Identity, and session-based authentication in .NET applications.",
    },
    {
      id: "06",
      title: "Database Design & Integration",
      description:
        "Designing and integrating databases using SQL Server, Firebase, or Supabase with optimized queries and efficient data handling.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white dark:bg-black text-black dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading (LEFT ALIGNED) */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            My Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            I build scalable backend systems, modern frontends, and real-world business applications using .NET and React.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl border border-transparent 
              hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg"
            >

              {/* Number */}
              <span className="absolute top-4 right-4 text-4xl font-bold opacity-10">
                {service.id}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;