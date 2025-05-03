import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Logo / Brand */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white">MyBlog</h1>
          <p className="text-sm mt-2">Sharing thoughts, tutorials, and stories.</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <ul className="flex gap-6 flex-wrap">
            {['Home', 'About', 'Blog', 'Contact'].map((link, i) => (
              <li key={i}>
                <a href={`/${link.toLowerCase()}`} className="hover:text-white transition duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm border-t border-zinc-700 pt-5">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
