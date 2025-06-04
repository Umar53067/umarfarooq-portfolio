function Services() {
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Application Development",
      description: "Building scalable and responsive web applications using MongoDB, Express.js, React, and Node.js (MERN stack)."
    },
    {
      id: 2,
      title: "RESTful API Design & Integration",
      description: "Creating secure and efficient RESTful APIs using Express.js and Node.js, and integrating them seamlessly with the front-end."
    },
    {
      id: 3,
      title: "Database Design with MongoDB",
      description: "Designing and managing NoSQL databases using MongoDB to store, retrieve, and manage data efficiently."
    },
    {
      id: 4,
      title: "Authentication & Authorization",
      description: "Implementing secure user authentication and role-based access control using JWT, bcrypt, and middleware in Node.js."
    },
    {
      id: 5,
      title: "Deployment & Hosting",
      description: "Deploying MERN applications to platforms like Vercel, Render, or Heroku with proper environment configuration."
    }
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20 transition-colors duration-300" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 dark:bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
