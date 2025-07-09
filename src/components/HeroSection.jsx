import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" style={{ background: "radial-gradient(ellipse at bottom, #DCD6F7 0%, #fff 100%)" }} className="pt-30 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-[#1f31be] bg-clip-text text-transparent">
                  Nishtha
                </span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                  Full Stack Developer
                </h2>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                  Game Developer
                </h2>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                  Tech Leader
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Passionate about creating innovative digital experiences and leading teams to build exceptional software solutions. 
              From web applications to immersive games, I bring ideas to life through code.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#424874] rounded-xl hover:bg-[#5d65a1] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                <svg 
                  className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-[#A6B1E1] hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                <svg 
                  className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </button>
            </div>

            {/* Tech Stack Icons */}
            <div className="pt-8">
              <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Python', 'Unity', 'TypeScript', 'MongoDB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-50"></div>
              
              {/* Image Placeholder */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-200">
                {/* Profile Image Placeholder */}
                <Image 
                src={"/images/myImage.png"}
                alt="Profile Image"
                className="w-full h-full object-cover rounded-2xl"
                width={450}
                height={450}
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;