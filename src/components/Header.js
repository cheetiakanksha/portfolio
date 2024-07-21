import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this path is correct based on your project structure

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex flex-col md:flex-row justify-between items-center p-4 md:p-6 w-full bg-primaryBackground text-textColor shadow-lg fixed top-0 left-0 z-50'>
      <span className='text-2xl md:text-3xl font-bold cursor-pointer hover:text-accentColor transition-colors duration-300'>
        Akanksha Cheeti
      </span>
      <button
        className='md:hidden flex items-center justify-center p-2 text-lg cursor-pointer focus:outline-none'
        onClick={toggleMenu}
      >
        <svg
          className='h-6 w-6 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path
            className={`${isOpen ? 'hidden' : 'block'}`}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z'
          />
          <path
            className={`${isOpen ? 'block' : 'hidden'}`}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4 5h16v2H4V5zm0 6h16v2H4-v2zm0 6h16v2H4v-2z'
          />
        </svg>
      </button>
      <nav className={`md:flex md:flex-row md:space-x-6 md:items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
        <a href='#about' className='text-lg font-medium px-4 py-2 cursor-pointer hover:text-accentColor transition-colors duration-300' onClick={toggleMenu}>
          About Me
        </a>
        <a href='#education' className='text-lg font-medium px-4 py-2 cursor-pointer hover:text-accentColor transition-colors duration-300' onClick={toggleMenu}>
          Education
        </a>
        <a href='#skills' className='text-lg font-medium px-4 py-2 cursor-pointer hover:text-accentColor transition-colors duration-300' onClick={toggleMenu}>
          Skills
        </a>
        <a href='#projects' className='text-lg font-medium px-4 py-2 cursor-pointer hover:text-accentColor transition-colors duration-300' onClick={toggleMenu}>
          Projects
        </a>
        <a href='#contact' className='text-lg font-medium px-4 py-2 cursor-pointer hover:text-accentColor transition-colors duration-300' onClick={toggleMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
