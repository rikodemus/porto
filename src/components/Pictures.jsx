import React from 'react';
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

const Pictures = () => {
  return (
    <div>
      <nav className="flex ml-10 justify-between items-center p-4 bg-white border-gray-200 border-b">
        <div className="text-3xl font-bold border-4 border-black">Portofolio</div>
        <ul className="flex space-x-6 mr-10">
          <li><a href="/" className="text-gray-800 hover:text-lg hover:font-bold">Profile</a></li>
          <li><a href="#lifestyle" className="text-gray-800 hover:text-lg hover:font-bold">Projects</a></li>
          <li><a href="#news" className="text-gray-800 hover:text-lg hover:font-bold">Contact</a></li>
          <li><a href="/pictures" className="text-gray-800 text-lg  font-bold">Pictures</a></li>
        </ul>
      </nav>

      <div className="container mx-auto px-4 py-8 text-center text-2xl font-bold border-2 mt-5 shadow-2xl rounded-lg">  
        Mountain Pic's
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount1} alt="Photo 1" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 1
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount2} alt="Photo 2" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 2
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount3} alt="Photo 3" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 3
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount4} alt="Photo 4" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 4
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount5} alt="Photo 5" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 5
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={mount6} alt="Photo 6" className="w-full h-48 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Mountain 6
            </h1>
          </div>
          {/* Add more photos as needed */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center text-2xl font-bold border-2 mt-11 shadow-2xl rounded-lg mb-5 ">
        Exclusive Content
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={backgroundImage1} alt="Photo 1" className="w-full h-64 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Smile Me
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={backgroundImage2} alt="Photo 2" className="w-full h-64 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Smile Me (2)
            </h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={backgroundImage3} alt="Photo 3" className="w-full h-64 object-cover" />
            <h1 className='font-bold text-black text-center text-lg py-2'>
                Thrifting Era
            </h1>
          </div>
          {/* Add more photos as needed */}
        </div>
        <div className='flex justify-center'> 
        <button className="mt-6 px-2 py-2 bg-black hover:text-black hover:bg-white  text-white font-semibold rounded-lg border-2 border-black">ORDER ME</button>
        </div>
      </div>

    </div>
  );
}

export default Pictures;