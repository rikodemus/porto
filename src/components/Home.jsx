import React from 'react';
import backgroundImage from '../assets/dani.jpeg';

const Home = () => {
  return (
    <div>
      <nav className="flex ml-10 justify-between items-center p-4 bg-white border-gray-200">
        <div className="text-3xl font-bold ">Portofolio</div>
        <ul className="flex space-x-6 mr-10">
          <li><a href="#product" className="text-gray-800 hover:text-gray-600">Profile</a></li>
          <li><a href="#lifestyle" className="text-gray-800 hover:text-gray-600">Projects</a></li>
          <li><a href="#news" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>

      <section className="relative bg-cover bg-center h-screen mx-14 rounded-xl" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-6xl font-bold">Portofolio</h1>
          <p className="mt-4 max-w-xl">
            Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded">View More</button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-2/3 px-4">
              <img src={backgroundImage} alt="Interior" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/3 px-4 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 mb-4">Currently pursuing a bachelor's degree in Information Systems, focusing on Business Intelligence at BINUS University. Passionate in the art of transforming data into insights for strategic decisions. Enthusiastic about forging connections with new individuals and embarking on novel experiences..</p>
              <p className="text-gray-700 mb-4">Frugal Living.</p>
              <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded">Click For Details</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;