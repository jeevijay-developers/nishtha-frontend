import Image from 'next/image';
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Game Developer Certification",
      image: "/images/whitehatJR.svg",
      description: "Comprehensive training in game design principles, mechanics, and implementation using industry-standard tools.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    },
    {
      title: "Advanced React & Redux",
      image: "/images/udemy.svg",
      description: "Mastery of component architecture, state management, and modern React patterns.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    },
    {
      title: "MongoDB Database Administration",
      image: "/images/MDBUniv.svg",
      description: "Database design, performance optimization, and security implementation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    },
    {
      title: "Data Structures & Algorithms",
      image: "/images/GFG.svg",
      description: "Advanced problem-solving techniques and algorithm optimization.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-[#A6B1E1] to-[#424874]",
      bgGradient: "from-[#A6B1E1]/20 to-[#424874]/20"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-[#A6B1E1] to-[#424874] bg-clip-text text-transparent">
            Certifications
          </span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#A6B1E1] to-[#424874] mx-auto rounded-full"></div>
      </div>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="group">
            <div className={`relative bg-gradient-to-r ${cert.bgGradient} rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg`}>
              {/* Connection Line for Timeline Effect */}
              {index < certifications.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-[#A6B1E1] to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">
                      {cert.title}
                    </h4>
                    <div className="bg-white px-4 py-2 rounded-full border border-gray-200 mt-2 sm:mt-0 self-start sm:self-auto">
                      <div className="w-20 h-8 relative flex items-center justify-center">
                        <Image 
                          src={cert.image} 
                          alt={`${cert.title} certification`} 
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-[#424874] rounded-2xl text-white shadow-xl">
        <div className="text-center">
          <h4 className="text-lg font-bold mb-2">Continuous Learning</h4>
          <p className="text-white/90 leading-relaxed">
            I believe in staying updated with the latest technologies and best practices. 
            These certifications represent my commitment to professional growth and excellence in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
