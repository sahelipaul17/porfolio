import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mockData';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A journey through innovative projects and technological excellence in backend development and AI integration
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2">{exp.title}</h3>
                          <h4 className="text-xl text-blue-600 font-medium mb-3">{exp.company}</h4>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.duration}
                            </div>
                          </div>
                          
                          <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-slate-800 mb-3">Key Achievements</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="flex items-start text-slate-600"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                              >
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;