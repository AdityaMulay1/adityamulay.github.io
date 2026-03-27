
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User, Settings, Mail } from 'lucide-react';

const Leadership = () => {
  const achievements = [
    {
      title: "MIT Ideation 2024 Winner",
      description: "Won the prestigious MIT Ideation competition with Aurora project",
      highlight: "INR 2,00,000 funding from Crieya",
      icon: <Star className="text-yellow-400" size={24} />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Aneka Lab Setup",
      description: "Established Distributed Computing Research Lab",
      highlight: "Research infrastructure development",
      icon: <Settings className="text-blue-400" size={24} />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "MIT ADT Debate Champion",
      description: "Winner of the inter-college debate competition",
      highlight: "Public speaking and argumentation excellence",
      icon: <User className="text-green-400" size={24} />,
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Event Organizer",
      description: "Organized multiple hackathons and tech events",
      highlight: "Community building and event management",
      icon: <Mail className="text-purple-400" size={24} />,
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="leadership" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Leadership & Achievements
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4`}>
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{achievement.description}</p>
                
                <div className="bg-white/10 rounded-lg p-3 border-l-4 border-cyan-400">
                  <p className="text-cyan-300 text-sm font-medium">{achievement.highlight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Services Offered</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-cyan-400 font-semibold mb-2">AI System Prototyping</h4>
                  <p className="text-gray-400 text-sm">Rapid development of AI-powered solutions</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Cloud Infrastructure Setup</h4>
                  <p className="text-gray-400 text-sm">Scalable cloud architecture design</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-2">IoT Integration</h4>
                  <p className="text-gray-400 text-sm">Smart device connectivity solutions</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-orange-400 font-semibold mb-2">Tech Mentorship</h4>
                  <p className="text-gray-400 text-sm">Guidance for competitions and ideation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
