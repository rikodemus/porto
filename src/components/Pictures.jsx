import React, { useState } from 'react';
import backgroundImage from '../assets/dani.jpeg';
import backgroundImage1 from '../assets/con1 (1).jpeg';
import backgroundImage2 from '../assets/con1 (2).jpeg';
import backgroundImage3 from '../assets/con1 (3).jpeg';
import mount1 from '../assets/mo1 (1).jpg';
import mount2 from '../assets/mo1 (2).jpg';
import mount3 from '../assets/mo1 (3).jpg';
import mount4 from '../assets/mo1 (4).jpg';
import mount5 from '../assets/mo1 (5).jpg';
import mount6 from '../assets/mo1 (6).jpg';
import { Link } from 'react-router-dom';
import MountainModals from './MountainModals';

const Pictures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
              <li><Link to="/" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold">Profile</Link></li>
              <li><a href="#lifestyle" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold">Projects</a></li>
              <li><a href="#news" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold">Contact</a></li>
              <li><Link to="/pictures" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-xl font-bold md:hover:text-gray-600 md:p-0">Pictures</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 text-center text-2xl font-bold border-2 mt-5 shadow-2xl rounded-lg">  
        Mountain Pic's
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount1} alt="Photo 1" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 1
            </h1>
            <div className='flex justify-center'> 
              <button className="mb-4 px-1 py-1 text-sm bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black" onClick={() => handleOpenModal(mount1)}>Click For Full Photo</button>
            </div> 
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount2} alt="Photo 2" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 2
            </h1>
            <div className='flex justify-center'> 
              <button className="mb-4 px-1 py-1 text-sm bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black" onClick={() => handleOpenModal(mount2)}>Click For Full Photo</button>
            </div> 
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount3} alt="Photo 3" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 3
            </h1>
            <div className='flex justify-center'> 
              <button className="mb-4 px-1 py-1 text-sm bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black" onClick={() => handleOpenModal(mount3)}>Click For Full Photo</button>
            </div> 
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount4} alt="Photo 4" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 4
            </h1>
            <div className='flex justify-center'> 
              <button className="mb-4 px-1 py-1 text-sm bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black" onClick={() => handleOpenModal(mount4)}>Click For Full Photo</button>
            </div> 
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount5} alt="Photo 5" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 5
            </h1>
            <div className='flex justify-center'> 
              <button className="mb-4 px-1 py-1 text-sm bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black" onClick={() => handleOpenModal(mount5)}>Click For Full Photo</button>
            </div> 
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount6} alt="Photo 6" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 6
            </h1>
            <div className='flex justify-center'> 
              <button className="mb-4 px-1 py-1 text-sm bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black" onClick={() => handleOpenModal(mount6)}>Click For Full Photo</button>
            </div> 
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center text-2xl font-bold border-2 mt-11 shadow-2xl rounded-lg mb-5 ">
        Exclusive Content
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={backgroundImage1} alt="Photo 1" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Smile Me
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={backgroundImage2} alt="Photo 2" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Smile Me (2)
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={backgroundImage3} alt="Photo 3" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Thrifting Era
            </h1>
          </div>
        </div>
        <div className='flex justify-center'> 
          <button className="mt-6 px-2 py-2 bg-black hover:text-black hover:bg-white text-white font-semibold rounded-lg border-2 border-black">ORDER ME</button>
        </div>
      </div>

      <MountainModals isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={selectedImage} />
    </div>
  );
}

export default Pictures;