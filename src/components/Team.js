import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa'; 
import teamMain from '../assets/images/team/team_main.svg';
import virajImage from '../assets/images/team/viraj_team.svg';
import abhishekImage from '../assets/images/team/abhisheksingh_team.svg';
import rahulImage from '../assets/images/team/rahul_team.svg';
import ankitImage from '../assets/images/team/ankith_team.svg';

const Team = () => {
  return (
    <div className='bg-[#0E0E0E]'>
      <div className="w-full max-w-screen-xl mx-auto px-6 bg-[#0E0E0E] text-white poppins-regular">
        <section className="py-12">
          <h1 className="text-5xl font-semibold poppins-medium">
            Meet the <span className="ciresta-color">Team</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg poppins-light">
            Everything you need to <span className="font-bold">grow digitally</span>, we provide the services.
          </p>
        </section>

        <div className="rounded-xl">
          <img src={teamMain} alt="Team Illustration" className="w-full h-auto rounded-lg" />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white text-black p-8 rounded-xl text-center flex flex-col justify-between poppins-regular h-[360px]">
            <div>
              <h2 className="text-2xl font-semibold poppins-semibold">Viraj Kulkarni</h2>
              <p className="text-black-800 mt-3 poppins-medium"><span className='text-sm poppins-light'>Specialized in</span><br/> Designer & Front-end Development</p>
              <div className="flex justify-center mt-5 space-x-4">
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaLinkedin className="text-black text-xl" />
                </a>
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaBehance className="text-black text-xl" />
                </a>
              </div>
            </div>
            <div className="flex-grow flex items-end justify-center">
              <img src={virajImage} alt="Viraj Kulkarni" className="w-full h-28 object-contain mb-[-31px]" />
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-xl text-center flex flex-col justify-between poppins-regular h-[360px]">
            <div>
              <h2 className="text-2xl font-semibold poppins-semibold">Abhishek Singh</h2>
              <p className="text-black-800 mt-3 poppins-medium"><span className='text-sm poppins-light'>Specialized in</span><br/> Database & Back-end Development</p>
              <div className="flex justify-center mt-5 space-x-4">
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaLinkedin className="text-black text-xl" />
                </a>
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaGithub className="text-black text-xl" />
                </a>
              </div>
            </div>
            <div className="flex-grow flex items-end justify-center">
              <img src={abhishekImage} alt="Abhishek Singh" className="w-full h-28 object-contain mb-[-31px]" />
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-xl text-center flex flex-col justify-between poppins-regular h-[360px]">
            <div>
              <h2 className="text-2xl font-semibold poppins-semibold">Rahul. V B</h2>
              <p className="text-black-800 mt-3 poppins-medium"><span className='text-sm poppins-light'>Specialized in</span><br/> Agile & Server-side Management</p>
              <div className="flex justify-center mt-5 space-x-4">
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaLinkedin className="text-black text-xl" />
                </a>
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaGithub className="text-black text-xl" />
                </a>
              </div>
            </div>
            <div className="flex-grow flex items-end justify-center">
              <img src={rahulImage} alt="Rahul. V B" className="w-full h-28 object-contain mb-[-31px]" />
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-xl text-center flex flex-col justify-between poppins-regular h-[360px]">
            <div>
              <h2 className="text-2xl font-semibold poppins-semibold">Ankit Ronad</h2>
              <p className="text-black-800 mt-3 poppins-medium"><span className='text-sm poppins-light'>Specialized in</span><br/> Marketing & Client Management</p>
              <div className="flex justify-center mt-5 space-x-4">
                <a href="https://www.abc.com" className="border-2 border-black p-2 rounded-lg hover:bg-gray-200">
                  <FaLinkedin className="text-black text-xl" />
                </a>
              </div>
            </div>
            <div className="flex-grow flex items-end justify-center">
              <img src={ankitImage} alt="Ankit Ronad" className="w-full h-28 object-contain mb-[-31px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
