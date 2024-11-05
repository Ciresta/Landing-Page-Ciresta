import React from 'react';
import FullStackIcon from '../../assets/images/internship/fullstack.svg'; 
import FrontEndIcon from '../../assets/images/internship/frontend.svg'; 
import UIUXIcon from '../../assets/images/internship/uiux.svg'; 

const Domains = () => {
  return (
    <div className="text-white w-full h-screen flex items-center justify-center bg-black">
      <div className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center mb-10 md:mb-0 md:w-1/2 md:mr-20">
          <h1 className="text-5xl font-semibold">Internship Domains</h1>
          <p className="text-gray-400 mt-2">Choose the domain you like and get started with the internship</p>
          <button className="ciresta-bg mt-2 text-white font-medium px-6 py-3 w-40 hover:bg-indigo-600 transition duration-300" style={{ borderRadius: "30px" }}>
            Register
          </button>
        </div>

        <div className="flex flex-col items-center md:w-1/2">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex justify-center">
              <img src={FrontEndIcon} alt="Front-end Development" className="w-40 h-40 md:w-64 md:h-64 object-cover" />
            </div>
            <div className="flex justify-center">
              <img src={UIUXIcon} alt="UI/UX and Prototype" className="w-40 h-40 md:w-64 md:h-64 object-cover" />
            </div>
          </div>
          <div className="flex justify-center">
            <img src={FullStackIcon} alt="Full-stack Development" className="w-40 h-40 md:w-64 md:h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
