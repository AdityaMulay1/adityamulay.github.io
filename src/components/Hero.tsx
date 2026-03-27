import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Profile Picture */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="https://i.postimg.cc/fyFcH6Qd/Aditya-Mulay.jpg" 
                alt="Aditya Mulay"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Aditya Mulay
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Sparkles className="text-cyan-400 animate-pulse" size={20} />
            <p className="text-lg md:text-xl text-cyan-300 font-medium">
              Cloud Computing | AI | Software Development | Innovation-Driven
            </p>
            <Sparkles className="text-purple-400 animate-pulse" size={20} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Cloud & Gen AI intern at Accenture | B.Tech CSE student from MIT ADT Pune | 
              Builder of intelligent systems powered by modern cloud infrastructure and AI
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <a href="/assets/certificates/Aditya_Mulay_CV.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToProjects}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
            >
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a href="mailto:adityamulay1@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/aditya-mulay1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/AdityaMulay1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Github size={24} />
            </a>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            onClick={scrollToAbout} 
            className="animate-bounce"
          >
            <ArrowDown className="text-white/60 hover:text-cyan-400 transition-colors duration-300" size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
