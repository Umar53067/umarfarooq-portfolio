
function Services() {

    const services = [
        {
          id: 1,
          title: "Custom React Component Development",
          description: "Creating reusable and optimized components tailored to meet specific functionality and design requirements."
        },
        {
          id: 2,
          title: "Single Page Application (SPA) Development",
          description: "Building fast and responsive SPAs using React to provide users with an app-like experience on the web."
        },
        {
          id: 3,
          title: "State Management with Redux / Context API",
          description: "Implementing state management solutions like Redux or Context API for handling complex application states."
        }
      ];
      


    return (
    <div className='bg-black text-white py-20' id="services">
        <div className='container mx-auto px-8 md-px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map((service) => (
                    <div key={service.id} 
                    className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="text-right text-2xl text-transparent font-bold
                        bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                            {service.id}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{service.title}</h3>
                        <p className="mt-2 text-gray-300">{service.description}</p>
                        <a href="#" className="mt-2 text-green-400 hover:text-blue-500">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services