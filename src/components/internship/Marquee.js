import React from 'react';
import Marquee from 'react-fast-marquee';
import LogoIcon from '../../assets/images/logo.svg'; // Replace with the correct path to your logo
import CenterLogoIcon from '../../assets/images/internship/msme.svg'; // Replace with the correct path to your round logo

const MovingMarquee = () => {
  return (
    <div className="relative bg-black mt-16 text-white p-8">
      <div className="border-t-2 border-b-2 border-white p-4 overflow-hidden">
        <Marquee gradient={false} speed={50}>
        <div className="flex items-center space-x-4">
            <img src={LogoIcon} alt="Logo" className="w-8 h-8" />
            <span className="poppins-medium text-lg">Ciresta Technologies</span>&nbsp;&nbsp;&nbsp;&nbsp;<img src={LogoIcon} alt="Logo" className="w-8 h-8" /><span className="poppins-medium text-lg">Ciresta Technologies</span>&nbsp;&nbsp;&nbsp;&nbsp;<img src={LogoIcon} alt="Logo" className="w-8 h-8" /><span className="poppins-medium text-lg">Ciresta Technologies</span>&nbsp;&nbsp;&nbsp;&nbsp;<img src={LogoIcon} alt="Logo" className="w-8 h-8" /><span className="poppins-medium text-lg">Ciresta Technologies</span>&nbsp;&nbsp;&nbsp;&nbsp;<img src={LogoIcon} alt="Logo" className="w-8 h-8" /><span className="poppins-medium text-lg">Ciresta Technologies</span>
          </div>
        </Marquee>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={CenterLogoIcon} alt="Center Logo" className="w-40 z-30 h-40 rounded-full" />
      </div>
    </div>
  );
};

export default MovingMarquee;
