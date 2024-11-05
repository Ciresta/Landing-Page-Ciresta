import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom';

const FAQCenter = () => {
  const FAQData = [
    {
      category: 'Our Services',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We provide a variety of IT services, including UI/UX design, website and software development, SEO, digital marketing, and ongoing support and maintenance.',
        },
        {
          question: 'Can you customize solutions for specific business needs?',
          answer: "We customize each solution to fit our clients' unique needs by understanding their business goals, target users, and specific requirements, ensuring that the final product is both functional and scalable.",
        },
        {
          question: 'What industries do you typically work with?',
          answer: 'We work with a wide range of industries, including finance, healthcare, e-commerce, education, real estate, and more.',
        },
        {
          question: 'Do you offer end-to-end product development services?',
          answer: 'Yes, we provide end-to-end services, from initial concept and prototyping to development, testing, launch, and ongoing support.',
        }
      ],
    },
    {
      category: 'Privacy/Policy',
      questions: [
        {
          question: 'How do you handle user data privacy?',
          answer: 'We follow strict data privacy protocols, ensuring that all user information is securely stored, encrypted, and accessed only by authorized personnel.',
        },
        {
          question: 'What personal information do you collect from users?',
          answer: "We collect only the information necessary for the software to function effectively, as outlined in our privacy policy, and always seek user consent where required.",
        },
        {
          question: 'Do you share data with third parties?',
          answer: 'We do not share or sell user data with third parties unless necessary for specific integrations or services.',
        },
        {
          question: 'Can users delete their data from your system?',
          answer: 'Yes, users have the right to request deletion of their personal data. We provide a straightforward process for data deletion, which complies with data protection laws like GDPR and CCPA.',
        },
      ],
    },
    {
      category: 'Support & Maintenance',
      questions: [
        {
          question: 'What type of support do you offer after project completion?',
          answer: 'After project completion, we provide ongoing support for troubleshooting, updates, and maintenance.',
        },
        {
          question: 'What should I do if I encounter an issue in the project?',
          answer: 'If you encounter an issue, please contact support immediately.',
        },
        {
          question: 'Do you offer hosting support?',
          answer: 'Yes, we provide hosting setup and support services and can manage your hosting environment if you choose to host with us or on a preferred third-party platform.',
        },
        {
          question: 'Will you train my team on how to use the software?',
          answer: 'Yes, we can provide training sessions to help your team understand and use the software effectively.',
        },
      ],
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'What’s the first step to initiate a project with your team?',
          answer: 'Simply reach out to us via our contact form, email, or phone, and we’ll schedule an initial consultation to discuss your project needs.',
        },
        {
          question: 'What types of projects do you typically take on?',
          answer: 'We handle a wide range of projects, from UI/UX design and custom software to complex web development. Reach out, and we can discuss if your project is a good fit!',
        },
        {
          question: 'How do you align projects with business objectives?',
          answer: 'We start with a discovery phase to understand your business objectives, target audience, and specific goals. This helps ensure that every decision aligns with your vision.',
        },
        {
          question: 'How soon can we expect an estimated timeline and cost?',
          answer: 'After the initial consultation, we typically provide a detailed proposal with estimated costs and timelines within a few business days.',
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
    <div className="flex items-center justify-center min-h-screen bg-black px-4 md:px-6 py-12">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl text-white poppins-semibold"><spam className='ciresta-color'>Got Questions?</spam> We Have Answers!</h1>
        <p className="text-center text-gray-300 poppins-light text-sm md:text-lg mt-2 mb-12 max-w-3xl mx-auto">
          Discover answers to <spam className='font-bold'>  common questions</spam> about our services, privacy policies, support, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FAQData.map((category, categoryIndex) => (
            <div key={category.category} className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 font-poppins-bold">{category.category}<spam className='ciresta-color'> FAQs</spam></h2>
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
                      className={`${openIndex[categoryIndex] === questionIndex ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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
