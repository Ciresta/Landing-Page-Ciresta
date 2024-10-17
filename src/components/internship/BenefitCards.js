import React from 'react';
import logo1 from '../../assets/images/internship/flexible.svg';
import logo2 from '../../assets/images/internship/industry.svg';
import logo3 from '../../assets/images/internship/person.svg';
import quotelogo from '../../assets/images/quote.svg';

const BenefitCards = () => {
  const data = [
    {
      title: "Industry-Relevant Projects",
      logo: logo1,
      hashTag: "#Buildwithus",
      doublequote: quotelogo,
      quote: "Work on real-time projects guided by experienced professionals, giving you hands-on experience in your chosen field of engineering.",
    },
    {
      title: "Flexible Learning",
      logo: logo2,
      hashTag: "#Buildwithus",
      doublequote: quotelogo,
      quote: "Our internships are completely virtual, allowing you to gain valuable work experience without geographical limitations. Learn and work at your own pace, all while managing your academic commitments.",
    },
    {
      title: "Mentorship from Experts",
      logo: logo3,
      hashTag: "#Buildwithus",
      doublequote: quotelogo,
      quote: "Receive personalized guidance from industry veterans who are committed to helping you grow and succeed.",
    },
  ];

  return (
    <div className="text-white font-poppins-light mt-10">
      <div className="w-full max-w-[1400px] mx-auto py-12 px-4 md:px-0">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item, index) => (
            <div key={index} className="shiny-effect m-1 p-15 bg-[#1f1f1f] rounded-xl p-8 text-left h-auto">
              <img src={item.logo} alt="Logo" className=    "w-22 h-22 block" /><br />
              <div className="flex items-center space-x-2">
                <h2 className="text-lg md:text-3xl font-medium">{item.title}</h2>
              </div>
              <div className="flex mt-4">
                <i className="fas fa-quote-left text-indigo-500"></i>
                <p className="text-gray-200 text-lg md:text-sm leading-relaxed">
                  {item.quote.split(" ~ ")[0]} 
                  <br/><span className="font-poppins-extralight italic">{item.quote.split(" ~ ")[1]}</span> 
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BenefitCards;
