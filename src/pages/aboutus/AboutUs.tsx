import React from 'react';
import { motion } from 'framer-motion';
import storyImg from "../../assets/story.jpg"
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';
const AboutUs: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">About SCWS</h1>

            <motion.div
                    className="shadow-lg p-6 bg-white rounded-lg mb-8 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                    <h2 className="text-2xl font-semibold">Our Story</h2>
                    <p className="mt-2">
                        Sarker Car Wash Services (SCWS) was founded by Zdash Pranesh, a car enthusiast with a vision to provide top-notch car cleaning services. With a passion for automobiles and a commitment to excellence, Zdash started SCWS with a dream to transform the car wash experience.
                    </p>
                    </div>
                    <div className='max-w-[500px]'>
                      <img src={storyImg} alt="story" />
                    </div>
                </motion.div>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <motion.div
                    className="shadow-lg p-6 bg-white rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="mt-2">
                        At SCWS, our mission is to deliver exceptional car wash services that exceed our customers' expectations. We strive to create a hassle-free experience, making it easy to book slots and receive quality service.
                    </p>
                </motion.div>

                <motion.div
                    className="shadow-lg p-6 bg-white rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold">Our Vision</h2>
                    <p className="mt-2">
                        Our vision is to be the leading car wash service, recognized for our quality and customer service. We aspire to expand while positively impacting the environment and our community.
                    </p>
                </motion.div>

                <motion.div
                    className="shadow-lg p-6 bg-white rounded-lg col-span-1 md:col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>Expert and trained staff committed to quality service.</li>
                        <li>Flexible booking options with specific time slots.</li>
                        <li>Use of eco-friendly products.</li>
                        <li>Competitive pricing for a premium experience.</li>
                        <li>Customer-centric approach.</li>
                    </ul>
                </motion.div>
            </div>
            <div>
                 <motion.div
                    className="shadow-lg p-6 bg-white rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                       >
                    <h2 className="text-2xl font-semibold">Our Team</h2>
                    <p className="mt-2">
                        Our dedicated professionals share a common goal: to provide the best car wash experience. We invest in their growth to ensure quality service.
                    </p>
                  </motion.div>

                  <TeamMember/>
            </div>
            <div className="text-center mt-8">
                <motion.button
                    className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 hover:bg-green-700"
                    whileHover={{ scale: 1.05 }} 
                >
                    <Link to='/service'>Book a Service</Link>
                </motion.button>
            </div>
        </div>
    );
};

export default AboutUs;
