import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { personalInfo, education, certifications } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://customer-assets.emergentagent.com/job_dev-presence-5/artifacts/umyasj21_mypic.jpeg"
                    alt="Saheli Paul - Backend Developer & AI Enthusiast"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full opacity-40 -z-10"></div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Backend Developer & AI Innovator
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              My passion lies in leveraging cutting-edge AI technologies to solve complex business problems 
              and create intelligent applications that make a real impact. I thrive in collaborative environments 
              where innovation meets practical implementation.
            </p>

            {/* Current Learning */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Currently Learning</h4>
              <div className="space-y-2">
                {personalInfo.currentLearning?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-sm text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Projects */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Upcoming Projects</h4>
              <div className="space-y-2">
                {personalInfo.upcomingProjects?.map((project, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-slate-600">{project}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-2">Location</h4>
                <p className="text-slate-600">{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-2">Experience</h4>
                <p className="text-slate-600">5+ Years</p>
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-3 lg:col-span-2"
          >
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id} className="border-l-4 border-l-blue-600">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-800">{edu.degree}</h4>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      <p className="text-sm text-slate-500">{edu.year}</p>
                      {edu.focus && <p className="text-sm text-slate-600 mt-1">Focus: {edu.focus}</p>}
                      {edu.cgpa && <p className="text-sm text-slate-600">CGPA: {edu.cgpa}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="text-slate-800 font-medium">{cert.name}</p>
                      <p className="text-sm text-slate-500">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;