import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <a href="/" aria-label="Homepage">BLUETECH SOLUTIONS</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-gray-300 hover:text-white">Consult</a>
                    <a href="#about" className="text-gray-300 hover:text-white">SEO</a>
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen} className="text-gray-300 hover:text-white focus:outline-none">
                            Services
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-gray-700 rounded-md shadow-lg transition-opacity duration-300 ease-in-out">
                                <a href="#web-development" className="block px-4 py-2 text-gray-300 hover:text-white">Web Development</a>
                                <a href="#seo" className="block px-4 py-2 text-gray-300 hover:text-white">SEO Services</a>
                                <a href="#consulting" className="block px-4 py-2 text-gray-300 hover:text-white">Consulting</a>
                            </div>
                        )}
                    </div>
                    <a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen} className="text-white focus:outline-none">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-2 mt-2">
                        <a href="#home" className="block text-gray-300 hover:text-white">Home</a>
                        <a href="#about" className="block text-gray-300 hover:text-white">About</a>
                        <a href="#web-development" className="block text-gray-300 hover:text-white">Web Development</a>
                        <a href="#seo" className="block text-gray-300 hover:text-white">SEO Services</a>
                        <a href="#consulting" className="block text-gray-300 hover:text-white">Consulting</a>
                        <a href="#contact" className="block text-gray-300 hover:text-white">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;