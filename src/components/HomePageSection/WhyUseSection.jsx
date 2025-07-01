import React from 'react';
import { FaCalendarPlus, FaSearch, FaUserPlus, FaShieldAlt } from 'react-icons/fa';

const WhyUseSection = () => {
    const features = [
        {
            icon: <FaCalendarPlus className="w-full h-full" />,
            title: "Create Events Instantly",
            description: "No coding or tech skills required — just fill out a simple form."
        },
        {
            icon: <FaSearch className="w-full h-full" />,
            title: "Smart Filtering & Search",
            description: "Quickly find events using title search or custom date filters."
        },
        {
            icon: <FaUserPlus className="w-full h-full" />,
            title: "Join with One Click",
            description: "Say goodbye to RSVP forms — one click and you're in."
        },
        {
            icon: <FaShieldAlt className="w-full h-full" />,
            title: "Secure & Private",
            description: "Custom-built authentication with secure data handling."
        }
    ];

    return (
        <section className="py-20 relative bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(#3730a3_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Platform?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our platform provides everything you need to create, manage, and join events with ease.</p>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center group">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6 p-3 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUseSection;