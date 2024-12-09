import React, { useEffect, useState } from 'react';

const Consult = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Smooth scroll effect for the explore link
    useEffect(() => {
        const exploreButton = document.querySelector('#explore-btn');
        if (exploreButton) {
            exploreButton.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector("#explore").scrollIntoView({ behavior: "smooth" });
            });
        }
    }, []);

    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex items-center justify-center min-h-screen">
            {/* Background Video */}
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30" 
                autoPlay 
                loop 
                muted
            >
                <source src="public/assets/1v.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <div className="relative z-10 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-7xl w-full flex flex-col items-center">
                {/* Search Box */}
                <div className="mb-6 w-full max-w-xs flex justify-center">
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full p-3 rounded-md shadow-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Website Packages in a Straight Line */}
                <div className="w-full flex flex-wrap justify-center gap-6 mt-12">
                    <h3 className="text-3xl font-semibold mb-4 text-gray-800 text-center w-full">Choose Your Website Build Package</h3>
                    <div className="package bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-xl text-center flex-1 max-w-xs transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
                        <h4 className="text-xl font-semibold text-white">Basic Website Package</h4>
                        <p className="text-gray-200 mb-4">Perfect for personal projects or small businesses.</p>
                        <p className="text-xl font-bold text-white">KES 30,000/-</p>
                        <button 
                            className="bg-white text-blue-600 px-6 py-3 rounded-md mt-4 transition-colors duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110">
                            Buy Now
                        </button>
                    </div>
                    <div className="package bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 p-6 rounded-lg shadow-xl text-center flex-1 max-w-xs transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
                        <h4 className="text-xl font-semibold text-white">Premium Website Package</h4>
                        <p className="text-gray-200 mb-4">Ideal for growing businesses looking for advanced features.</p>
                        <p className="text-xl font-bold text-white">KES 60,000 /-</p>
                        <button 
                            className="bg-white text-blue-600 px-6 py-3 rounded-md mt-4 transition-colors duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110">
                            Buy Now
                        </button>
                    </div>
                    <div className="package bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-800 p-6 rounded-lg shadow-xl text-center flex-1 max-w-xs transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
                        <h4 className="text-xl font-semibold text-white">Enterprise Website Package</h4>
                        <p className="text-gray-200 mb-4">For large enterprises needing high-performance and custom solutions.</p>
                        <p className="text-xl font-bold text-white">KES 200,000/-</p>
                        <button 
                            className="bg-white text-blue-600 px-6 py-3 rounded-md mt-4 transition-colors duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consult;
