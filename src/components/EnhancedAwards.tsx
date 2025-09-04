import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Medal, Star, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface AwardProps {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const AwardItem = ({ icon, title, issuer, date, description }: AwardProps) => {
  return (
    <Card className="border border-gray-200 bg-white hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-[rgb(10,93,128)]/10 p-3 rounded-full text-[rgb(10,93,128)] shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-4">
                {date}
              </span>
            </div>
            <p className="text-sm text-[rgb(10,93,128)] font-medium mb-2">{issuer}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EnhancedAwards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const awards = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "HRI Conference Grant Award",
      issuer: "Association of Computing Machinery (ACM) SIGAI",
      date: "2025",
      description: "Grant award to attend and present research work at the Human Robot Interaction conference in Melbourne, Australia, 2025."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Masters Degree Scholarship",
      issuer: "Mastercard Foundation Scholarship",
      date: "2023",
      description: "Awarded the Mastercard Foundation master degree scholarship. A highly competitive and prestigious scholarship for academically talented students from economically disadvantaged backgrounds."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition Best School Representative",
      issuer: "International Mathematics Olympiad (IMO)",
      date: "2015",
      description: "Recognized by my school for exemplary performance in the competition."
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="awards" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for academic excellence, research contributions, and leadership in AI and robotics.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <AwardItem
                  icon={award.icon}
                  title={award.title}
                  issuer={award.issuer}
                  date={award.date}
                  description={award.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EnhancedAwards;