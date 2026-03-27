import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Award, Camera, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={16} /> },
    { name: 'About', icon: <User size={16} /> },
    { name: 'Projects', icon: <Briefcase size={16} /> },
    { name: 'Certificates', icon: <Award size={16} /> },
    { name: 'Gallery', icon: <Camera size={16} /> },
    { name: 'Contact', icon: <Mail size={16} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            AM
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.name)}
                className="glass glass-hover px-4 py-2 rounded-full text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden glass rounded-full p-2 text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass rounded-2xl mb-4 p-4 border border-white/10"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.name)}
                  className="flex items-center gap-3 w-full text-left py-3 px-2 text-white/80 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
