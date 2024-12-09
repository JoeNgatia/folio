import React from 'react';

const Languages = () => {
    const frontEndLanguages = [
        { name: 'JavaScript', logo: 'https://img.icons8.com/color/48/000000/javascript.png' },
        { name: 'React', logo: 'https://img.icons8.com/color/48/000000/react-native.png' },
        { name: 'HTML5', logo: 'https://img.icons8.com/color/48/000000/html-5.png' },
        { name: 'CSS3', logo: 'https://img.icons8.com/color/48/000000/css3.png' },
        { name: 'TypeScript', logo: 'https://img.icons8.com/color/48/000000/typescript.png' },
    ];

    const backEndLanguages = [
        { name: 'Node.js', logo: 'https://img.icons8.com/color/48/000000/nodejs.png' },
        { name: 'Python', logo: 'https://img.icons8.com/color/48/000000/python.png' },
        { name: 'Java', logo: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png' },
        { name: 'PHP', logo: 'https://img.icons8.com/color/48/000000/php.png' },
        { name: 'Ruby', logo: 'https://img.icons8.com/color/48/000000/ruby-programming-language.png' },
    ];

    return (
        <section className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-7xl mx-auto my-12">
            <h2 className="text-3xl font-semibold text-center mb-6">Languages We Know</h2>
            <div className="flex flex-col md:flex-row justify-between">
                {/* Frontend Languages */}
                <div className="mb-6 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Front-End Technologies</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {frontEndLanguages.map((lang) => (
                            <div key={lang.name} className="flex flex-col items-center">
                                <img src={lang.logo} alt={lang.name} className="w-12 h-12 mb-2" />
                                <span className="text-sm text-gray-600">{lang.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Languages */}
                <div className="mb-6 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Back-End Technologies</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {backEndLanguages.map((lang) => (
                            <div key={lang.name} className="flex flex-col items-center">
                                <img src={lang.logo} alt={lang.name} className="w-12 h-12 mb-2" />
                                <span className="text-sm text-gray-600">{lang.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Languages;