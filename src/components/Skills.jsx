import React from 'react';

const Skills = () => {
  const skillLevels = [
    {
      level: "Advanced",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["MERN Stack", "JavaScript", "HTML/CSS"],
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    },
    {
      level: "Proficient",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: ["Java", "Python", "SQL", "Git", "Game Development"],
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    },
    {
      level: "Core",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["Data Structures & Algorithms", "Problem Solving", "Competitive Programming"],
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Skills &{' '}
          <span className="bg-gradient-to-r from-[#A6B1E1] to-[#424874] bg-clip-text text-transparent">
            Expertise
          </span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#A6B1E1] to-[#424874] mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {skillLevels.map((category, index) => (
          <div key={index} className="group">
            <div className={`bg-gradient-to-r ${category.bgGradient} rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  {category.level}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-[#A6B1E1]/20 to-[#424874]/20 rounded-2xl border border-[#A6B1E1]/30">
        <p className="text-gray-700 text-center leading-relaxed">
          I've developed a comprehensive skill set through hands-on experience and continuous learning. 
          My technical foundation is built on strong problem-solving abilities, backed by practical knowledge 
          of modern development tools and frameworks.
        </p>
      </div>
    </div>
  );
};

export default Skills;
