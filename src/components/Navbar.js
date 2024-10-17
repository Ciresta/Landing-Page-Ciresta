import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customHoverColor = '#6060bb';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex sticky-nav-ciresta justify-between items-center py-6 px-4 md:px-12 text-white relative z-20" style={{position: "sticky"}}>
      <NavLink to="/">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Ciresta Technologies Logo" className="h-8" />
          <span className="font-semibold font-poppins text-xl" style={{ color: customHoverColor }}>
            Ciresta Technologies
          </span>
        </div>
      </NavLink>

      <div className="hidden md:flex space-x-16 font-semibold font-poppins pr-20 text-xl">
        <NavLinkStyled to="/internships">Internships</NavLinkStyled>
        <NavLinkStyled to="#services">Services</NavLinkStyled>
        <NavLinkStyled to="#team">Team</NavLinkStyled>
        <NavLinkStyled to="#contact">Contact Us</NavLinkStyled>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`absolute top-20 right-0 w-full transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        style={{
          background: 'rgba(72, 72, 72, 0.64)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(6.7px)',
          WebkitBackdropFilter: 'blur(6.7px)', 
          border: '1px solid rgba(72, 72, 72, 0.3)',
        }}
        
        
        
      >
        <div className="flex flex-col">
          <NavLinkStyled to="/internships">Internships</NavLinkStyled>
          <NavLinkStyled to="#services">Services</NavLinkStyled>
          <NavLinkStyled to="#team">Team</NavLinkStyled>
          <NavLinkStyled to="#contact">Contact Us</NavLinkStyled>
        </div>
      </div>
    </nav>
  );
};

const NavLinkStyled = ({ to, children }) => (
  <NavLink
    to={to}
    className="block px-4 py-2 text-xl transition-colors duration-300 ease-in-out"
    style={{ transition: 'color 0.3s ease-in-out' }}
    activeStyle={{ color: '#6060bb' }} // Purple color when active
    onMouseEnter={(e) => (e.target.style.color = '#6060bb')} // Hover effect
    onMouseLeave={(e) => (e.target.style.color = e.target.classList.contains('active') ? '#6060bb' : 'white')} // Retain purple if active, revert to white if inactive
  >
    {children}
  </NavLink>
);

export default Navbar;
