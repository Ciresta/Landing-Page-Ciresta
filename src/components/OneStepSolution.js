import React from 'react';
import PC from '../assets/images/onestep/pc.svg';
import Cube from '../assets/images/onestep/cube.svg'; 
import Diversity from '../assets/images/onestep/Diversity.svg';
import WWW from '../assets/images/onestep/www.svg';   
import Bullseye from '../assets/images/onestep/goal.svg'; 

const ServiceSection = () => {
    return (
        <div className="container mx-auto py-6 bg-black text-white px-6 md:px-16" id='about'>
            <div className="mb-[5rem] text-left">
                <p className="text-gray-400 mb-2">One step solution</p>
                <h1 className="text-3xl md:text-5xl font-normal leading-snug">
                    Everything you need to <span className="text-indigo-500">grow digitally</span><br />
                    we provide the services.
                </h1>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
                {/* First row */}
                <div className="bg-[#1c1c1c60] p-4 rounded-lg flex flex-col justify-center items-center h-56 w-full md:w-60">
                    <img src={PC} alt="Placeholder" className="rounded-md w-[160px] md:w-[240px] mb-2 flex-shrink-0" />
                </div>

                <div className="bg-pink-200 p-4 rounded-lg flex flex-col justify-around items-start h-56 w-full md:w-60">
                    <img src={Diversity} alt="Diversity Icon" />
                    <p className="text-lg font-medium text-black text-left">Help small business to go online</p> 
                </div>

                <div style={{width: "31rem"}} className="bg-black text-gray-400 p-4 rounded-lg flex flex-col justify-center h-56 w-full md:w-80">
                    <p className="text-left text-[16px] md:text-[18px]">
                        At <a href="#ciresta" className="text-indigo-500">Ciresta</a>, we're dedicated to helping
                        small and medium level businesses grow through effective solutions that truly work.
                        We believe in building lasting relationships based on trust and mutual success.
                    </p>
                </div>

                {/* Second row */}
                <div className="w-full"></div> {/* Force the second row */}

                <div style={{width: "18rem"}} className="bg-indigo-200 p-4 rounded-lg flex flex-row justify-start items-center h-56 w-full md:w-60">
                    <img src={Cube} alt="Cube Icon" className='w-10' />
                    <p className="text-lg font-medium text-left ml-3 text-indigo-900">Manage and help building CRM or management software</p>
                </div>

                <div  style={{width: "30rem"}} className="bg-white text-black p-4 rounded-lg flex flex-col justify-around items-start h-56 w-full md:w-[500px]">
                    <img src={WWW} alt="WWW Icon" className="h-10" />
                    <p className="text-lg pl-2 font-medium text-left">
                        Help to maintain deployed and undeployed software or website
                    </p>
                </div>

                <div className="bg-white text-black p-4 rounded-lg flex flex-col justify-around items-start h-56 w-full md:w-[400px]">
                    <img src={Bullseye} alt="Bullseye Icon" className="w-12" />
                    <p className="text-lg font-medium text-left">Help to market your SEO for your websites</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
