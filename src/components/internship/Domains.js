import React from 'react';
import FullStackIcon from '../../assets/images/internship/fullstack.svg'; 
import BackendIcon from '../../assets/images/internship/backend.svg'; 
import FrontEndIcon from '../../assets/images/internship/frontend.svg'; 
import UIUXIcon from '../../assets/images/internship/uiux.svg'; 

const Domains = () => {
  return (
    <div className="text-white w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold">Internship Domains</h1>
          <p className="text-gray-400">Choose the domain you like and get started with internship</p>
          <a href="#register" className="text-blue-500 hover:underline">
            Register <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2"> {/* Reduced gap */}
          <div className="flex justify-center">
            <img src={FullStackIcon} alt="Full-stack Development" className="w-32 h-32 object-cover" /> {/* Increased size */}
          </div>

          <div className="flex justify-center">
            <img src={BackendIcon} alt="Backend Development" className="w-32 h-32 object-cover" /> {/* Increased size */}
          </div>

          <div className="flex justify-center">
            <img src={FrontEndIcon} alt="Front-end Development" className="w-32 h-32 object-cover" /> {/* Increased size */}
          </div>

          <div className="flex justify-center">
            <img src={UIUXIcon} alt="UI/UX and Prototype" className="w-32 h-32 object-cover" /> {/* Increased size */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
