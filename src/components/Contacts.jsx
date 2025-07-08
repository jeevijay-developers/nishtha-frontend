import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  const contactInfo = [
    {
      icon: <MdEmail className="w-8 h-8 text-blue-600" />,
      title: "Email",
      content: "Nishthajoshi0609@gmail.com",
      link: "mailto:Nishthajoshi0609@gmail.com"
    },
    {
      icon: <MdPhone className="w-8 h-8 text-purple-600" />,
      title: "Phone",
      content: "+91 8769770846",
      link: "tel:+918769770846"
    },
    {
      icon: <FaLinkedin className="w-8 h-8 text-blue-600" />,
      title: "LinkedIn",
      content: "linkedin.com/in/Nishthajoshi0609",
      link: "https://linkedin.com/in/Nishthajoshi0609"
    },
    {
      icon: <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      title: "GitHub",
      content: "github.com/NishthaJoshi",
      link: "https://github.com/NishthaJoshi"
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ background: "radial-gradient(ellipse at bottom, #34d3eb 0%, #fff 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Information
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed break-all">
                  {item.content}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out through any of the channels above, and I'll respond promptly. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;