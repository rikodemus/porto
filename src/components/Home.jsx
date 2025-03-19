import React, { useState } from 'react';
import backgroundImage from '../assets/richo.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#121212]'>
      <nav className="bg-[#121212]">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center">
            <img src={backgroundImage} alt="Logo" className="h-10 w-10 mr-3 rounded-full" />
            <div className="text-3xl font-bold text-white">Richo's Portofolio</div>
          </div>
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
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
            <ul className="flex flex-col p-4 mt-4 border rounded-lg bg-[#121212] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#121212]">
              <Link to="/"><li><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded md:hover:bg-transparent md:border-0 text-xl font-bold  hover:text-white md:p-0">Profile</a></li></Link>
              <Link to="/projects"><li><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded md:hover:bg-transparent md:border-0 font-bold  hover:text-white md:p-0  hover:font-bold">Projects</a></li></Link>
              <Link to="/contact"><li><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded  md:hover:bg-transparent md:border-0 font-bold hover:text-white md:p-0 hover:font-bold">Contact</a></li></Link>
              <Link to="/pictures"><li><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded md:hover:bg-transparent md:border-0 font-bold hover:text-white md:p-0 hover:font-bold">Pictures</a></li></Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 text-2xl font-bold border-2 mt-5 shadow-2xl rounded-lg">
        <h1 className="text-3xl text-white font-bold">Gregorius Richo</h1>
        <Link to='/projects'><button className="mt-6 px-16 py-3 hover:bg-[#FFAA00] bg-transparent border text-white font-semibold rounded">Projects</button></Link>
        <div className="inset-0 opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-end text-white text-right">
          <h2 className="text-2xl font-semibold text-[#FFAA00] mt-2">Web Developer</h2>
          <p className="mt-4 max-w-xl">
            Passionate about creating modern and responsive web applications. Skilled in both frontend and backend development.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-3 border hover:bg-[#FFAA00] text-white font-semibold rounded">Contact Me</button>
          </Link>
        </div>
      </div>

      <section className="py-12 bg-[#121212] my-10 radius-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <img src={backgroundImage} alt="Interior" className="rounded-lg border-4 border-white shadow-lg" />
            </div>
            <div className="w-full md:w-1/3 px-4 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 text-[#FFAA00]">ABOUT ME</h2>
              <p className="text-white mb-4 font-serif">I am a 7th-semester Information Systems student with a strong interest in system development, data visualization, and UI/UX programming. Currently, I am enhancing my skills in programming, web design, and data management to support data-driven decision-making.</p>
              <Link to="/pictures"><button className="mt-6 px-6 py-3 border text-white font-semibold hover:bg-[#FFAA00] rounded">Click For Details</button></Link>
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
              <p className="text-gray-600">Passionate about programming, problem-solving, and creating innovative solutions through code.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Pixel Perfect</h3>
              <p className="text-gray-600">Delivering high-quality, visually appealing, and professional UI designs, ensuring that developers implement the design with precision.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Ultra Responsive</h3>
              <p className="text-gray-600">Ensures that a website or application adapts flawlessly to any screen size, device, or resolution while maintaining excellent user experience and performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;