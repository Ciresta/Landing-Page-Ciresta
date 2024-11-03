import React from 'react';
import { Link } from 'react-router-dom';
import innovativeImage from '../assets/images/hero/innvative.jpeg';
import expertTeamImage from '../assets/images/hero/exprt.jpeg';
import clientCentricImage from '../assets/images/hero/client.jpeg';
import backgroundImage from '../assets/images/hero/innvative.jpeg';

const WhyChooseUs = () => {
    return (
        <section className="bg-black py-16 relative overflow-hidden">
            <div className="absolute inset-0 transform -translate-y-1/2 z-0">
                <img
                    src={backgroundImage}
                    alt="Background Graphic"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-2xl md:text-5xl font-bold text-center text-white mb-6 poppins-semibold">
                    Why <span className="ciresta-color">Choose Us?</span>
                </h2>

                <p className="text-center text-gray-300 poppins-light text-lg mb-12 max-w-3xl mx-auto">
                    We provide innovative <span className="poppins-bold">digital solutions</span> tailored to your needs, ensuring your success in the <span className="poppins-bold">online world.</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="relative overflow-hidden rounded-lg p-6 shadow-lg bg-[#1a1a1a] transition-transform duration-300 transform hover:scale-105 z-10"> {/* z-10 */}
                        <h3 className="text-2xl poppins-semibold text-white mb-3">Innovative <span className="ciresta-color">Solutions</span></h3>
                        <p className="text-gray-300 poppins-regular-italic mb-4">
                            We leverage <span className="poppins-bold-italic">cutting-edge technology</span> to create solutions that stand out and drive results.
                        </p>
                        <img
                            src={innovativeImage}
                            alt="Innovative Solutions"
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                    </div>

                    <div className="relative overflow-hidden rounded-lg p-6 shadow-lg bg-[#1a1a1a] transition-transform duration-300 transform hover:scale-105 z-10"> {/* z-10 */}
                        <h3 className="text-2xl poppins-semibold text-white mb-3">Expert <span className="ciresta-color">Team</span></h3>
                        <p className="text-gray-300 poppins-regular-italic mb-4">
                            Our experienced professionals are dedicated to <span className="poppins-bold-italic">delivering excellence</span> at every step.
                        </p>
                        <img
                            src={expertTeamImage}
                            alt="Expert Team"
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                    </div>

                    <div className="relative overflow-hidden rounded-lg p-6 shadow-lg bg-[#1a1a1a] transition-transform duration-300 transform hover:scale-105 z-10"> {/* z-10 */}
                        <h3 className="text-2xl poppins-semibold text-white mb-3">Client-Centric <span className="ciresta-color">Approach</span></h3>
                        <p className="text-gray-300 poppins-regular-italic mb-4">
                            We prioritize your needs, ensuring that our solutions align perfectly with your <span className="poppins-bold-italic">business goals.</span>
                        </p>
                        <img
                            src={clientCentricImage}
                            alt="Client-Centric Approach"
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <div className="relative z-10 mt-12">
                    <h3 className="text-3xl poppins-bold text-center text-white mb-6">
                        Our <span className="ciresta-color">Commitment</span> to You
                    </h3>
                    <p className="text-center text-gray-300 poppins-regular-italic text-lg max-w-2xl mx-auto mb-8">
                        With a focus on innovation, quality, and customer satisfaction, we strive to exceed your expectations and help you achieve your digital goals.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/contact"
                            className="ciresta-bg text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-opacity-30 poppins-semibold"
                        >
                            Get in Touch
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
