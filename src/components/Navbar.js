import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customHoverColor = '#6060bb';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-12 text-white relative">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Ciresta Technologies Logo" className="h-8" />
        <span className="font-semibold font-poppins text-2xl" style={{ color: customHoverColor }}>
          Ciresta Technologies
        </span>
      </div>

      <div className="hidden md:flex space-x-16 font-semibold font-poppins pr-20 text-xl">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#team">Team</NavLink>
        <NavLink href="#contact">Contact Us</NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`absolute top-16 right-0 w-full bg-black text-white md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        style={{ height: isOpen ? 'auto' : '0' }} // To ensure the height collapse when closed
      >
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#team">Team</NavLink>
        <NavLink href="#contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 text-xl transition-colors duration-300 ease-in-out"
    style={{ transition: 'color 0.3s ease-in-out' }}
    onMouseEnter={(e) => (e.target.style.color = '#6060bb')}
    onMouseLeave={(e) => (e.target.style.color = 'white')}
  >
    {children}
  </a>
);

export default Navbar;
