import React from 'react';
import CertificateIcon from '../../assets/images/internship/Certificate.svg';
import TrainingIcon from '../../assets/images/internship/Cash.svg';
import CashPrizeIcon from '../../assets/images/internship/Gift.svg';

const WhatYouWillGet = () => {
  return (
    <div className="bg-black text-white font-poppins p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        What you will <span className='ciresta-color'>get</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img src={CertificateIcon} alt="Completion Certificate" className="w-8 h-8" />
          <span className="text-xl font-light">Completion Certificate</span>
        </div>

        <div className="flex items-center space-x-2">
          <img src={TrainingIcon} alt="Free Training" className="w-8 h-8" />
          <span className="text-xl font-light">Free Training</span>
        </div>

        <div className="flex items-center space-x-2">
          <img src={CashPrizeIcon} alt="Win cash prize" className="w-8 h-8" />
          <span className="text-xl font-light">Win cash prizes</span>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;
