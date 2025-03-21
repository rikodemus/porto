import React, { useState } from 'react';
import backgroundImage from '../assets/richo.jpg';
import backgroundImage1 from '../assets/porto1.jpeg';
import backgroundImage2 from '../assets/porto2.jpeg';
import backgroundImage3 from '../assets/porto3.jpeg';

import { Link } from 'react-router-dom';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#121212] min-h-screen'>
      <nav className="bg-[#121212] border-gray-200 border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center">
            <img src={backgroundImage} alt="Logo" className="h-10 w-10 mr-3 rounded-full" />
            <div className="text-3xl font-bold text-white">Richo's Portofolio</div>
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
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#121212] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#121212]">
              <li><Link to="/" className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold">Profile</Link></li>
              <li><Link to="/projects"><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold text-xl font-bold">Projects</a></Link></li>
              <li><Link to="/contact"><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold">Contact</a></Link></li>
              <li><Link to="/pictures" className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-gray-600 md:p-0">Pictures</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 text-center text-2xl font-bold border-2 mt-5 shadow-2xl rounded-lg bg-[#121212] text-white">  
        Projects So Far
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-lg overflow-hidden shadow-lg bg-[#121212]">
            <img src={backgroundImage1} alt="Photo 1" className="w-full h-64 object-cover border rounded" />
            <h1 className='font-extrabold text-white text-center text-lg py-2'>
              Project 1
            </h1>
            <p className="text-lg font-extralight mb-4 text-white">
              Porto Web
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-[#121212]">
            <img src={backgroundImage2} alt="Photo 2" className="w-full h-64 object-cover border rounded" />
            <h1 className='font-extrabold text-white text-center text-lg py-2'>
              Project 2
            </h1>
            <p className="text-lg font-extralight mb-4 text-white">
              Mobile Apps
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-[#121212]">
            <img src={backgroundImage3} alt="Photo 3" className="w-full h-64 object-cover border rounded" />
            <h1 className='font-extrabold text-white text-center text-lg py-2'>
              Project 3
            </h1>
            <p className="text-lg font-extralight mb-4 text-white">
              Designing web ( Figma )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;