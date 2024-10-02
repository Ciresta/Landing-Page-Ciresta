import React from 'react';
import logo from '../assets/images/logo.svg';
import quotelogo from '../assets/images/quote.svg';

const VisionMissionCommitment = () => {
  const data = [
    {
      title: "Our Vision",
      logo: logo,
      hashTag: "#Buildwithus",
      doublequote: quotelogo,
      quote: "To be a reliable partner for organizations seeking meaningful change. ~ ~ciresta",
    },
    {
      title: "Our Mission",
      logo: logo,
      hashTag: "#Buildwithus",
      doublequote: quotelogo,
      quote: "To empower businesses with customized solutions that enhance efficiency and promote sustainable growth. ~ ~ciresta",
    },
    {
      title: "Our Commitment",
      logo: logo,
      hashTag: "#Buildwithus",
      doublequote: quotelogo,
      quote: "We prioritize honesty and collaboration to deliver dependable results for our clients. ~ ~ciresta",
    },
  ];

  return (
    <div className="text-white font-poppins-regular">
      <div className="w-full max-w-[1200px] mx-auto py-12 px-4 md:px-0"> {/* Added horizontal padding for mobile */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 text-left h-auto">
              <div className="flex items-center space-x-2">
                <img src={item.logo} alt="Logo" className="w-8 h-8" />
                <h2 className="text-lg md:text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="text-gray-400 mt-1 text-sm ml-10">{item.hashTag}</p>
              <hr className="border-gray-600 my-4" />
              <img src={item.doublequote} alt="Quote" className="w-8 h-8" />
              <div className="flex space-x-2">
                <i className="fas fa-quote-left text-indigo-500"></i>
                <p className="text-gray-200 text-lg md:text-2xl leading-relaxed">
                  {item.quote.split(" ~ ")[0]} 
                  <br/><span className="poppins-extralight-italic">{item.quote.split(" ~ ")[1]}</span> 
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default VisionMissionCommitment;
