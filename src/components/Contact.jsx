/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20 transition-colors duration-300" id="contact">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact With Me</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-2">
                Let's Talk
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm open to discuss web development projects or partnership opportunities.
              </p>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 mr-3 text-lg" />
                <a href="mailto:umarfarooq53067@gmail.com" className="hover:underline">
                  umarfarooq53067@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-green-400 mr-3 text-lg" />
                <span>+92-308-9184744</span>
              </div>

              <div className="flex items-center">
                <FaMapMarkedAlt className="text-green-400 mr-3 text-lg" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white focus:border-green-400 focus:outline-none transition-colors"
                  rows="5"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-10 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
