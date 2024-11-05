import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const FAQCenter = () => {
  const FAQData = [
    {
      category: 'Internship Program',
      questions: [
        {
          question: 'What types of internships do you offer?',
          answer: 'We offer internships in Full Stack Development, Frontend Development, and UI/UX Design.',
        },
        {
          question: 'Who is eligible to apply for an internship?',
          answer: 'Anyone with a passion for technology and a willingness to learn is encouraged to apply for our internships, regardless of their academic background or experience level.',
        },
        {
          question: 'How long do internships last?',
          answer: 'Internships last for 4 weeks, during which interns work on projects, collaborate with team members, and participate in training sessions.',
        },
        {
          question: 'Will I receive training and mentorship during the internship?',
          answer: 'Absolutely! Interns will receive training and mentorship from experienced engineering students in the company, fostering a supportive environment where you can learn and grow.',
        },
        {
          question: 'What can I expect from the internship experience?',
          answer: 'Interns can expect to work on real-world projects, collaborate with team members, attend meetings, and gain hands-on experience in their field. We also provide opportunities for networking and professional development.',
        },
        {
          question: 'Is there a chance of full-time employment after the internship?',
          answer: 'Yes! There is an opportunity for continued internships with a stipend for top performers based on their contributions during the internship.',
        },
        {
          question: 'What skills are you looking for in an intern?',
          answer: 'We welcome applicants from all backgrounds and skill levels! While technical skills relevant to the position are beneficial, we value enthusiasm, a willingness to learn, and the ability to work well in a team.',
        },
        {
          question: 'Are there any rewards or recognition in the internship program?',
          answer: 'Yes! We recognize exceptional talent and hard work through various rewards, including cash prizes, merchandise, LinkedIn recommendations for top performers, and a completion certificate for all interns.',
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState({});

  const toggleFAQ = (categoryIndex, questionIndex) => {
    setOpenIndex(prevState => ({
      ...prevState,
      [categoryIndex]: prevState[categoryIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 py-12">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl text-white poppins-semibold">
          <span className='ciresta-color'>Got Questions?</span> We Have Answers!
        </h1>
        <p className="text-center text-gray-300 poppins-light text-sm md:text-lg mt-2 mb-12 max-w-3xl mx-auto">
          Discover answers to <span className='font-bold'>common questions</span> about our internship program.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
          {FAQData.map((category, categoryIndex) => (
            <div key={category.category} className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 font-poppins-bold">
                {category.category}<span className='ciresta-color'> FAQs</span>
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <div key={faq.question} className="flex flex-col">
                    <div
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      className="flex items-center text-black justify-between bg-black/40 p-4 rounded-lg transition cursor-pointer"
                      style={{
                        color: 'black',
                        background: '#1a1a1a',
                      }}
                    >
                      <p className="text-gray-200 text-left text-md font-poppins">{faq.question}</p>
                      <i className={`fas fa-${openIndex[categoryIndex] === questionIndex ? 'minus' : 'plus'} ciresta-color text-lg`}></i>
                    </div>
                    <div
                      className={`${openIndex[categoryIndex] === questionIndex ? 'h-auto opacity-100' : 'h-0 opacity-0'
                        } overflow-hidden transition-all duration-500 ease-in-out`}
                    >
                      <p className="text-gray-400 mt-3 text-left font-poppins-extralight">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-gray-300 text-lg">
            Still not got your question?{' '}
            <Link to="/contact" className="ciresta-color hover:underline">Contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQCenter;
