import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

const MinimalistAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const skills = [
    "Machine Learning", "Deep Learning", "Computer Vision", 
    "C++", "C#", "Python", "JavaScript", "ROS", "Gazebo", "PyTorch", "TensorFlow", "Docker", 
    "Kubernetes", "AWS", "GCP", "RAG", "MySQL", "Git", "GitHub", "Linux", "Human-Robot Interaction",
    "Cultural AI", "Social Robotics", "Research", "Data Analysis", "Reinforcement Learning", "Leadership"
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Bio */}
            <motion.div className="prose prose-lg max-w-none" variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed">
                Hi there! I am a Robotics and AI enthusiast and researcher passionate about creating intelligent systems that can think, move, and interact like humans. 
                My journey into robotics began with a fascination for the science Marvel fiction (yes, Iron Man played a role) but it quickly
                evolved into a deeper curiosity about how machines can learn, adapt, and solve real-world problems.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Currently, my focus lies at the intersection of Artificial Intelligence and Human-Robot Interaction (HRI), exploring how robots and AI systems can understand, collaborate with, and
                support people in meaningful and culturally aware ways. I've had the opportunity to present my research at international
                conferences like IROS and HRI, and to work with cutting edge platforms like Robot Operating System (ROS), vision models, and the Pepper semi-humanoid robot. 
                I am also engaged in AI safety and alignment, understanding how we can design and deploy intelligent systems responsibly while avoiding the risks therein. I am driven by a belief that AI and robotics
                can be a force for good especially when designed inclusively, responsibly, and thoughtfully.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                When I'm not knee-deep in code or research, you'll find me involved in community services, learning something new, 
          or playing ping pong. I am an avid ping pong player, fascinated by the hand-eye coordination and reflex involved in playing it.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 border border-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[rgb(10,93,128)]">10+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(10,93,128)]">2</div>
                  <div className="text-sm text-gray-600">Publications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(10,93,128)]">1+</div>
                  <div className="text-sm text-gray-600">Years Research</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(10,93,128)]">3</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MinimalistAbout;