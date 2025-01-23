import WeatherImage from '../assets/weather.PNG'
import ChatbotImage from '../assets/chatbot.PNG'
import EcommerceImage from '../assets/ecommerce.PNG'
function Projects() {
  
  
    const projects = [
        {
          id: 1,
          name: "Weather App",
          technologies :"React, JavaScript, Tailwind CSS",
          image : WeatherImage ,
          github : "https://weather-app-six-phi-76.vercel.app/"
        },
        {
            id: 2,
            name: "E-commerce App",
            technologies :"React, JavaScript, Tailwind CSS, Firebase",
            image : EcommerceImage,
            github : "https://www.importexx.shop/"
          },
          {
            id: 3,
            name: "Chatbot",
            technologies :"React, JavaScript, HTML, CSS",
            image : ChatbotImage,
            github : "https://github.com/Umar53067/chatbot-app"
          }
    ]
  
  
    return (
    <div className='bg-black text-white py-20' id="projects">
    <div className='container mx-auto px-8 md-px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
                <div key={project.id} 
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={project.image} alt={project.name} 
                    className="w-full h-64 object-cover rounded-t-lg my-4"/>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-300 mb-4">{project.technologies}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">View Project</a>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Projects