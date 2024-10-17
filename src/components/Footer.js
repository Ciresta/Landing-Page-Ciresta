import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.svg';

const Footer = () => {
    const [gridClass, setGridClass] = useState("grid grid-cols-2"); // Default to 2 columns for mobile

    useEffect(() => {
        const updateGridClass = () => {
            if (window.innerWidth >= 768) {
                setGridClass("grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4");
            } else {
                setGridClass("grid grid-cols-2 gap-4");
            }
        };

        updateGridClass();
        window.addEventListener('resize', updateGridClass);
        
        return () => window.removeEventListener('resize', updateGridClass);
    }, []);

    return (
        <div className="h-auto bg-gray-200 rounded-xl flex flex-col justify-center items-center p-4 mx-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mb-6">
                <div className="flex flex-col">
                    <div className="flex items-start mb-4">          
                        <img src={logo} alt="Ciresta Technologies Logo" className="w-6 h-6 flex-shrink-0 mr-2" />
                        <h2 className="text-xl font-semibold text-black">Ciresta Technologies</h2>
                    </div>
                    <p className="text-black mb-4 text-left">One step Solutions for your requirements</p>
                    <ul className="text-black text-[15px] text-left space-y-1 mb-8">
                        <li className="flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@ciresta.in</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +91 99451 82560</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{ transform: 'scaleX(-1)' }} /> +91 93411 49818</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Hubli-Dharwad, India</li>
                    </ul>
                </div>

                <div id="sections" className={`${gridClass}`}>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#services" className="text-black">Our Services</a></li>
                            <li><a href="#contact" className="text-black">Contact Us</a></li>
                            <li><a href="#about" className="text-black">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Internships</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#apply" className="text-black">Apply</a></li>
                            <li><a href="#learnmore" className="text-black">Learn more</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#help" className="text-black">Help</a></li>
                            <li><a href="https://www.termsfeed.com/live/d623cfb9-cefc-4ca7-b737-196cc7aac6da" className="text-black">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#faqs" className="text-black">FAQs</a></li>
                            <li><a href="#documentation" className="text-black">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-[90%] items-center mt-8">
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center mb-2 md:mb-0">
                        <FontAwesomeIcon icon={faInstagram} className="text-black" />
                        <a href="#insta" className="text-black-900 ml-2">Follow us on Instagram</a>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                        <a href="#linkedin" className="text-black ml-2">Follow us on LinkedIn</a>
                    </div>
                </div>
                <p className="text-gray-600 text-center text-sm md:text-left" style={{fontSize: "12px", margin: "7px"}}>2024 &copy; Copyright - Ciresta Technologies</p>
            </div>
        </div>
    );
};

export default Footer;
