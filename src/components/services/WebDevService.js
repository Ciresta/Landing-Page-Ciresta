import React from 'react';
import Mac from '../../assets/images/services/mac.svg';

const WebDevService = () => {
    return (
        <div className="bg-black text-white font-poppins">
            <div className="w-[1024px] mx-auto py-10">

                {/* Title Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-semibold">
                        Website and Software <span className="text-indigo-500">Development</span>
                    </h1>
                    <a href="#" className="text-gray-400 hover:text-white mt-2 inline-block">Learn More &gt;</a>
                </div>

                {/* Content Section */}
                <div className="relative bg-[#494AA7] p-10 rounded-lg flex items-center justify-start mt-8 mb-8"> {/* Add bottom margin */}
                    
                    {/* Laptop Image */}
                    <div className="absolute left-0 top-0 mt-4">
                        <img 
                            src={Mac} 
                            alt="Laptop Placeholder" 
                            className="w-[600px] rounded-lg" 
                        />
                    </div>

                    {/* Background Adjustment */}
                    <div className="flex-grow bg-[#494AA7] ml-[50%] h-full rounded-lg p-10">
                        {/* Button Section */}
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
