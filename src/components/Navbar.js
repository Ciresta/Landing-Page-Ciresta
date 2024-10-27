import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Access current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a navigation link is clicked on mobile
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav
      className="flex sticky-nav-ciresta justify-between items-center py-6 px-4 md:px-12 relative z-20"
      style={{
        position: 'sticky',
        backgroundColor: 'rgba(72, 72, 72, 0.25)', // Set the original navbar background color
        color: 'white',
      }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img src={logo} alt="Ciresta Technologies Logo" className="h-8" />
          <span className="font-semibold text-xl" style={{ color: '#6060bb' }}>
            Ciresta Technologies
          </span>
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-16 font-semibold pr-20 text-xl">
        <NavLinkStyled to="/internships" currentPath={location.pathname} closeMenu={closeMenu}>
          Internships
        </NavLinkStyled>
        <NavLinkStyled to="/about" currentPath={location.pathname} closeMenu={closeMenu}>
          About
        </NavLinkStyled>
        <NavLinkStyled to="/services" currentPath={location.pathname} closeMenu={closeMenu}>
          Services
        </NavLinkStyled>
        <NavLinkStyled to="/contact" currentPath={location.pathname} closeMenu={closeMenu}>
          Contact Us
        </NavLinkStyled>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-20 right-0 w-full transition-all duration-300 ease-in-out transform opacity-100 translate-y-0"
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
            <NavLinkStyled to="/internships" currentPath={location.pathname} closeMenu={closeMenu}>
              Internships
            </NavLinkStyled>
            <NavLinkStyled to="/about" currentPath={location.pathname} closeMenu={closeMenu}>
              About
            </NavLinkStyled>
            <NavLinkStyled to="/services" currentPath={location.pathname} closeMenu={closeMenu}>
              Services
            </NavLinkStyled>
            <NavLinkStyled to="/contact" currentPath={location.pathname} closeMenu={closeMenu}>
              Contact Us
            </NavLinkStyled>
          </div>
        </div>
      )}
    </nav>
  );
};
const NavLinkStyled = ({ to, children, currentPath, closeMenu }) => {
  const isActive = currentPath === to;

  return (
    <NavLink
      to={to}
      className="block px-4 py-2 text-xl"
      style={{
        color: isActive ? '#6060bb' : 'white', // Active link color
        textDecoration: 'none', // No underline
        transition: 'color 0.3s ease-in-out',
      }}
      onClick={closeMenu} // Close menu when a link is clicked
      onMouseEnter={(e) => (e.target.style.color = '#6060bb')}
      onMouseLeave={(e) => (e.target.style.color = isActive ? '#6060bb' : 'white')}
    >
      {children}
    </NavLink>
  );
};

export default Navbar;
