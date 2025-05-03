import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PhoneIcon } from '@heroicons/react/24/solid';

const ContactIcons = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 p-4 items-start sm:items-center">
      {/* Call icon */}
      <a
        href="tel:+1234567890"
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
      >
        <PhoneIcon className="h-6 w-6" />
        <span>Call</span>
      </a>

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-green-500 hover:text-green-700"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span>WhatsApp</span>
      </a>

      {/* Phone number */}
      <span className="text-black text-lg">+92-300-4951993</span>
    </div>
  );
};

export default ContactIcons;
