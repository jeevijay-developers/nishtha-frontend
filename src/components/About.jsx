import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "MERN Stack Expert",
      description: "Full-stack development with MongoDB, Express.js, React, and Node.js"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Game Developer",
      description: "Creating immersive gaming experiences with modern technologies"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Tech Leader",
      description: "President of Junior JC at JCI Kota Surbhi, leading technical initiatives"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "DSA & Algorithms",
      description: "Strong foundation in data structures and algorithmic problem solving"
    }
  ];

  const experiences = [
    {
      title: "Former NCC Cadet",
      description: "Developed discipline, teamwork, and leadership through military training",
      icon: "🎖️"
    },
    {
      title: "Taekwondo Green Belt",
      description: "Martial arts training fostering focus, perseverance, and strategic thinking",
      icon: "🥋"
    },
    {
      title: "Kathak Diploma",
      description: "Classical dance training enhancing creativity and attention to detail",
      icon: "💃"
    }
  ];

  const techStack = [
    { name: "JavaScript"},
    { name: "React.js"},
    { name: "Node.js"},
    { name: "Python"},
    { name: "Java"},
    { name: "MongoDB"}
  ];

  return (
    <section id="about" style={{ background: "radial-gradient(ellipse at top, #DCD6F7 0%, #fff 100%)" }} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-[#424874] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#424874] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-[#424874] rounded-full mr-4"></span>
                Hello! I'm Nishtha Joshi
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  A passionate web developer and programmer with expertise in the{' '}
                  <span className="font-semibold text-[#424874] dark:text-[#A6B1E1]">MERN stack</span>,{' '}
                  <span className="font-semibold text-[#424874] dark:text-[#A6B1E1]">Java</span>,{' '}
                  <span className="font-semibold text-[#424874] dark:text-[#A6B1E1]">Python</span>, and{' '}
                  <span className="font-semibold text-[#424874] dark:text-[#A6B1E1]">game development</span>.
                </p>
                <p>
                  With a strong foundation in data structures and algorithms, I create efficient, 
                  scalable solutions that solve real-world problems.
                </p>
                <p>
                  As a former{' '}
                  <span className="font-semibold text-[#424874] dark:text-[#A6B1E1]">NCC cadet</span>{' '}
                  and current{' '}
                  <span className="font-semibold text-[#424874] dark:text-[#A6B1E1]">President of Junior JC at JCI Kota Surbhi</span>, 
                  I combine technical expertise with leadership skills to drive projects forward.
                </p>
                <p>
                  My background in martial arts (Green Belt in Taekwondo) and classical dance 
                  (Kathak Diploma) has instilled discipline and creativity that translates into my coding work.
                </p>
              </div>
            </div>

            {/* Unique Experiences */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Beyond Code
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <span className="text-2xl flex-shrink-0">{exp.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Skills & Highlights */}
          <div className="space-y-8">
            {/* Core Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-gradient-to-br from-[#A6B1E1]/20 to-[#424874]/20 dark:from-[#A6B1E1]/10 dark:to-[#424874]/10 hover:from-[#A6B1E1]/30 hover:to-[#424874]/30 dark:hover:from-[#A6B1E1]/20 dark:hover:to-[#424874]/20 transition-all duration-300 border border-[#A6B1E1]/30 dark:border-[#424874]/30">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#A6B1E1] to-[#424874] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {highlight.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Proficiency
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#A6B1E1]/20 to-[#424874]/20 dark:from-[#A6B1E1]/10 dark:to-[#424874]/10 hover:from-[#A6B1E1]/30 hover:to-[#424874]/30 dark:hover:from-[#A6B1E1]/20 dark:hover:to-[#424874]/20 rounded-xl border border-[#A6B1E1]/40 dark:border-[#424874]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#424874] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm opacity-90">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Dedication</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;