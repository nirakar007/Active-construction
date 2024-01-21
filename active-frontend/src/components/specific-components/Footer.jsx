import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-customColor text-white p-4 text-center">
        <div>
            <img src="src/assets/logo/logo.svg" alt="" className='w-[80px] h-[80px]' />
        </div>
      <div className="flex items-center justify-center mb-2">
        <FaRegRegistered className="text-sm mr-2" />
        <span className="text-xs font-semibold">Rights Reserved by Active Construction</span>
      </div>
      <p className="text-xs">© {new Date().getFullYear()} Active Construction. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
