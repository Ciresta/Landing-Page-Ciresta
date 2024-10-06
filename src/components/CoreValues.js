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
      <div className="w-full mx-auto py-12 px-4 md:px-5">
        <section className="flex flex-row w-70">
          {data.map((item, index) => (
            <div key={index} className="shiny-effect bg-[#1D1D1D55] rounded-xl p-6 mx-4 md:p-8  text-left h-auto"> {/* Added shiny-effect class */}
              <div className="flex items-center space-x-2">
                <img src={item.logo} alt="Logo" className="w-8 h-8" />
                <h2 className="text-lg md:text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="text-gray-400 mt-1 text-sm ml-10">{item.hashTag}</p>
              <hr className="border-gray-600 my-4" />
              <img src={item.doublequote} alt="Quote" className="w-8 h-8" />
              <div className="flex space-x-2 mt-2">
                <i className="fas fa-quote-left text-indigo-500"></i>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                  {item.quote.split(" ~ ")[0]} 
                  <br/><span className="poppins-light-italic">{item.quote.split(" ~ ")[1]}</span> 
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
