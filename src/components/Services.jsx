function Services() {
  const services = [
    {
      id: "01",
      title: "Full-Stack Development",
      description:
        "Building scalable web applications using .NET for backend and React for modern, responsive frontends with clean architecture.",
    },
    {
      id: "02",
      title: ".NET Backend & APIs",
      description:
        "Designing secure, high-performance REST APIs using ASP.NET Core with proper layering, validation, and business logic.",
    },
    {
      id: "03",
      title: "Enterprise Systems",
      description:
        "Developing enterprise-level applications using ASP.NET MVC with structured architecture, and production-ready features.",
    },
    {
      id: "04",
      title: "Frontend Engineering",
      description:
        "Creating fast, responsive, and user-friendly interfaces using React along with Tailwind CSS for modern UI design.",
    },
    {
      id: "05",
      title: "Authentication Systems",
      description:
        "Implementing secure authentication and role-based access control using JWT, Identity, and session-based logic.",
    },
    {
      id: "06",
      title: "Database Integration",
      description:
        "Designing and integrating databases using SQL Server, Firebase, or Supabase with optimized queries.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Services<span className="text-accent">.</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl">
            I build scalable backend systems, modern frontends, and real-world business applications using .NET and React.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group glass-card p-8 relative overflow-hidden"
            >
              
              {/* Subtle hover background glow */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-accent/20 rounded-full blur-[50px] transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

              {/* Number */}
              <div className="text-5xl font-black text-white/[0.03] absolute top-4 right-4 select-none">
                {service.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;