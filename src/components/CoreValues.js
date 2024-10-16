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
    <div className="text-white font-poppins-regular mt-[-50px]">
      <div className="w-full max-w-[1400px] mx-auto py-12 px-4 md:px-0"> {/* Adjusted max width */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid layout and gap */}
          {data.map((item, index) => (
            <div key={index} className="shiny-effect bg-[#1A1A1A] rounded-xl p-8 text-left h-auto"> {/* Adjusted padding */}
              <div className="flex items-center space-x-2">
                <img src={item.logo} alt="Logo" className="w-10 h-10" /> {/* Increased logo size */}
                <h2 className="text-lg md:text-2xl font-semibold">{item.title}</h2> {/* Increased title font size */}
              </div>
              <p className="text-gray-400 mt-1 text-sm ml-12">{item.hashTag}</p> {/* Increased left margin */}
              <hr className="border-gray-600 my-6" /> {/* Adjusted margin around the divider */}
              <img src={item.doublequote} alt="Quote" className="w-10 h-10" /> {/* Increased quote icon size */}
              <div className="flex space-x-2 mt-4"> {/* Added margin-top to the quote */}
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
