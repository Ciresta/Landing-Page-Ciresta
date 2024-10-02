import React from 'react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const customHoverColor = '#6060bb'; 

  return (
    <nav className="flex justify-between items-center py-6 px-12 shadow-lg">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Ciresta Technologies Logo" className="h-8" />
        <i className="fas fa-th-large text-blue-600"></i>
        <span className="font-semibold font-poppins text-2xl" style={{ color: customHoverColor }}>
          Ciresta Technologies
        </span>
      </div>


      <div className="space-x-16 font-semibold font-poppins pr-20 text-xl">
        <a
          href="#services"
          className="text-white transition-colors duration-300 ease-in-out"
          style={{ transition: 'color 0.3s ease-in-out' }}
          onMouseEnter={(e) => (e.target.style.color = customHoverColor)}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-white transition-colors duration-300 ease-in-out"
          style={{ transition: 'color 0.3s ease-in-out' }}
          onMouseEnter={(e) => (e.target.style.color = customHoverColor)}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
