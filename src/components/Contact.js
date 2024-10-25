import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import Email.js
import ContactImg from "../assets/images/contact/contact.svg";
// import Navbar from './Navbar';
// import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_1qboqdq', 'template_eohv22p', formData, 'rlmMu5j3kqZFcb7yc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, (error) => {
        console.log('FAILED...', error);
        setSuccessMessage('There was an error sending your message.');
      });
  };

  return (
    <>
      {/* <Navbar/> */}
    <div className="bg-black" id='contact'>
      <div className="w-full max-w-screen-xl mx-auto py-12 px-4 md:px-12 flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-8">
        <div className="hidden md:flex bg-black rounded-lg w-full md:w-1/2 p-8 items-center justify-center">
          <div>
            <img
              src={ContactImg}
              alt="Contact Illustration"
              className="rounded-lg mb-6 w-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-black rounded-lg p-4 md:p-8 flex flex-col justify-start">
          <h2 className="text-4xl text-left md:text-5xl font-semibold text-white poppins-medium">
            Contact us
          </h2>
          <p className="text-sm text-left md:text-sm font-semibold text-gray-400 poppins-light">
            Feel free to reach out to us for innovative software solutions tailored to your needs.
          </p>
          
          {successMessage && (
            <div className="mt-4 text-green-500">{successMessage}</div>
          )}
          
          <form className="flex flex-col justify-between mt-8" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-600 outline-none focus:border-white text-white py-3 px-2 poppins-regular"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Gmail"
                className="w-full bg-transparent border-b border-gray-600 outline-none focus:border-white text-white py-3 px-2 poppins-regular"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full bg-transparent border-b border-gray-600 outline-none focus:border-white text-white py-3 px-2 poppins-regular"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Short message for us (Optional)"
                className="w-full bg-transparent border-b border-gray-600 outline-none focus:border-white text-white py-3 px-2 h-24 poppins-regular"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#D9D9D9] text-black py-3 rounded-md font-semibold poppins-semibold hover:from-indigo-500 hover:to-purple-500 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Contact;
