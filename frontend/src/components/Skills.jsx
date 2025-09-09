import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/mockData';
import { Code, Zap, Wrench, Monitor, Brain, Workflow } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: skills.technical,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Specializations",
      icon: Zap,
      skills: skills.specializations,
      color: "bg-slate-50 border-slate-200"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: skills.tools,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Systems & Platforms",
      icon: Monitor,
      skills: skills.systems,
      color: "bg-slate-50 border-slate-200"
    },
    {
      title: "AI-Powered Tools",
      icon: Brain,
      skills: skills.aiTools,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Automation & Workflows",
      icon: Workflow,
      skills: skills.automation,
      color: "bg-slate-50 border-slate-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and AI-powered solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-600 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.03) }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-white text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default text-xs"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Always eager to learn new technologies and frameworks. Currently mastering AI-powered development tools 
            like Cursor and Bolt, while building automation workflows with n8n, Make.com, and Zapier. 
            Proficient in both Linux and Windows environments for versatile development and deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;