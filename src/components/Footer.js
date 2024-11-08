import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Footer = () => {
    const [gridClass, setGridClass] = useState("grid grid-cols-2");

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
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-4 w-[90%] mb-6">
                <div className="flex flex-col">
                    <div className="flex items-start mb-4">
                        <img src={logo} alt="Ciresta Technologies Logo" className="w-6 h-6 flex-shrink-0 mr-2" />
                        <h2 className="text-xl font-semibold text-black">Ciresta Technologies</h2>
                    </div>
                    <p className="text-black mt-[-12px] mb-4 ml-8 text-left text-sm poppins-extralight-italic">Your vision, our expertise</p>
                    <ul className="text-black text-[15px] text-left space-y-1 mb-8">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <a href="mailto:info@ciresta.in" className="hover:underline">info@ciresta.in</a>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{ transform: 'scaleX(-1)' }} />
                            <a href="tel:+919945182560" className="hover:underline">+91 99451 82560</a>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{ transform: 'scaleX(-1)' }} />
                            <a href="tel:+919341149818" className="hover:underline">+91 93411 49818</a>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            <a href="https://www.google.com/maps/search/?api=1&query=Hubli-Dharwad,India" target="_blank" rel="noopener noreferrer">
                                Hubli-Dharwad, India
                            </a>
                        </li>

                    </ul>
                </div>

                <div id="sections" className={`${gridClass}`}>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><Link to="/about" className="text-black">About</Link></li>
                            <li><Link to="/services" className="text-black">Our Services</Link></li>
                            <li><Link to="/contact" className="text-black">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Internships</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><Link to="/internships" className="text-black">Apply</Link></li>
                            <li><Link to="/internships" className="text-black">Learn more</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            <li><Link to="/contact" className="text-black">Help</Link></li>
                            <li>
                                <a
                                    href="https://www.termsfeed.com/live/f5d7351c-2f01-434c-83a7-6b87bfdf2624"
                                    className="text-black"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-black text-left font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-left text-[15px]">
                            {/* <li><a href="#faqs" className="text-black">FAQs</a></li> */}
                            <li><Link to="/faqs" className="text-black">FAQs</Link></li>
                            <li><a target='_blank   ' href="https://forms.gle/ffFENsbk9CkCM7Zq6" className="text-black">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-[90%] items-center mt-8">
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center mb-2 md:mb-0">
                        <FontAwesomeIcon icon={faInstagram} className="text-black" />
                        <a
                            href="https://www.instagram.com/ciresta.official"
                            className="text-black-900 ml-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Follow us on Instagram
                        </a>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                        <a 
                            href="https://www.linkedin.com/company/ciresta" 
                            className="text-black ml-2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Follow us on LinkedIn
                        </a>
                    </div>
                </div>
                <p className="text-gray-600 text-center text-sm md:text-left" style={{ fontSize: "12px", margin: "7px" }}>
                    2024 &copy; Copyright - Ciresta Technologies
                </p>
            </div>
        </div>
    );
};

export default Footer;
