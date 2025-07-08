import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  const contactInfo = [
    {
      icon: <MdEmail className="w-8 h-8 text-emerald-400" />,
      title: "Email",
      content: "Nishthajoshi0609@gmail.com",
      link: "mailto:Nishthajoshi0609@gmail.com"
    },
    {
      icon: <MdPhone className="w-8 h-8 text-emerald-400" />,
      title: "Phone",
      content: "+91 8769770846",
      link: "tel:+918769770846"
    },
    {
      icon: <FaLinkedin className="w-8 h-8 text-emerald-400" />,
      title: "LinkedIn",
      content: "linkedin.com/in/Nishthajoshi0609",
      link: "https://linkedin.com/in/Nishthajoshi0609"
    },
    {
      icon: <FaGithub className="w-8 h-8 text-emerald-400" />,
      title: "GitHub",
      content: "github.com/NishthaJoshi",
      link: "https://github.com/NishthaJoshi"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Information
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed break-all">
                  {item.content}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the channels above, and I'll respond promptly. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;