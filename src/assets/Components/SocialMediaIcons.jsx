import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 p-2">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800 transition"
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
