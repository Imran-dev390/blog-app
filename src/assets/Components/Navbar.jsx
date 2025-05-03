import React, { useState } from 'react';
import ContactIcons from './ContactIcons';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import SocialMediaIcons from './SocialMediaIcons';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Books",
    "Journals",
    "Collaborations",
    "Services",
    "Submissions",
    "Help",
  ];

  return (
    <>
      <nav className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-lg`}>
        {/* Top bar with contact & social icons */}
        <div className="flex items-center justify-between px-2 bg-orange-200">
          <ContactIcons />
          <SocialMediaIcons />
        </div>

        {/* Main navbar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyBlog</h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-500 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`py-2 px-2 rounded-md ${
                darkMode
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              }`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 transition">
              <FaSearch size={20} />
            </button>
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-xl"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="hover:text-blue-500 cursor-pointer"
              >
                {item}
              </div>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`w-full text-left py-2 px-2 rounded-md ${
                darkMode
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              }`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className="pt-2">
              <button className="p-2 text-gray-600 hover:text-gray-800 transition">
                <FaSearch size={20} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
