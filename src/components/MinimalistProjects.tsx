import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MinimalistProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const featuredProjects = [
    {
      title: "Culturally Sensitive Social Robotics for Africa (CSSRA)",
      description: "A project I am involved in focused on developing socially aware robotic systems for African contexts. It aims to equip robots with the ability to interact sensitively and appropriately with people from diverse cultural backgrounds.",
      tech: ["C++", "ROS", "Behavior Trees", "Robot Localization"],
      link: "https://github.com/cssr4africa/cssr4africa"
    },
    {
      title: "Deepfake Voice Detection with Deep Learning for Fraud Prevention",
      description: "Developed a deep learning convolutional neural network model to identify and classify synthetic or manipulated voices in audio streams, aimed at preventing fraud and enhancing security in voice-based authentication systems.",
      tech: ["Python", "Pytorch", "CNN", "Deep Learning"],
      link: "https://github.com/jimohib/deepfake_voice_detection"
    },
    {
      title: "Deep Reinforcement Learning-Based Mobile Robot Navigation in Social Spaces",
      description: "A deep reinforcement learning framework for mobile robot navigation in dynamic social environments, focusing on safe and efficient path planning.",
      tech: ["Python", "Pytorch", "Reinforcement Learning", "Robotics"],
      link: "https://github.com/jimohib/idl24_project"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects focusing on AI, robotics, and cross-cultural technology.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(10,93,128)] hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <motion.div className="text-center" variants={itemVariants}>
            <Button 
              variant="outline" 
              className="border-[rgb(10,93,128)] text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)] hover:text-white"
              onClick={() => window.open('https://github.com/jimohib', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View more Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MinimalistProjects;