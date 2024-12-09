import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
            <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Umar Farooq</h3>
            <p className="text-gray-400">I am React Developer specializing in Single Page Applications & Responsive Web Design.</p>
            </div>

            <div className="flex-1 w-full">
                <form className="flex items-center justify-center">
                    <input type="email" placeholder="Enter your email" 
                    className="w-full p-2 border border-gray-600  rounded-l-lg  bg-gray-800
                    inline-block    focus:outline-none focus:border-green-400" />
                    <button className=" inline-block  bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4  rounded-r-lg">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p >Copyright &copy; { new Date().getFullYear()} Umar Farooq. All rights reserved. </p>
        
        <div className="flex space-x-4 my-4 md:my-0 ">
            <a href="http://">
              <FaFacebook className="text-gray-400 hover:text-white"/>
            </a>
            <a href="http://">
              <FaLinkedin className="text-gray-400 hover:text-white"/>
            </a>
            <a href="http://">
              <FaMedium className="text-gray-400 hover:text-white"/>
            </a>
            <a href="http://">
              <FaGithub className="text-gray-400 hover:text-white"/>
            </a>
        </div>
        <div className="space-x-4">
            <a href="http://">
              Privacy
            </a>
            <a href="http://">
              Terms of service
            </a>
        </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer