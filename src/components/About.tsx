
import React from 'react';
import { Code, ShieldCheck, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building scalable applications using React, Node.js, Express, and MongoDB'
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Security',
    description: 'Implementing secure user auth with JWT and best practices'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Crafting creative solutions for complex backend and UI challenges'
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Writing clean, efficient code for fast and responsive apps'
  }
];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
           Full-stack developer building modern and scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img.freepik.com/premium-vector/portrait-male-student-with-glasses_684058-1126.jpg"
                alt="Alex Johnson"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Turning ideas into scalable digital solutions
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          I’m a full-stack developer focused on crafting responsive and high-performing web applications using modern 
          technologies like React, Node.js, Express, and MongoDB. I enjoy building clean, secure, and user-friendly solutions.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Outside of coding, I explore new frameworks, work on personal projects, and continuously improve my skills to stay ahead in tech.
        </p>
      </div>

  {/* Highlights Grid */}
  <div className="grid grid-cols-2 gap-6">
    {highlights.map((item, index) => (
      <div key={index} className="p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
        <item.icon className="text-blue-600 mb-3" size={24} />
        <h4 className="font-semibold text-slate-800 mb-2">{item.title}</h4>
        <p className="text-sm text-slate-600">{item.description}</p>
      </div>
    ))}
  </div>

  {/* Stats */}
      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">12+</div>
          <div className="text-sm text-slate-600">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">1+</div>
          <div className="text-sm text-slate-600">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">10+</div>
          <div className="text-sm text-slate-600">Happy Clients</div>
        </div>
      </div>
    </div>

        </div>
      </div>
    </section>
  );
};

export default About;
