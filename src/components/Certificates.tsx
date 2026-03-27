import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Shield, Code, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Academy Graduate",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: <Cloud className="text-orange-400" size={24} />,
      gradient: "from-orange-400 to-yellow-500",
      category: "Cloud Computing",
      link: "/assets/certificates/AWS Academy Graduate- Cloud Foundations_Aditya Mulay.pdf"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: <Cloud className="text-orange-400" size={24} />,
      gradient: "from-orange-400 to-red-500",
      category: "Cloud Computing",
      link: "/assets/certificates/AWS Cloud Technical Essentials - AWS.pdf"
    },
    {
      title: "Google Cloud Security",
      issuer: "Google Cloud",
      date: "2024",
      icon: <Shield className="text-blue-400" size={24} />,
      gradient: "from-blue-400 to-cyan-500",
      category: "Cloud Security",
      link: "/assets/certificates/Google - Security Principles in Cloud Computing.pdf"
    },
    {
      title: "Google Cloud Apigee API Security",
      issuer: "Google Cloud",
      date: "2024",
      icon: <Shield className="text-green-400" size={24} />,
      gradient: "from-green-400 to-blue-500",
      category: "API Security",
      link: "/assets/certificates/Google Cloud Apigee API Security.pdf"
    },
    {
      title: "IBM Linux and Shell Scripting",
      issuer: "IBM",
      date: "2024",
      icon: <Code className="text-green-400" size={24} />,
      gradient: "from-green-400 to-emerald-500",
      category: "Development",
      link: "/assets/certificates/IBM - Linux commands and Shell Scripting.pdf"
    },
    {
      title: "IBM Network and Storage",
      issuer: "IBM",
      date: "2024",
      icon: <Code className="text-blue-400" size={24} />,
      gradient: "from-blue-400 to-purple-500",
      category: "Infrastructure",
      link: "/assets/certificates/IBM - Introduction to Network and Storage.pdf"
    },
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco - Credly",
      date: "2024",
      icon: <Shield className="text-blue-400" size={24} />,
      gradient: "from-blue-400 to-cyan-500",
      category: "Networking",
      link: "https://www.credly.com/badges/766d0a94-83b5-4821-8865-f6dc0fcf058d/linked_in_profile",
      isExternal: true
    },
    {
      title: "Certified AI Developer",
      issuer: "Pushkal Shukla",
      date: "2024",
      icon: <Award className="text-purple-400" size={24} />,
      gradient: "from-purple-400 to-pink-500",
      category: "Artificial Intelligence",
      link: "/assets/certificates/Pushkal Shukla -AI developer certificate.pdf"
    },
    {
      title: "Python Programming",
      issuer: "IIT Bombay",
      date: "2024",
      icon: <Code className="text-yellow-400" size={24} />,
      gradient: "from-yellow-400 to-orange-500",
      category: "Programming",
      link: "/assets/certificates/Python - Certificate IIT Bombay.pdf"
    },
    {
      title: "Meta Database Management",
      issuer: "Meta",
      date: "2024",
      icon: <Code className="text-blue-400" size={24} />,
      gradient: "from-blue-400 to-indigo-500",
      category: "Database",
      link: "/assets/certificates/Meta- Database Structures and Management with MYSQL.pdf"
    },
    {
      title: "Accenture Go for Gold",
      issuer: "Accenture",
      date: "2024",
      icon: <Award className="text-green-400" size={24} />,
      gradient: "from-green-400 to-blue-500",
      category: "Professional",
      link: "/assets/certificates/Accenture- Go for Gold-iAspire Certificate .pdf"
    },
    {
      title: "Critical Thinking & Problem Solving",
      issuer: "LinkedIn Learning",
      date: "2024",
      icon: <Award className="text-indigo-400" size={24} />,
      gradient: "from-indigo-400 to-purple-500",
      category: "Soft Skills",
      link: "/assets/certificates/LinkedIn Learning- CertificateOfCompletion_Critical Thinking and Problem Solving.pdf"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="glass glass-hover neon-glow rounded-2xl overflow-hidden h-full group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow relative`}>
                    <div className="absolute inset-2 bg-black/40 rounded-xl flex items-center justify-center">
                      <div className="text-white drop-shadow-lg">
                        {React.cloneElement(cert.icon, { className: 'text-white', size: 24 })}
                      </div>
                    </div>
                  </div>
                  
                  <Badge className="glass border-cyan-400/30 text-cyan-300 mb-3">
                    {cert.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors duration-300 text-sm relative z-10 cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    {cert.isExternal ? 'View Badge' : 'View Certificate'}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Certificates;