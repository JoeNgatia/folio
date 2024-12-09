import React from 'react';

const HugeFooter = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">BLUETECH SOLUTIONS</h3>
                    <p className="text-sm mb-4">Your trusted partner in web solutions. We are dedicated to providing high-quality services that meet your needs.</p>
                    <p className="text-sm">Address: MOMBASA,KENYA </p>
                    <p className="text-sm">Phone: +254700031546</p>
                    <p className="text-sm">Email: ke.bluerose@gmail.com</p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="hover:text-gray-200">About Us</a></li>
                        <li><a href="#services" className="hover:text-gray-200">Services</a></li>
                        <li><a href="#portfolio" className="hover:text-gray-200">Portfolio</a></li>
                        <li><a href="#blog" className="hover:text-gray-200">Blog</a></li>
                        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                    </ul>
                </div>

                {/* Services Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#web-design" className="hover:text-gray-200">Web Design</a></li>
                        <li><a href="#web-development" className="hover:text-gray-200">Web Development</a></li>
                        <li><a href="#seo" className="hover:text-gray-200">SEO Services</a></li>
                        <li><a href="#digital-marketing" className="hover:text-gray-200">Digital Marketing</a></li>
                        <li><a href="#consulting" className="hover:text-gray-200">Consulting</a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription Section */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-sm mb-4">Stay updated with our latest news and offers. Enter your email below:</p>
                    <form className="flex flex-col md:flex-row">
                        <input 
                            type="email"
                            placeholder="Your email address"
                            required
                            className="flex-grow p-2 rounded-md border border-white mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button 
                            type="submit"
                            className="bg-white text-blue-600 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media Links Section */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f text-xl hover:text-gray-200"></i>
                        </a>
                        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter text-xl hover:text-gray-200"></i>
                        </a>
                        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram text-xl hover:text-gray-200"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in text-xl hover:text-gray-200"></i>
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright Section */}
            <div className="mt-10 border-t border-white pt-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default HugeFooter;