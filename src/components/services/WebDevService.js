import React from 'react';
import Mac from '../../assets/images/services/mac.svg';

const WebDevService = () => {
    return (
        <div className="bg-black text-white font-poppins">
            <div className="max-w-[1224px] mx-auto py-10 px-4"> 

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-semibold">
                        Website and Software <span className="text-indigo-500">Development</span>
                    </h1>
                    <a href="https://www.test.com" className="text-gray-400 hover:text-white mt-2 inline-block">Learn More &gt;</a>
                </div>

                <div className="relative bg-black lg:bg-[#494AA7] p-6 rounded-lg flex flex-col lg:flex-row items-start lg:justify-start mt-8 mb-8 mx-2 lg:mx-0"> {/* Adjusted margins for mobile */}
                    
                    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-8">
                        <img 
                            src={Mac} 
                            alt="Laptop Placeholder" 
                            className="w-full max-w-[600px] rounded-lg" 
                        />
                    </div>

                    <div className="flex-grow bg-black lg:bg-[#494AA7] h-full rounded-lg p-6">
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-[#282828] text-white py-2 px-4 rounded-lg">Analytic Dashboard</button>
                            <button className="bg-[#282828] text-white py-2 px-4 rounded-lg">Billing Software</button>
                            <button className="bg-[#282828] text-white py-2 px-4 rounded-lg">Attendance System</button>
                            <button className="bg-[#282828] text-white py-2 px-4 rounded-lg">CRM</button>
                            <button className="bg-[#282828] text-white py-2 px-4 rounded-lg">Build Website</button>
                            <button className="bg-[#282828] text-white py-2 px-4 rounded-lg">Mobile Responsive</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevService;
