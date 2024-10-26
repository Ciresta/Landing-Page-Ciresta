import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa'; 
import teamMain from '../assets/images/team/team_main.svg';
import virajImage from '../assets/images/team/viru.svg';
import abhishekImage from '../assets/images/team/abhi.svg';
import rahulImage from '../assets/images/team/rahul.svg';
import ankitImage from '../assets/images/team/ankit.svg';

const Team = () => {
  return (
    <div id='team'>
      <div className="w-full max-w-screen-xl mx-auto px-6 poppins-regular">
        <section className="py-12">
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-semibold poppins-medium">
            Meet the <span className="ciresta-color">Lead</span>
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg poppins-light">
            Everything you need to <span className="font-bold">grow digitally</span>, we provide the services.
          </p>
        </section>

        <div className="rounded-xl overflow-hidden">
          <img src={teamMain} alt="Team Illustration" className="w-full h-auto rounded-lg" />
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Team Member - Viraj */}
          <div className="relative text-center">
            <img src={virajImage} alt="Viraj Kulkarni" className="w-full h-auto rounded-lg" />
            <div className="absolute top-0 sm:top-10 left-0 right-0 text-center text-black">  
              <h2 className="text-lg sm:text-xl mt-2 md:text-2xl font-semibold poppins-semibold">Viraj Kulkarni</h2>
              <p className="mt-1 poppins-light text-xs sm:text-sm md:text-base">
                Designer & Front-end <br/> Development
              </p>
              <div className="flex justify-center mt-2 space-x-4">
                <a 
                  href="https://www.linkedin.com/in/viraj-kulkarni-516611250/" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xs sm:text-lg md:text-xl" />
                </a>
                <a 
                  href="https://www.behance.net/virajkulkarni1" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaBehance className="text-xs sm:text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member - Abhishek */}
          <div className="relative text-center">
            <img src={abhishekImage} alt="Abhishek Singh" className="w-full h-auto rounded-lg" />
            <div className="absolute top-0 sm:top-10 left-0 right-0 text-center text-black">
              <h2 className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold poppins-semibold">Abhishek Singh</h2>
              <p className="mt-1 poppins-light text-xs sm:text-sm md:text-base">
                Database & Back-end<br/> Development
              </p>
              <div className="flex justify-center mt-2 space-x-4">
                <a 
                  href="https://www.linkedin.com/in/abhisheksingh-fulanekar/" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xs sm:text-lg md:text-xl" />
                </a>
                <a 
                  href="https://github.com/abhisheksinghf/" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xs sm:text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member - Rahul */}
          <div className="relative text-center">
            <img src={rahulImage} alt="Rahul V B" className="w-full h-auto rounded-lg" />
            <div className="absolute top-0 sm:top-10 left-0 right-0 text-center text-black">
              <h2 className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold poppins-semibold">Rahul V B</h2>
              <p className="mt-1 poppins-light text-xs sm:text-sm md:text-base">
                Agile & Server-side<br/> Management
              </p>
              <div className="flex justify-center mt-2 space-x-4">
                <a 
                  href="https://www.linkedin.com/in/rahulvb27/" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xs sm:text-lg md:text-xl" />
                </a>
                <a 
                  href="https://github.com/r-vb/" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xs sm:text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member - Ankit */}
          <div className="relative text-center">
            <img src={ankitImage} alt="Ankit Ronad" className="w-full h-auto rounded-lg" />
            <div className="absolute top-0 sm:top-10 left-0 right-0 text-center text-black">
              <h2 className="text-lg sm:text-xl md:text-2xl mt-2 font-semibold poppins-semibold">Ankit Ronad</h2>
              <p className="mt-1 poppins-light text-xs sm:text-sm md:text-base">
                Marketing & Client <br/> Management
              </p>
              <div className="flex justify-center mt-2 space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ankit-ronad-a1866320b/" 
                  className="p-1 sm:p-2 rounded-lg bg-white text-black border-2 border-black hover:bg-gray-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xs sm:text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
