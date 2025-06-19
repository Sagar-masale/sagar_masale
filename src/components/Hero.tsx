
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
    <div className="animate-fade-in">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight  sm:text-center">
        Hello, I'm{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sagar Masale
        </span>
      </h1>


      <p className="text-base sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
        A passionate <span className="font-semibold text-blue-600">React & Full Stack Developer</span>{' '}
        building scalable web applications using modern technologies like MongoDB, Express, React, and Node.js.
      </p>

      {/* Buttons */}
<div className="flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-center items-start sm:items-center mb-10 px-4">
  <button className="min-w-[160px] sm:w-auto px-4 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-sm sm:shadow-lg hover:shadow-xl">
    View My Work
  </button>
  <button className="min-w-[160px] sm:w-auto px-4 py-2 text-sm sm:text-base border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
    Download CV
  </button>
</div>



      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-16">
        <a
          href="https://github.com/Sagar-masale"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-slate-600 hover:text-blue-600"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sagar-masale/"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-slate-600 hover:text-blue-600"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sagarmasalee@gmail.com"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 text-slate-600 hover:text-blue-600"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>

    {/* Scroll Down Button - centered properly */}
    <button
      onClick={scrollToAbout}
      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-pulse"
    >
      <ArrowDown className="text-slate-700 hover:text-blue-600 transition-colors duration-200" size={24} />
    </button>
  </div>
</section>

  );
};

export default Hero;
