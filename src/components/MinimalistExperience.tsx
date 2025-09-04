import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MinimalistExperience: React.FC = () => {
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

  const education = [
    {
      title: "MSc. in Engineering Artificial Intelligence",
      company: "Carnegie Mellon University",
      period: "2023 - 2025"
    },
    {
      title: "BEng. in Computer Engineering",
      company: "Federal University of Technology Minna",
      period: "2015 - 2021"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="experience" 
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Background</h2>
            <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          </div>

          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Research and Work</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  I currently work as a Research Associate in the AI Robotics Lab at Carnegie Mellon's 
                  College of Engineering in the Africa campus, where my research focuses on developing 
                  culturally sensitive and socially aware robots for African cultural interactions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My industry experience includes roles as a Software Engineer Intern at Optimus Bank 
                  and as an IT Engineer Intern at Protogy Global Services Limited, where I 
                  specialized in software development, systems integration, and technical support.
                </p>
              </div>
              
              <div className="text-center pt-6">
                <Button
                  variant="outline"
                  className="border-[rgb(10,93,128)] text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)] hover:text-white"
                  onClick={() => window.open('/Ibrahim_Jimoh_CV.pdf', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Complete Experience in CV
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[rgb(10,93,128)] pl-6 pb-">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{edu.title}</h4>
                      <span className="text-sm text-gray-500 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-[rgb(10,93,128)] font-medium mb-2">{edu.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MinimalistExperience;