
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sagarmasalee@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sagarmasalee@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 77759 12356',
    href: 'tel:+917775912356'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Solapur, Maharashtra, India',
    href: '#'
  }
];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Sagar-masale',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sagar-masale/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: '#',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let’s collaborate to turn your ideas into reality. I’m always excited to explore new projects and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
         
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
              I’m always open to new ideas, collaborations, and opportunities. Whether you're hiring or have an exciting project in mind, feel free to reach out — I’d love to connect.
              </p>
            </div>

            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                    <div className="text-slate-800 font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-slate-600 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Type your name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Let me know how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
