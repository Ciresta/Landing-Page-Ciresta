import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customHoverColor = '#6060bb';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-12 text-white relative z-20"> {/* Added z-20 */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Ciresta Technologies Logo" className="h-8" />
        <span className="font-semibold font-poppins text-xl" style={{ color: customHoverColor }}>
          Ciresta Technologies
        </span>
      </div>

      <div className="hidden md:flex space-x-16 font-semibold font-poppins pr-20 text-xl">
        <NavLink to="/internships">Internships</NavLink>
        <NavLink to="#services">Services</NavLink>
        <NavLink to="#team">Team</NavLink>
        <NavLink to="#contact">Contact Us</NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`absolute top-16 right-0 w-full transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        style={{
          height: isOpen ? 'auto' : '0',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4.9px)',
          WebkitBackdropFilter: 'blur(4.9px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <div className="flex flex-col">
          <NavLink to="/internships">Internships</NavLink>
          <NavLink to="#services">Services</NavLink>
          <NavLink to="#team">Team</NavLink>
          <NavLink to="#contact">Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-xl transition-colors duration-300 ease-in-out"
    style={{ transition: 'color 0.3s ease-in-out' }}
    onMouseEnter={(e) => (e.target.style.color = '#6060bb')}
    onMouseLeave={(e) => (e.target.style.color = 'white')}
  >
    {children}
  </Link>
);

export default Navbar;
