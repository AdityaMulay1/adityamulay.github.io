import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Code, Settings, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Aurora Mental Health Assistance System",
      description: "Award-winning AI-powered mental health platform with NLP journaling, mood tracking, guided meditation, and DeepSeek AI integration.",
      technologies: ["Python", "Web Dev", "API", "NLP", "Kotlin", "AI"],
      highlights: ["₹2,00,000 funding", "Best Project at MIT Ideation 2024"],
      icon: <Star className="text-yellow-400" size={24} />,
      gradient: "from-yellow-400 to-orange-500",
      demoLink: "https://aurora-mhcb.netlify.app/",
      videoLink: "https://www.youtube.com/watch?v=wQULfuvJ_WI",
      isExternal: true
    },
    {
      title: "Audoria – AI-Powered Music Analysis Platform",
      description: "Intelligent platform delivering detailed, timestamp-synced music analysis with advanced genre detection, structured feedback on arrangement, composition, and mastering.",
      technologies: ["AI/ML", "Audio Processing", "MIR", "Genre Classification", "Web UI/UX"],
      highlights: ["Indian sub-genre support", "Real-time synchronized feedback"],
      icon: <Code className="text-pink-400" size={24} />,
      gradient: "from-pink-400 to-purple-500",
      demoLink: "https://audoria.netlify.app",
      isExternal: true
    },
    {
      title: "Air Quality Monitoring Project",
      description: "Real-time AQI monitoring system with ML-based predictive pollution modeling and comprehensive cloud dashboard analytics.",
      technologies: ["Python", "Arduino", "ThingSpeak", "ML", "IoT"],
      highlights: ["Live cloud monitoring", "Predictive modeling"],
      icon: <Settings className="text-green-400" size={24} />,
      gradient: "from-green-400 to-blue-500",
      demoLink: "https://thingspeak.mathworks.com/channels/2748708",
      detailLink: "/air-guardian",
      isExternal: true
    },
    {
      title: "Aneka Lab – Distributed Computing",
      description: "Academic research projects including image convolution and Mandelbrot Set computation using Aneka Cloud platform.",
      technologies: ["Aneka Cloud", "Distributed Systems", "Research"],
      highlights: ["Academic recognition", "NAAC accreditation contribution"],
      icon: <Code className="text-purple-400" size={24} />,
      gradient: "from-purple-400 to-pink-500",
      detailLink: "/aneka-lab",
      isExternal: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass glass-hover neon-glow rounded-2xl overflow-hidden h-full group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <div className="absolute inset-2 bg-black/40 rounded-xl flex items-center justify-center">
                      <div className="text-white drop-shadow-lg">
                        {React.cloneElement(project.icon, { className: 'text-white', size: 24 })}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="glass text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    {project.videoLink && (
                      <Button 
                        asChild
                        size="sm"
                        className="glass glass-hover border-red-400/50 text-red-400 hover:text-white flex-1"
                      >
                        <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                          <Play size={16} className="mr-1" />
                          Video
                        </a>
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button 
                        asChild
                        size="sm"
                        className="glass glass-hover border-cyan-400/50 text-cyan-400 hover:text-white flex-1"
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.detailLink && !project.isExternal && (
                      <Button 
                        asChild
                        size="sm"
                        className="glass glass-hover border-purple-400/50 text-purple-400 hover:text-white flex-1"
                      >
                        <Link to={project.detailLink}>
                          Details
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
