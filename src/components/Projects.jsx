import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project Alpha',
            description: 'A comprehensive web application for managing team tasks and projects effectively.',
            link: 'https://example.com/project-alpha',
            image: 'https://via.placeholder.com/300x200?text=Project+Alpha'
        },
        {
            title: 'Project Beta',
            description: 'An e-commerce platform designed for seamless online shopping experiences.',
            link: 'https://example.com/project-beta',
            image: 'https://via.placeholder.com/300x200?text=Project+Beta'
        },
        {
            title: 'Project Gamma',
            description: 'A mobile app focused on health and fitness tracking for users on the go.',
            link: 'https://example.com/project-gamma',
            image: 'https://via.placeholder.com/300x200?text=Project+Gamma'
        },
        {
            title: 'Project Delta',
            description: 'A blog platform that allows users to share articles and insights easily.',
            link: 'https://example.com/project-delta',
            image: 'https://via.placeholder.com/300x200?text=Project+Delta'
        },
    ];

    return (
        <section className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-7xl mx-auto my-12">
            <h2 className="text-3xl font-semibold text-center mb-6">Projects We Have Completed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((project) => (
                    <div key={project.title} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-700"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;