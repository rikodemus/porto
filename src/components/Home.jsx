import React, { useState } from 'react';
import backgroundImage from '../assets/dani.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-gray-200 border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center">
            <img src={backgroundImage} alt="Logo" className="h-10 w-10 mr-3 rounded-full" />
            <div className="text-3xl font-bold">Portofolio</div>
          </div>
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <Link to="/"><li><a hclassName="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-xl font-bold md:hover:text-gray-600 md:p-0 text-xl font-bold">Profile</a></li></Link>
              <Link to="/projects"><li><a className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 hover:text-xl hover:font-bold">Projects</a></li></Link>
              <Link to="/contact"><li><a className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 hover:text-xl hover:font-bold">Contact</a></li></Link>
              <Link to="/pictures"><li><a className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 hover:text-xl hover:font-bold">Pictures</a></li></Link>
            </ul>
          </div>
        </div>
      </nav>

      <section className="relative bg-cover bg-center my-5 h-screen mx-14 rounded-xl border-4 border-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-6xl font-bold">Portofolio</h1>
          <p className="mt-4 max-w-xl">
            Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.
          </p>
          <Link to="/pictures"> 
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded">View More</button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white border my-10 radius-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <img src={backgroundImage} alt="Interior" className="rounded-lg border-4 border-black shadow-lg" />
            </div>
            <div className="w-full md:w-1/3 px-4 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 border-4 border-black">About Me</h2>
              <p className="text-gray-700 mb-4">Currently pursuing a bachelor's degree in Information Systems, focusing on Business Intelligence at BINUS University. Passionate in the art of transforming data into insights for strategic decisions. Enthusiastic about forging connections with new individuals and embarking on novel experiences..</p>
              <p className="text-gray-700 mb-4">Frugal Living.</p>
              <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded">Click For Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div> 
            <h2 className="text-4xl font-bold text-center mb-5">SKILLS</h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/4 px-4 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Great Design</h3>
              <p className="text-gray-600">Strong design skills are essential for professionals in graphic design, UI/UX design, marketing, and branding.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Coding Lover</h3>
              <p className="text-gray-600">passionate about programming, problem-solving, and creating innovative solutions through code.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Pixel Perfect</h3>
              <p className="text-gray-600">delivering high-quality, visually appealing, and professional UI designs, ensuring that developers implement the design with precision.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Ultra Responsive</h3>
              <p className="text-gray-600">ensures that a website or application adapts flawlessly to any screen size, device, or resolution while maintaining excellent user experience and performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;