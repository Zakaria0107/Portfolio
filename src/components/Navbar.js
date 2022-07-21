import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-3 md:px-12 bg-[#212121] text-gray-300'>
      <div>
        
      </div>
      {/* menu */}
      <ul className='hidden md:flex  justify-between w-[500px]'>
        <li className="cursor-pointer text-xl font-bold hover:text-[#7209b7] duration-300">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer text-xl font-bold hover:text-[#7209b7] duration-300">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer text-xl font-bold hover:text-[#7209b7] duration-300">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer text-xl font-bold hover:text-[#7209b7] duration-300">
          <Link to='works' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer text-xl font-bold hover:text-[#7209b7] duration-300">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button type="button" onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={25}  /> : <FaTimes size={25} />}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#212121] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl cursor-pointer hover:text-[#7209b7] duration-300'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer hover:text-[#7209b7] duration-300'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer hover:text-[#7209b7] duration-300'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer hover:text-[#7209b7] duration-300'>
          {' '}
          <Link onClick={handleClick} to='works' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer hover:text-[#7209b7] duration-300'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='flex justify-between items-center space-x-[30px] absolute bottom-6'>
          <a href='https://www.linkedin.com/in/zakaria-bijaddigune-67373b231/' target='_blank'><FaLinkedin size={30} /></a>
          <a href='https://github.com/Zakaria0107' target="_blank"><FaGithub size={30} /></a>
          <a href='https://www.instagram.com/zakaria_bijaddigune/' target="_blank"><FaInstagram size={30} /></a>
          <a><BsFillPersonLinesFill size={30} /></a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-2'
              href='https://www.linkedin.com/in/zakaria-bijaddigune-67373b231/' target='_blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-2'
              href='https://github.com/Zakaria0107' target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#E1306C]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-2'
              href='https://www.instagram.com/zakaria_bijaddigune/' target="_blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-2'
            >
              Resume  <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;