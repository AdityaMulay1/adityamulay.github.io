
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-full">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Packaged Application Development – Associate Software Engineer (ASE) Track</h3>
                      <p className="text-cyan-400 text-lg font-medium">Accenture</p>
                    </div>
                    <div className="text-purple-400 font-medium">
                      May 2025 – July 2025
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <ul className="text-gray-300 leading-relaxed space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Engineered full-stack enterprise applications using Java, Maven, Thymeleaf, and Bootstrap CSS, while integrating Generative AI and RPA technologies to automate and enhance business workflows.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Collaborated within agile development teams to design scalable backend systems and dynamic UIs, emphasizing modular design, clean code practices, and performance optimization.
                      </li>
                    </ul>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-cyan-400 font-semibold mb-2">Java & Maven</h4>
                        <p className="text-gray-400 text-sm">Full-stack development</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-purple-400 font-semibold mb-2">Thymeleaf & Bootstrap</h4>
                        <p className="text-gray-400 text-sm">Dynamic UI development</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-green-400 font-semibold mb-2">Generative AI</h4>
                        <p className="text-gray-400 text-sm">AI integration & automation</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-yellow-400 font-semibold mb-2">RPA Technologies</h4>
                        <p className="text-gray-400 text-sm">Business workflow automation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
