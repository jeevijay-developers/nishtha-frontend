"use client";
import React, { useState } from 'react';
import { FaCode, FaGamepad, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with secure payment processing",
      image: "/placeholder-ecommerce.svg",
      technologies: [
        { icon: <FaReact className="w-5 h-5" />, name: "React" },
        { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
        { icon: <SiMongodb className="w-5 h-5" />, name: "MongoDB" },
        { icon: <SiExpress className="w-5 h-5" />, name: "Express" }
      ],
      features: [
        "Secure payment integration",
        "User authentication",
        "Product catalog management",
        "Order tracking system"
      ]
    },
    {
      title: "Task Management App",
      description: "React-based productivity tool with real-time updates",
      image: "/placeholder-taskapp.svg",
      technologies: [
        { icon: <FaReact className="w-5 h-5" />, name: "React" },
        { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind" },
        { icon: <FaDatabase className="w-5 h-5" />, name: "Firebase" },
        { icon: <SiJavascript className="w-5 h-5" />, name: "JavaScript" }
      ],
      features: [
        "Real-time collaboration",
        "Task prioritization",
        "Progress tracking",
        "Team management"
      ]
    },
    {
      title: "Personal Blog System",
      description: "Content management system with custom admin dashboard",
      image: "/placeholder-blog.svg",
      technologies: [
        { icon: <FaReact className="w-5 h-5" />, name: "React" },
        { icon: <FaNodeJs className="w-5 h-5" />, name: "Node.js" },
        { icon: <SiMongodb className="w-5 h-5" />, name: "MongoDB" },
        { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind" }
      ],
      features: [
        "Custom admin dashboard",
        "Rich text editor",
        "SEO optimization",
        "Comment system"
      ]
    }
  ];

  const gameProjects = [
    {
      title: "Educational Coding Game",
      description: "Interactive game that teaches programming concepts through engaging gameplay",
      image: "/placeholder-codinggame.svg",
      features: [
        "Visual programming interface",
        "Progressive difficulty levels",
        "Achievement system",
        "Real-time code execution"
      ]
    },
    {
      title: "Adventure Quest Game",
      description: "Complex adventure game with intricate storylines and challenging mechanics",
      image: "/placeholder-adventure.svg",
      features: [
        "Complex storyline system",
        "Character progression",
        "Inventory management",
        "Multiple game endings"
      ]
    },
    {
      title: "Puzzle Master Collection",
      description: "Collection of mind-bending puzzles with increasing complexity",
      image: "/placeholder-puzzle.svg",
      features: [
        "Multiple puzzle types",
        "Hint system",
        "Level editor",
        "Leaderboard system"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ background: "radial-gradient(ellipse at top, #DCD6F7 0%, #fff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My{' '}
            <span className="bg-[#424874] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          {/* <div className="w-24 h-1 bg-[#424874] mx-auto rounded-full"></div> */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#424874] to-[#A6B1E1] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project demonstrates my ability to create robust, user-friendly applications from concept to deployment. 
            I focus on writing clean, maintainable code while ensuring optimal performance and accessibility across all devices.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200 flex space-x-2">
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'web'
                  ? 'text-white shadow-md'
                  : 'text-gray-700 hover:text-white'
              }`}
              style={activeTab === 'web' ? { backgroundColor: '#424874' } : {}}
              onMouseEnter={(e) => {
                if (activeTab !== 'web') {
                  e.target.style.backgroundColor = '#A6B1E1';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'web') {
                  e.target.style.backgroundColor = '';
                }
              }}
            >
              <FaCode className="w-4 h-4 mr-2" />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('game')}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'game'
                  ? 'text-white shadow-md'
                  : 'text-gray-700 hover:text-white'
              }`}
              style={activeTab === 'game' ? { backgroundColor: '#424874' } : {}}
              onMouseEnter={(e) => {
                if (activeTab !== 'game') {
                  e.target.style.backgroundColor = '#A6B1E1';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'game') {
                  e.target.style.backgroundColor = '';
                }
              }}
            >
              <FaGamepad className="w-4 h-4 mr-2" />
              Game Development
            </button>
          </div>
        </div>

        {/* Web Development Projects */}
        {activeTab === 'web' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Web Development Projects</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#A6B1E1]">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center px-3 py-1 rounded-full text-sm border border-gray-200" style={{ backgroundColor: 'rgba(166, 177, 225, 0.1)' }}>
                          <span className="mr-1" style={{ color: '#424874' }}>{tech.icon}</span>
                          <span className="text-gray-700">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900">Key Features:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#424874' }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Game Development Projects */}
        {activeTab === 'game' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Game Development Showcase</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As a certified Game Developer through WhiteHat Jr., I've created several interactive games that balance engaging gameplay 
                with clean code architecture. My projects range from educational games that teach coding concepts to adventure games 
                with complex mechanics and storylines.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {gameProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#A6B1E1]">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <h5 className="font-semibold text-gray-900">Game Features:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#424874' }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certification Badge */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm font-medium" style={{ color: '#424874' }}>
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#424874' }}></span>
                        WhiteHat Jr. Certified
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
