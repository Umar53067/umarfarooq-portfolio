import WeatherImage from '../assets/weather.PNG'
import AdminImage from '../assets/admin.PNG'
import EcommerceImage from '../assets/ecommerce.PNG'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Store",
      description: "A full-featured e-commerce platform built with React and Firebase. Features a modern UI, real-time inventory updates, secure checkout, and comprehensive state management.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: EcommerceImage,
      liveUrl: "https://www.importexx.shop/",
      github: "#",
      type: "Full Stack"
    },
    {
      id: 2,
      name: "MERN E-Commerce Admin",
      description: "Comprehensive admin dashboard for managing products, orders, and users. Includes robust API integrations, data visualization, and role-based access control.",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      image: AdminImage,
      liveUrl: "#",
      github: "https://github.com/Umar53067/ecommerce-mern",
      type: "Full Stack"
    },
    {
      id: 3,
      name: "Blog Platform",
      description: "A modern content management system for publishing articles. Built with a focus on performance, featuring rich text editing, optimized image delivery, and a responsive reading experience.",
      technologies: ["React", "Express", "MongoDB"],
      image: AdminImage,
      liveUrl: "#",
      github: "https://github.com/Umar53067/blog-mern",
      type: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Projects<span className="text-accent">.</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Real-world applications I’ve built using .NET, React, and modern web technologies.
          </p>
        </div>

        {/* Projects Container */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center group`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-3/5 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-accent/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                
                <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10 shadow-soft-3d group-hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-6">
                
                {/* Type Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent">
                  {project.type}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 text-sm font-medium rounded-lg bg-surface border border-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-glass"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                      <FaGithub size={18} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects