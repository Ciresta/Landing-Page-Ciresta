import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the new icons
import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <div className="h-auto bg-gray-200 rounded-xl flex flex-col justify-center items-center p-4 mx-4 mb-4">
            <div className="flex flex-col w-[90%] md:flex-row justify-between">

                <div className="mb-6 mt-3 md:mb-0">
                    <div className="flex items-start mb-4">          
                        <img src={logo} alt="Ciresta Technologies Logo" className="w-6 h-6 flex-shrink-0 mr-2" />
                        <h2 className="text-xl font-semibold text-black">Ciresta Technologies</h2>
                    </div>
                    <p className="text-black mb-4 text-left">One step Solutions for your requirements</p>
                    <ul className="text-black text-[15px] text-left space-y-1 mb-8">
                        <li className="flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> ciresta.contact@gmail.com</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2"  style={{ transform: 'scaleX(-1)' }} /> +91 99451 82560</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Hubli-Dharwad, India</li>
                    </ul>
                </div>


                <div className="flex flex-col mt-3 md:flex-row space-x-0 md:space-x-16 md:space-y-0 space-y-4">
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#services" className="text-black">Our Services</a></li>
                            <li><a href="#contact" className="text-black">Contact Us</a></li>
                            <li><a href="#about" className="text-black">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-medium mb-4">Internships</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#apply" className="text-black">Apply</a></li>
                            <li><a href="#learnmore" className="text-black">Learn more</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-medium mb-4">Resources</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><a href="#help" className="text-black">Help</a></li>
                            <li><a href="#privacy" className="text-black">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-[90%] items-center mt-8">
                <p className="text-black">2024 &copy; copyright - Ciresta Technologies</p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faInstagram} className="text-black" />
                        <a href="#insta" className="text-black-900 ml-2">Follow us on Instagram</a>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                        <a href="#linkedin" className="text-black ml-2">Follow us on LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
