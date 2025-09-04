import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import OptimizedImage from './OptimizedImage';
import { skillsData, profileData } from '@/data/portfolio';

const EnhancedAbout: React.FC = () => {
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

  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <OptimizedImage
                src="/profile_pic.jpg"
                alt="Ibrahim Jimoh"
                className="w-32 h-32 rounded-full border-4 border-[rgb(10,93,128)] shadow-lg"
                priority
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-2">{profileData.name}</h3>
                <p className="text-[rgb(10,93,128)] font-medium mb-1">{profileData.title}</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Pittsburgh, PA</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Hi there! Welcome to my website! I am a Masters student in Artificial Intelligence 
                at Carnegie Mellon University. I am a Robotics enthusiast researcher passionate about 
                creating intelligent systems that can think, move, and interact like humans.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Currently, I am focused on Human-Robot Interaction (HRI), exploring how robots can 
                understand, collaborate with, and support people in meaningful and culturally aware ways. 
                I've had the opportunity to present my research at international conferences and work 
                with cutting-edge platforms like ROS and the Pepper robot.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                When I'm not knee-deep in code or research, you'll find me enjoying great conversation, 
                learning something new, or exploring new corners of the world. I am a ping-pong lover, 
                fascinated by the hand-eye coordination and reflex involved in playing it.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[rgb(10,93,128)]">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[rgb(10,93,128)]">3</div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[rgb(10,93,128)]">2</div>
                <div className="text-sm text-gray-600">Years Research</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[rgb(10,93,128)]">3</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
            </div>
          </motion.div>
          
          {/* Skills and Experience Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 w-full">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              
              <TabsContent value="skills" className="space-y-6">
                {skillsData.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-50 border-gray-200">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="text-[rgb(10,93,128)]">•</span>
                          {skillCategory.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillCategory.skills.map(skill => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className="bg-white text-gray-700 hover:bg-[rgb(10,93,128)] hover:text-white transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
              
              <TabsContent value="experience" className="space-y-4">
                <ExperienceItem
                  icon={<Briefcase className="h-5 w-5 text-[rgb(10,93,128)]" />}
                  title="Data Scientist"
                  company="Freelance"
                  period="2024 - Present"
                  description="Conducting analysis, designing and implementing predictive models and machine learning algorithms with companies data to generate actionable insights."
                  type="work"
                />
                <ExperienceItem
                  icon={<Briefcase className="h-5 w-5 text-[rgb(10,93,128)]" />}
                  title="Data Analyst" 
                  company="Malhub Technologies"
                  period="Jun 2023 - Dec 2023"
                  description="Performed statistical analysis using machine learning methods, developed data-driven report and visualizations, and streamlined reporting processes."
                  type="work"
                />
                <ExperienceItem
                  icon={<Briefcase className="h-5 w-5 text-[rgb(10,93,128)]" />}
                  title="Software Engineer (Contract)"
                  company="Optimus Bank"
                  period="Jan 2023 - Jun 2023" 
                  description="Project lead, designed and developed API for a customer support bot"
                  type="work"
                />
              </TabsContent>
              
              <TabsContent value="education" className="space-y-4">
                <ExperienceItem
                  icon={<GraduationCap className="h-5 w-5 text-[rgb(10,93,128)]" />}
                  title="M.S. in Artificial Intelligence"
                  company="Carnegie Mellon University"
                  period="2023 - 2025"
                  description="Specialization in Artificial Intelligence and Robotics. Focus on Human-Robot Interaction and culturally sensitive robotics systems."
                  type="education"
                />
                <ExperienceItem
                  icon={<GraduationCap className="h-5 w-5 text-[rgb(10,93,128)]" />}
                  title="B.Eng. in Computer Engineering"
                  company="Federal University of Technology Minna"
                  period="2015 - 2021"
                  description="Specialization in Software and Hardware Engineering. Graduated with honors."
                  type="education"
                />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const ExperienceItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'research';
}> = ({ icon, title, company, period, description, type }) => {
  const bgColor = {
    work: 'bg-blue-50 border-blue-200',
    education: 'bg-green-50 border-green-200',
    research: 'bg-purple-50 border-purple-200'
  }[type];

  return (
    <div className={`p-4 border rounded-lg ${bgColor} hover:shadow-md transition-shadow`}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h4 className="font-medium text-gray-900">{title}</h4>
            <Badge variant="outline" className="text-xs bg-white/50 w-fit">
              <Calendar className="mr-1 h-3 w-3" />
              {period}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mb-2 font-medium">{company}</p>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAbout;