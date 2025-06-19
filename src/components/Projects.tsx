import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import pbsimg from "./images/pbsjewellers.png";
import proEliteImg from "./images/proElite.png"
import FolioImg from "./images/Folio.png"
const Projects = () => {
  const projects = [
    {
      title: 'PBS Jewellers Website',
      description: 'A modern jewelry e-commerce website built with React, Node.js, and MongoDB. Features include OTP verification, JWT-based authentication, product pages, and admin controls.',
      image: pbsimg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'JWT'],
      githubUrl: '#',
      liveUrl: 'https://pbsjewellers.vercel.app/',
      featured: true
    },

    {
      title: 'ProElite Technologies Website',
      description: 'A professional business website built for ProElite Technologies. Features include responsive design, service listings, contact form, and modern UI to showcase company offerings effectively.',
      image: proEliteImg,
      technologies: ['Html', 'Css', 'Javascript'],
      githubUrl: '#', // Add your actual GitHub repo link here if available
      liveUrl: 'https://proelitetechnologies.com/',
      featured: true
    },

    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current conditions and forecasts with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive and performance-optimized portfolio built with modern technologies. It showcases my projects, skills, and experience with smooth transitions and clean UI.',
      image: FolioImg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel', 'Render'],
      githubUrl: 'https://github.com/Sagar-masale/sagar_masale',
      liveUrl: 'https://sagarmasale.vercel.app/',
      featured: false
    }

  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects That Define My Craft</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A collection of my best work focused on clean code and real-world problem solving.
        </p>
      </div>


        <div className="grid gap-8">
          {/* Featured Projects - Large Cards */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects - Grid Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-slate-600 hover:text-slate-800 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
