import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

function Contact() {
  return (
    <div className='bg-black text-white py-20' id="contact">
    <div className='container mx-auto px-8 md-px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact With Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className="flex-1">
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                '>Let's Talk</h3>
                <p>I'm open to disscuss web development projects or partnership opportunities</p>
                <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block mr-2 text-green-400'/>
                    <a href="mailto:umar53067@gmail.com"
                    className='hover:underline'
                    >
                        umar53067@gmail.com
                    </a>
                </div>
                <div className='mb-4 mt-8'>
                    <FaPhone className='inline-block mr-2 text-green-400'/>
                    <span>+92-308-9184744</span>
                </div>
                <div className='mb-4 mt-8'>
                    <FaMapMarkedAlt className='inline-block mr-2 text-green-400'/>
                    <span>Lahore, Pakistan</span>
                </div>
            </div>
            <div className="flex-1 w-full">
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        className='w-full rounded p-2 bg-gray-800 border-gray-600 focus:border-green-400 focus:outline-none'
                        placeholder='Enter your name'/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        className='w-full rounded p-2 bg-gray-800 border-gray-600 focus:border-green-400 focus:outline-none'
                        placeholder='Enter your email'/>
                    </div>
                    <div>
                        <label htmlFor="name">Message</label>
                        <textarea type="text" 
                        className='w-full rounded p-2 bg-gray-800 border-gray-600 focus:border-green-400 focus:outline-none'
                        rows="5"
                        placeholder='Enter your message'/>
                    </div>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-8 rounded-full
                     transform transition-transform  duration-300  hover:scale-105">Send</button>
                </form>
            </div>
        </div>
        </div>
    </div>
)
}

export default Contact