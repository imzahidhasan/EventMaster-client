import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                {/* Footer content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">EventMaster</h3>
                        <p className="text-gray-400 mb-4">
                            Creating memorable experiences through seamless event management solutions.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Events</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Event Street, Suite 500</li>
                            <li>San Francisco, CA 94107</li>
                            <li>info@eventmaster.com</li>
                            <li>(123) 456-7890</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="bg-gray-800 text-white p-2 rounded-l outline-none w-full"
                            />
                            <button className="bg-blue-600 px-4 rounded-r hover:bg-blue-700 transition duration-300">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Bottom footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright */}
                    <div className="text-gray-400 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} EventMaster. All rights reserved.
                    </div>

                    {/* Social media icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;