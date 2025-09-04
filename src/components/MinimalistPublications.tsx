import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MinimalistPublications: React.FC = () => {
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

  const publications = [
    {
      title: "Poster: Culturally Sensitive Social Robotics for Africa",
      venue: "IEEE/ACM Human Robot Interaction Conference - Cultural Robotics Workshop",
      year: "2025",
      authors: "A. Akinade, D. Barros, M. Danso, Y. Haile, E. Birhan, B. Shimelis Girma, C. Osano, P. Ranchod, M. Richard, B. Rosman, I. Jimoh, T. Taye Tefferi, D. Vernon",
      url: "https://cssr4africa.github.io/posters/2025_Cultural_Robotics_Workshop_Akinade_et_al_poster.pdf"
    },
    {
      title: "Abstract: Behavior Trees for Culturally Sensitive Social Robots: African Culture Case Study",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
      year: "2024",
      authors: "I. Jimoh, H. Equbay, C. Osano, T. Tefferi, D. Vernon",
      url: "https://cssr4africa.github.io/abstracts/2024_Robotics_in_Africa_Forum_IROS_Jimoh_et_al_abstract.pdf"
    },
    {
      title: "Breaking Mental Health Silence: Men from Different Cultures and Generations",
      venue: "Case Studies in International Education, Vol. 5 No. 2",
      year: "2024",
      authors: "Y. Underdue Murph, A. Avoka, I. Jimoh, F. Rurangwa",
      url: "https://www.csiepub.org/index.php/csie/article/view/165"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="publications" 
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
            <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Research contributions.
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-6 mb-12">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {pub.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                        {pub.year}
                      </span>
                      <a 
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgb(10,93,128)] hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-[rgb(10,93,128)] font-medium text-sm">
                    {pub.venue}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pub.authors}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Collaboration CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <Button 
              variant="outline" 
              className="border-[rgb(10,93,128)] text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)] hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Discuss Research Collaboration
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MinimalistPublications;