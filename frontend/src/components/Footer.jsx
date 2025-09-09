import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: personalInfo.github,
      color: "hover:text-slate-700"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      link: personalInfo.linkedin,
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      link: `mailto:${personalInfo.email}`,
      color: "hover:text-blue-600"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Saheli Paul</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Backend Developer & AI Enthusiast passionate about building scalable, 
              intelligent solutions that make a real impact.
            </p>
            <p className="text-slate-500 text-sm">
              Based in {personalInfo.location}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'workshops', label: 'Workshops' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-slate-400 mb-6">
              Open to new opportunities and collaborations.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.title}
                    href={social.link}
                    target={social.title === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 rounded-lg text-slate-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>

            <p className="text-slate-500 text-sm">
              {personalInfo.email}
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Saheli Paul. All rights reserved.
          </p>
          <div className="flex items-center text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            <span>and lots of coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;