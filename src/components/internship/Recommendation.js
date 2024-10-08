import React from 'react';
import LinkedInImage from '../../assets/images/internship/linkedin_reco.svg'; 

const Recommendation = () => {
  return (
    <div className="bg-black text-white font-poppins p-8 text-center">
      <h2 className="text-2xl poppins-medium mb-0">
        Recommendation by <span className="ciresta-color">Ciresta Technologies</span> on LinkedIn
      </h2>
      <img src={LinkedInImage} alt="Ciresta Technologies LinkedIn Recommendation" className="mx-auto w-full max-w-lg" />
    </div>
  );
};

export default Recommendation;
