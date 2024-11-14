import React, { useState, useEffect } from 'react';
import aboutUsImg from '../assets/images/about/about-hero.svg';
import companyBg from '../assets/images/about/company-bg.svg';
import image1 from '../assets/images/about/main-team/viraj.jpg';
import image2 from '../assets/images/about/main-team/abhi.png';
import image3 from '../assets/images/about/main-team/rahul.webp';
import image4 from '../assets/images/about/main-team/ankit.jpg';
import leftBgImage from '../assets/images/about/main-team/team-logo.svg';
// import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

// const teamMembers = [
//   {
//     image: image1,
//     name: "Viraj Kulkarni",
//     role: "Designer & Front-end Developer",
//     linkedin: "https://www.linkedin.com/in/viraj-kulkarni-516611250/",
//     behance: "https://www.behance.net/virajkulkarni1",
//   },
//   {
//     image: image2,
//     name: "Abhisheksingh",
//     role: "Full-Stack Developer & DevOps",
//     linkedin: "https://www.linkedin.com/in/abhisheksingh-fulanekar/",
//     github: "https://github.com/abhisheksinghf/",
//   },
//   {
//     image: image3,
//     name: "Rahul V.B",
//     role: "Agile & Server-side Management",
//     linkedin: "https://www.linkedin.com/in/rahulvb27/",
//     github: "https://github.com/r-vb/",
//   },
//   {
//     image: image4,
//     name: "Ankit Ronad",
//     role: "Marketing & Client Management",
//     linkedin: "https://www.linkedin.com/in/ankit-ronad-a1866320b/",
//   },
// ];

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  // const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const preloadImages = async () => {
      const images = [aboutUsImg, companyBg, image1, image2, image3, image4];
      await Promise.all(images.map(src => {
        return new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      }));
      // setImagesLoaded(true);
      setLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <div className="relative font-[sans-serif] text-white bg-black min-h-screen py-16">
      {/* Background Images */}
      <section className="relative">
        <img
          src={loading ? '' : aboutUsImg} // Load the image only after loading
          alt="About Us Banner"
          className="w-full h-auto object-cover"
          style={{ display: loading ? 'none' : 'block' }} // Hide image while loading
        />
        {loading && <div className="skeleton-loader h-64 bg-gray-800 w-full"></div>} {/* Skeleton Loader */}
      </section>

      <section className="relative">
        <img
          src={loading ? '' : companyBg}
          alt="Company Background"
          className="w-full h-auto object-cover"
          style={{ display: loading ? 'none' : 'block' }}
        />
        {loading && <div className="skeleton-loader h-64 bg-gray-800 w-full"></div>}
      </section>

      {/* Team Intro Section */}
      {/* <section className="py-12 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold poppins-medium">
          Meet the <span className="ciresta-color">Lead</span>
        </h1>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg">
          Everything you need to <span className="font-bold">grow digitally</span>, we provide the services.
        </p>
      </section> */}

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

      </div>
    </div>
  );
};

export default AboutUs;



