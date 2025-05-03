import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Home = ({ darkMode }) => {
  return (
    <div className="w-full p-5 md:p-10">
      {/* Top section with text and image */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Text section */}
        <div className="flex flex-col gap-3 md:p-10">
          <h1 className="text-2xl font-semibold">Welcome to Pak Ink Publications</h1>
          <h1 className="text-2xl font-semibold">Empowering Ideas, Publishing Dreams.</h1>
          <p className="max-w-md text-gray-400">
            At PAK Ink Publications, we believe every idea has the power to inspire change.
            We are dedicated to publishing books.
          </p>
        </div>

        {/* Image section */}
        <div className="w-full md:w-96 h-72 rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1004209050/photo/e-learning-class-and-e-book-digital-technology-in-education-concept-with-pc-computer-notebook.jpg?s=612x612&w=0&k=20&c=ebWn-VpAvRJFwe7tuhrjqdpftlJ4G4EzNuPhwLsi0G4="
            alt="E-learning"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Search section */}
      <div className="flex flex-col sm:flex-row mt-10 items-center gap-4">
        <input
          type="text"
          placeholder="Enter your Blog Image"
          className={`w-full sm:w-96 px-5 py-2 shadow-xl outline-none border-[1px] ${
            darkMode ? 'bg-white text-black border-black' : 'bg-gray-100 text-black border-gray-300'
          }`}
        />
        <button className="p-2 text-gray-600 hover:text-gray-800 transition">
          <FaSearch size={24} />
        </button>
      </div>
    </div>
  );
};

export default Home;
