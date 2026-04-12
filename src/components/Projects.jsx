import WeatherImage from '../assets/weather.PNG'
import AdminImage from '../assets/admin.PNG'
import EcommerceImage from '../assets/ecommerce.PNG'

function Projects() {
  const projects = [
    {
      id: 2,
      name: "E-Commerce Store",
      technologies: "React, Firebase, Tailwind CSS",
      image: EcommerceImage,
      github: "https://www.importexx.shop/",
      type: "Full Stack"
    },
    {
      id: 3,
      name: "MERN E-Commerce Admin",
      technologies: "React, Express, MongoDB, Tailwind CSS",
      image: AdminImage,
      github: "https://github.com/Umar53067/ecommerce-mern",
      type: "Full Stack"
    },
    {
      id: 4,
      name: "Blog Platform",
      technologies: "React, Express, MongoDB, Tailwind CSS",
      image: AdminImage,
      github: "https://github.com/Umar53067/blog-mern",
      type: "Full Stack"
    }
  ]

  return (
    <section
  id="projects"
  className="bg-white dark:bg-black text-black dark:text-white py-24 transition-colors duration-300"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

    {/* Heading (LEFT aligned like About/Services) */}
    <div className="mb-16 max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        My Projects
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
        Real-world applications I’ve built using .NET, React, and modern web technologies.
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden 
          border border-transparent hover:border-gray-300 dark:hover:border-gray-700 
          transition-all duration-300 hover:shadow-xl"
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden">

            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500" />

            {/* CTA (always centered on hover) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 bg-gradient-to-r from-green-400 to-blue-500 
                text-white font-semibold py-2 px-5 rounded-full transition duration-300"
              >
                View Project
              </a>
            </div>

          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-3">

            {/* TYPE */}
            <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
              {project.type}
            </span>

            {/* TITLE */}
            <h3 className="text-lg font-semibold leading-snug">
              {project.name}
            </h3>

            {/* TECH */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.technologies}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
  )
}

export default Projects