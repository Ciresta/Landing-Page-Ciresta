import React from 'react';

const InternshipReasons = () => {
  const buttons = [
    { text: "Learn more by collaborations" },
    { text: "Get mentor advice" },
    { text: "Build your connects" },
    { text: "Work in team projects" },
    { text: "Real-time projects" },
    { text: "Provide your value to company" },
  ];

  return (
    <div className="bg-black text-white py-12 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl poppins-semibold text-left mb-8">
          Why Intern at <span className='ciresta-color'>Ciresta Technologies</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buttons.map((button, index) => (
            <button
              key={index} style={{color : "#A6A6A6", borderColor : "#A6A6A6"}}
              className="border text-left border-gray-400 text-gray-200 bg-transparent py-6 px-9 rounded-lg transition duration-300 shiny-effect font-medium"
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipReasons;
