import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Users, Code, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: <Filter size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'meetups', label: 'Meetups', icon: <Users size={16} /> },
    { id: 'personal', label: 'Personal', icon: <Camera size={16} /> }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Aurora at Project Expo",
      category: "projects",
      image: "/assets/gallery/Aurora at Project Expo.png",
      description: "Aurora Mental Health platform showcase at project expo"
    },
    {
      id: 2,
      title: "Air Guardian Data Collection",
      category: "projects", 
      image: "/assets/gallery/Air Guardian Data Collection.png",
      description: "IoT air quality monitoring system data collection"
    },
    {
      id: 3,
      title: "Audoria AI Music Analysis",
      category: "projects",
      image: "/assets/gallery/Audoria AI Music Analysis.png",
      description: "AI-powered music analysis application"
    },
    {
      id: 4,
      title: "Shark Tank Members Meetup",
      category: "meetups",
      image: "/assets/gallery/Sharktank Members Meetup.jpg",
      description: "Meeting with Shark Tank India entrepreneurs"
    },
    {
      id: 5,
      title: "IdeaSpark Winner Certificate",
      category: "personal",
      image: "/assets/gallery/Certificate IdeaSpark Winner.jpg",
      description: "Winner certificate from IdeaSpark competition"
    },
    {
      id: 6,
      title: "IdeaSpark Trophy",
      category: "personal",
      image: "/assets/gallery/IdeaSpark Trophy.jpg",
      description: "Trophy from IdeaSpark innovation competition"
    },
    {
      id: 7,
      title: "Felicitation at IdeaSpark",
      category: "personal",
      image: "/assets/gallery/Felicitation IdeaSpark.png",
      description: "Felicitation ceremony at IdeaSpark event"
    },
    {
      id: 8,
      title: "Weather App Mini Project",
      category: "projects",
      image: "/assets/gallery/Weather APP Mini Project.png",
      description: "Weather application mini project"
    },
    {
      id: 9,
      title: "YouTube Clone Project",
      category: "projects",
      image: "/assets/gallery/Youtube Clone Mini Project.png",
      description: "YouTube clone application project"
    },
    {
      id: 10,
      title: "TikTacToe Game",
      category: "projects",
      image: "/assets/gallery/TikTacToe Mini Project.jpg",
      description: "Interactive TikTacToe game project"
    },
    {
      id: 11,
      title: "Time Clock Application",
      category: "projects",
      image: "/assets/gallery/TimeClock Mini Project.png",
      description: "Digital time clock application"
    },
    {
      id: 12,
      title: "Stopwatch Application",
      category: "projects",
      image: "/assets/gallery/Stopwatch Mini Project.jpg",
      description: "Stopwatch timer application"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Gallery & Moments
          </span>
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`glass glass-hover rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border-cyan-400/50 text-cyan-400 glow' 
                  : 'border-white/20 text-gray-400 hover:text-white'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass glass-hover neon-glow rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                        <Camera className="text-white/40" size={48} />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 glass border-cyan-400/30 text-cyan-300">
                      {categories.find(cat => cat.id === item.category)?.label}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
};

export default Gallery;