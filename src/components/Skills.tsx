
import React from 'react';

const Skills = () => {
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 64 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'JavaScript', level: 90 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 64 },
      { name: 'MongoDB', level: 74 },
      { name: 'JWT Auth', level: 85 }
    ]
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Vercel', level: 90 },
      { name: 'Render', level: 85 },
    ]
  },
  {
  title: 'AI & Productivity Tools',
  skills: [
    { name: 'ChatGPT', level: 90 },
    { name: 'GitHub Copilot', level: 85 }
  ]
}

];


const technologies = [
  'React.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git & GitHub',
  'Vercel',
  'Render',
  'ChatGPT',
  'GitHub Copilot',
  'HTML',
  'CSS',
  'JavaScript',
  'JWT Authentication'
];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                     <span className="text-slate-700 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-slate-500 text-xs sm:text-sm">{skill.level}%</span>

                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap sm:flex-row max-sm:grid max-sm:grid-cols-2 justify-center gap-2 sm:gap-3 px-4 sm:px-0">
          {technologies.map((tech, index) => (
        <span
          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full font-medium text-xs sm:text-sm md:text-base hover:from-blue-200 hover:to-purple-200 transition-all duration-200 hover:scale-105 cursor-default text-center"
        >
          {tech}
        </span>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
