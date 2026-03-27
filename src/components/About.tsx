import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass glass-hover neon-glow rounded-2xl h-full group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">Personal Bio</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Final-year Computer Science student at MIT ADT, Pune, specializing in Cloud Computing and AI. 
                  Award-winning project developer with professional experience in Gen AI and cloud-based applications. 
                  Passionate about building intelligent, scalable systems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass glass-hover neon-glow rounded-2xl h-full group">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">B.Tech, Computer Science & Engineering</h4>
                    <p className="text-cyan-300">MIT ADT, Pune (Graduating 2026)</p>
                    <p className="text-gray-400">Specialization: AWS-Powered Cloud Computing</p>
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-gray-300">Key Courses:</h4>
                    <p className="text-gray-400 text-sm">Cloud Security, Distributed Systems, AI & ML, DevOps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass glass-hover neon-glow rounded-2xl group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">Internship</h3>
              </div>
              <div className="glass rounded-xl p-6 border border-cyan-400/20">
                <h4 className="text-xl font-semibold text-white mb-2">Packaged Application Development - ASE Track</h4>
                <p className="text-cyan-300 mb-2">Accenture</p>
                <p className="text-purple-300 text-sm mb-3">May 2025 - July 2025</p>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>• Engineered full-stack enterprise applications using Java, Maven, Thymeleaf, and Bootstrap CSS</p>
                  <p>• Integrated Generative AI and RPA technologies to automate business workflows</p>
                  <p>• Collaborated in agile teams focusing on scalable backend systems and dynamic UIs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
