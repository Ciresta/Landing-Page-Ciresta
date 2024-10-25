import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing Instagram and YouTube icons
import { HiGlobeAlt } from 'react-icons/hi'; // Importing globe icon for website
import Girl from '../../assets/images/services/girlbook.svg'; // Hero Image
import SEOImage from '../../assets/images/services/groupgraph.svg'; // Second Image
import Cameraman from '../../assets/images/services/cameraman.svg'; // Final Image
import ServiceEnd from '../../assets/images/services/services-end.png'; // Final Image

const Layout = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
        {/* Image */}
        <div className="flex justify-center">
          <img src={Girl} alt="SEO & Digital Marketing" className="w-full lg:w-[30rem] h-auto rounded-lg object-cover" />
        </div>
        {/* Content */}
        <div className="text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 poppins-semibold">SEO <span className='ciresta-color'>&</span> Digital Marketing</h1>
          <p className="text-xl mb-4 text-gray-200 poppins-regular-italic">
            "Reach Your <span className='font-bold'>Audience</span>, Build <span className='font-bold'>Connections</span>, and Scale Your Business <span className='font-bold'>Globally</span> with our Digital Marketing Services."
          </p>
          <p className="text-xl mb-6 poppins-regular-italic">"Maximize <span className='font-bold'>ROI</span> with Targeted Campaigns, Data-Driven Insights, and Optimized Content."</p>
          
          {/* Social Media Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center space-x-4">
              <button className="flex items-center space-x-2 ciresta-bg py-2 px-6 rounded-full text-white">
                <FaInstagram className="w-5 h-5" />
                <span className="poppins-regular">Instagram</span>
              </button>
              <button className="flex items-center space-x-2 ciresta-bg py-2 px-6 rounded-full text-white">
                <HiGlobeAlt className="w-5 h-5" />
                <span className="poppins-regular">Website</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 ciresta-bg py-2 px-6 rounded-full text-white">
              <FaYoutube className="w-5 h-5" />
              <span className="poppins-regular">YouTube</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subsection */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 mt-16">
        {/* Content */}
        <div className="text-left">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 poppins-semibold"><span className='ciresta-color'>SEO/SEM</span> for Business Growth</h2>
          <p className="text-lg mb-6 poppins-regular-italic">
            Unlike paid advertising, SEO is a <span className='font-bold'>long-term, cost-effective strategy</span>. Once optimized, organic search results continue to generate traffic without ongoing ad spend.
          </p>
          <p className="text-lg mb-6 poppins-regular-italic">
            Websites that <strong>rank higher</strong> in search results are perceived as more credible by users. <span className='font-bold'>SEO</span> helps build a trustworthy online presence by improving domain authority and relevance.
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img src={SEOImage} alt="SEO" className="w-full lg:w-[30rem] h-auto rounded-lg object-cover" />
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <p className="text-3xl lg:text-5xl font-semibold ciresta-color poppins-semibold-italic">
          “Good content is the backbone of <span className="text-white">Digital Marketing</span>, <br/>but great <span className="text-white">SEO</span> is the engine that drives it.”
        </p>
      </div>

      {/* Final Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 mt-16">
        {/* Image */}
        <div className="flex justify-center">
          <img src={Cameraman} alt="Website Development" className="w-full lg:w-[40rem] h-auto rounded-lg object-cover" />
        </div>
        {/* Content */}
        <div className="text-left">
          <p className="text-lg mb-6 poppins-light-italic">
            At <span className='ciresta-color font-bold'>Ciresta Technologies</span>, we are proud to offer a dedicated media team to handle all your digital marketing needs. Our expert team focuses on crafting tailored strategies that enhance your brand’s visibility and engagement across various platforms. Whether it’s creating compelling content, managing social media, or running data-driven ad campaigns, we ensure that your business stands out in the digital landscape.
          </p>
        </div>
      </div>

      {/* Final Big Image Section */}
      <div className="max-w-7xl mx-auto mb-[-5rem]">
        <img src={ServiceEnd} alt="Service Footer img" className="w-full h-auto rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default Layout;
