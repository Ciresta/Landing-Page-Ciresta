import React from 'react';
import Marquee from 'react-fast-marquee';
import LogoIcon from '../../assets/images/logo.svg'; 
import CenterLogoIcon from '../../assets/images/internship/msme.svg'; 

const MovingMarquee = () => {
  return (
    <>
      <div className="relative bg-black mt-16 text-white p-8">
        <div className="border-t-2 border-b-2 border-white p-4 overflow-hidden">
          <Marquee gradient={false} speed={50}>
            <div className="flex items-center space-x-4">
              <img src={LogoIcon} alt="Logo" className="w-8 h-8" />
              <span className="poppins-medium text-lg">Ciresta Technologies</span>
              <img src={LogoIcon} alt="Logo" className="w-8 h-8" />
              <span className="poppins-medium text-lg">Ciresta Technologies</span>
              <img src={LogoIcon} alt="Logo" className="w-8 h-8" />
              <span className="poppins-medium text-lg">Ciresta Technologies</span>
              <img src={LogoIcon} alt="Logo" className="w-8 h-8" />
              <span className="poppins-medium text-lg">Ciresta Technologies</span>
              <img src={LogoIcon} alt="Logo" className="w-8 h-8" />
              <span className="poppins-medium text-lg">Ciresta Technologies</span>
            </div>
          </Marquee>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src={CenterLogoIcon} 
            alt="Center Logo" 
            className="w-20 h-20 rounded-full z-30 md:w-28 md:h-28 sm:w-20 sm:h-20" 
          />
        </div>
      </div>
      <p className='text-center poppins-light text-white mt-12 text-lg'>
        Work on real-time projects guided by experienced professionals, giving you hands-on experience<br />
        in your chosen field of engineering.
      </p>
    </>
  );
};

export default MovingMarquee;
