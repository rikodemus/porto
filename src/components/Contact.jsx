import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/richo.jpg';
import backgroundImage1 from '../assets/radit.jpeg';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#121212] min-h-screen text-white'>
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
              <li><Link to="/projects"><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold">Projects</a></Link></li>
              <li><Link to="/contact"><a className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 hover:text-xl hover:font-bold text-xl font-bold">Contact</a></Link></li>
              <li><Link to="/pictures" className="block py-2 pl-3 pr-4 text-[#FFAA00] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-xl font-bold md:hover:text-gray-600 md:p-0">Pictures</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between border-x">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
            <p className="mb-4">Silakan chat jika ingin mengenal saya lebih dalam.</p>
            <p className="mb-4">Untuk menghubungi saya secara langsung silakan hubungi whatsapp.</p>
            <p className="mb-4">Saya dengan menekan tombol di bawah ini.</p>
            <a href="https://wa.me/628112461984" className="bg-green-500 text-white font-bold py-2 px-4 rounded-full inline-block hover:bg-green-400">Hubungi Whatsapp saya</a>
          </div>
          <div className="w-full md:w-1/2 p-4 border-x">
            <h2 className="text-3xl font-bold mb-4">Email & Whatsapp</h2>
            <p className="mb-2"><strong>Email:</strong> gregoriusricho8@gmail.com</p>
            <p className="mb-2"><strong>Whatsapp:</strong> +62 821 1246 1984</p>
            <p className="mb-2"><strong>Address:</strong> Perumahan Telaga Metro</p>
            <p className="mb-2"><strong>DOB:</strong> 18 November 2003</p>
          </div>
        </div>
      </div>

      <section className="relative bg-cover bg-center my-5 h-72 rounded-xl border-4 border-white" style={{ backgroundImage: `url(${backgroundImage1})` }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-6xl font-bold">Gregorius Richo</h1>
          <p className="mt-4 max-w-xl">
            Ora Et Labora.
          </p>
        </div>
      </section>

      <div className="w-full">
        <h2 className="text-3xl font-bold mb-9 text-center">My Location</h2>
        <div className="w-full h-96">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.45235965254096!2d106.7629582084439!3d-6.169375993926348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7ade1bb43c3%3A0x35a926044ac1ba2e!2sSunrise%20Garden%2C%20Jl.%20Panjang%2C%20RT.15%2FRW.7%2C%20Kedoya%20Utara%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011520!5e0!3m2!1sid!2sid!https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.6773387924317!2d106.762966!3d-6.169659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f783922fbdb9%3A0x3118202bdf4c3693!2sJovani!5e0!3m2!1sid!2sid!4v1741681589464!5m2!1sid!2sid!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;