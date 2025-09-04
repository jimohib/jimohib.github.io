import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

const MinimalistAwards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const awards: Award[] = [
    {
      title: "HRI Conference Grant Award",
      issuer: "Association of Computing Machinery (ACM) Special Interest Group on Artificial Intelligence (SIGAI)",
      year: "2025",
      description: "Competitive grant award to attend and present research work at the Human Robot Interaction conference in Melbourne, Australia, 2025."
    },
    {
      title: "Masters Degree Scholarship",
      issuer: "Mastercard Foundation Scholarship",
      year: "2023",
      description: "Awarded the Mastercard Foundation master degree scholarship. A highly competitive and prestigious scholarship for academically talented students from economically disadvantaged backgrounds."
    },
    {
      title: "Recognition Best School Representative",
      issuer: "International Mathematics Olympiad (IMO)",
      year: "2015",
      description: "Recognized by my school for exemplary performance in the competition."
    }
  ];

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

  return (
    <motion.section 
      ref={sectionRef}
      id="awards" 
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto"></div>
        </motion.div>

        {/* Awards List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 sm:mb-0">
                  {award.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
              <p className="text-[rgb(10,93,128)] font-medium text-sm mb-2">
                {award.issuer}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MinimalistAwards;