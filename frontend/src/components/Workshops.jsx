import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { workshops } from '../data/mockData';
import { Calendar, Users, Clock, PlayCircle, FileText, ChevronRight } from 'lucide-react';

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const openModal = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const closeModal = () => {
    setSelectedWorkshop(null);
  };

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">Workshops & Training</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Sharing knowledge and expertise through comprehensive workshops on AI agent development and advanced backend architectures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div onClick={() => openModal(workshop)}>
                  {/* Workshop Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-slate-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-blue-600/30">
                        🤖
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Workshop Stats Overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-blue-600 text-white">
                          Workshop
                        </Badge>
                        <Badge variant="secondary" className="bg-white/90 text-slate-700">
                          {workshop.date}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {workshop.description}
                    </p>

                    {/* Workshop Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Clock className="h-4 w-4 text-blue-600 mr-1" />
                        </div>
                        <p className="text-xs text-slate-500">Duration</p>
                        <p className="text-sm font-medium text-slate-800">{workshop.duration}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-blue-600 mr-1" />
                        </div>
                        <p className="text-xs text-slate-500">Participants</p>
                        <p className="text-sm font-medium text-slate-800">{workshop.participants}</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                        </div>
                        <p className="text-xs text-slate-500">Date</p>
                        <p className="text-sm font-medium text-slate-800">{workshop.date}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {workshop.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {workshop.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                          +{workshop.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      <span>View Details</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedWorkshop && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">{selectedWorkshop.title}</h3>
                    <div className="flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {selectedWorkshop.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {selectedWorkshop.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {selectedWorkshop.participants}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-slate-400 hover:text-slate-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {selectedWorkshop.description}
                </p>

                {/* Topics Covered */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Topics Covered</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedWorkshop.topics.map((topic, index) => (
                      <div key={index} className="flex items-start text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWorkshop.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-blue-200 text-blue-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                    onClick={() => window.open(selectedWorkshop.recording, '_blank')}
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch Recording
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center"
                    onClick={() => window.open(selectedWorkshop.materials, '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download Materials
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Workshops;