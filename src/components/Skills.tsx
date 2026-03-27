
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C/C++"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "GCP", "Azure"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Tools & IDEs",
      skills: ["VS Code", "Figma", "Git"],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "from-cyan-400 to-purple-500"
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "OpenAI API"],
      color: "from-pink-400 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">{category.title[0]}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
