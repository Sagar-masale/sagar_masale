
import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Finding creative solutions to complex challenges'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and methodologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
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
                Building the future, one line of code at a time
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With over 5 years of experience in full-stack development, I specialize in creating 
                robust web applications using modern technologies like React, Node.js, and cloud platforms. 
                I'm passionate about writing clean, efficient code and building user-centered solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or enjoying a good cup of coffee while planning my next big project.
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
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
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
