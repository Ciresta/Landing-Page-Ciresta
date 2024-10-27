import React, { useState, useEffect } from 'react';
import aboutUsImg from '../assets/images/about/about-hero.svg';
import companyBg from '../assets/images/about/company-bg.svg';
import image1 from '../assets/images/about/main-team/viraj.jpg';
import image2 from '../assets/images/about/main-team/abhi.png';
import image3 from '../assets/images/about/main-team/rahul.webp';
import image4 from '../assets/images/about/main-team/ankit.jpg';
import leftBgImage from '../assets/images/about/main-team/team-logo.svg'; // Add your left-side background image
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

const teamMembers = [
  {
    image: image1,
    name: "Viraj Kulkarni",
    role: "Designer & Front-end Developer",
    linkedin: "https://www.linkedin.com/in/viraj-kulkarni-516611250/",
    behance: "https://www.behance.net/virajkulkarni1",
  },
  {
    image: image2,
    name: "Abhisheksingh",
    role: "Full-Stack Developer & DevOps",
    linkedin: "https://www.linkedin.com/in/abhisheksingh-fulanekar/",
    github: "https://github.com/abhisheksinghf/",
  },
  {
    image: image3,
    name: "Rahul V.B",
    role: "Agile & Server-side Management",
    linkedin: "https://www.linkedin.com/in/rahulvb27/",
    github: "https://github.com/r-vb/",
  },
  {
    image: image4,
    name: "Ankit Ronad",
    role: "Marketing & Client Management",
    linkedin: "https://www.linkedin.com/in/ankit-ronad-a1866320b/",
  },
];

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [aboutUsImg, companyBg];
      await Promise.all(images.map(src => {
        return new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      }));
      setLoading(false);
    };

    preloadImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        <h1 className="text-3xl">Please wait...</h1>
      </div>
    );
  }

  return (
    <div className="relative font-[sans-serif] text-white bg-black min-h-screen py-16">
      
      {/* Background Images */}
      <section className="relative">
        <img
          src={aboutUsImg}
          alt="About Us Banner"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="relative">
        <img
          src={companyBg}
          alt="Company Background"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Team Intro Section */}
      <section className="py-12 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold poppins-medium">
          Meet the <span className="ciresta-color">Lead</span>
        </h1>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg">
          Everything you need to <span className="font-bold">grow digitally</span>, we provide the services.
        </p>
      </section>

      {/* Team Members Section */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 p-8">
        
        {/* Left Side Background Image */}
        <div
          className="absolute left-0 h-full w-1/4 bg-cover bg-no-repeat -z-20 backdrop-blur-sm"
          style={{
            backgroundImage: `url(${leftBgImage})`,
            top: '-16rem',
          }}
        />

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white text-black"
            style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
          >
            <div className="relative mb-6 overflow-hidden rounded-lg w-full h-48">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white">{member.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4 text-gray-300">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin size={20} />
                </a>
                {member.behance ? (
                  <a 
                    href={member.behance} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    <FaBehance size={20} />
                  </a>
                ) : null}
                {member.github ? (
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    <FaGithub size={20} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
