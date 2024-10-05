import React from 'react';
import PC from '../assets/images/onestep/pc.svg';
import Cube from '../assets/images/onestep/cube.svg'; 
import WWW from '../assets/images/onestep/www.svg';   
import Bullseye from '../assets/images/onestep/goal.svg'; 

const ServiceSection = () => {
    return (
        <div className="container mx-auto py-6 bg-black text-white px-6 md:px-16">
            <div className="mb-6">
                <p className="text-gray-400 mb-2">One step solution</p>
                <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
                    Everything you need to <span className="text-indigo-500">grow digitally</span><br />
                    we provide the services.
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col justify-between h-56 mx-4 md:mx-0">
                    <img src={PC} alt="Placeholder" className="rounded-md mb-2 flex-shrink-0" />
                    <p className="text-lg font-semibold">Help small business to go online</p>
                    <div className="flex space-x-1 mt-auto">
                        <i className="fas fa-circle text-gray-400"></i>
                        <i className="fas fa-square text-gray-400"></i>
                        <i className="fas fa-play text-gray-400"></i>
                    </div>
                </div>

                <div className="bg-pink-200 p-4 rounded-lg flex flex-col justify-between h-56 mx-4 md:mx-0">
                    <p className="text-lg font-semibold text-black">Help small business to go online</p>
                    <div className="flex space-x-1 mt-auto">
                        <i className="fas fa-circle text-black"></i>
                        <i className="fas fa-square text-black"></i>
                        <i className="fas fa-play text-black"></i>
                    </div>
                </div>

                <div className="bg-black text-gray-400 p-4 rounded-lg flex flex-col justify-center h-56 mx-4 md:mx-0">
                    <p className="text-center">
                        At <a href="#" className="text-indigo-500">Ciresta</a>, we're dedicated to helping
                        small and medium level businesses grow through effective solutions that truly work.
                        We believe in building lasting relationships based on trust and mutual success.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
                <div className="bg-indigo-200 p-4 rounded-lg flex flex-col justify-between h-56 mx-4 md:mx-0">
                    <img src={Cube} alt="Cube Icon" className="w-8 h-8 mb-2 mx-auto" />
                    <p className="text-lg font-semibold text-indigo-900">Manage and help building CRM or management software</p>
                </div>

                <div className="bg-white text-black p-4 rounded-lg flex flex-col justify-between h-56 mx-4 md:mx-0">
                    <img src={WWW} alt="WWW Icon" className="w-8 h-8 mb-2 mx-auto" />
                    <p className="text-lg font-semibold text-center">
                        <span className="font-serif text-2xl">WWW</span>
                        <br />
                        Help to maintain deployed and undeployed software or website
                    </p>
                </div>

                <div className="bg-white text-black p-4 rounded-lg flex flex-col justify-between h-56 mx-4 md:mx-0">
                    <img src={Bullseye} alt="Bullseye Icon" className="w-8 h-8 mb-2 mx-auto" />
                    <p className="text-lg font-semibold">Help to market your SEO for your websites</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
