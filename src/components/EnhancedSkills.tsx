import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain,
  Code,
  Database,
  Cloud,
  Cpu,
  Bot,
  Eye,
  Zap,
  Layers,
  GitBranch,
  Settings,
  Monitor
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EnhancedSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    ai: {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'blue',
      description: 'Advanced AI techniques and machine learning algorithms',
      skills: [
        { name: 'Deep Learning', level: 95, icon: Layers, description: 'Neural networks, CNNs, RNNs, Transformers' },
        { name: 'Computer Vision', level: 90, icon: Eye, description: 'Image processing, object detection, visual perception' },
        { name: 'Reinforcement Learning', level: 85, icon: Zap, description: 'Q-learning, policy gradients, multi-agent systems' },
        { name: 'Natural Language Processing', level: 88, icon: Bot, description: 'Text analysis, language models, conversational AI' },
        { name: 'Human-Robot Interaction', level: 92, icon: Bot, description: 'Social robotics, cultural adaptation, interaction design' }
      ]
    },
    programming: {
      title: 'Programming & Development',
      icon: Code,
      color: 'green',
      description: 'Modern programming languages and development practices',
      skills: [
        { name: 'Python', level: 95, icon: Code, description: 'Data science, AI/ML, web development' },
        { name: 'C++', level: 85, icon: Code, description: 'Systems programming, robotics, performance optimization' },
        { name: 'JavaScript/TypeScript', level: 80, icon: Code, description: 'Full-stack web development, React, Node.js' },
        { name: 'Java', level: 78, icon: Code, description: 'Enterprise applications, Android development' },
        { name: 'MATLAB', level: 82, icon: Code, description: 'Scientific computing, simulation, data analysis' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'purple',
      description: 'Cutting-edge frameworks for AI and software development',
      skills: [
        { name: 'PyTorch', level: 92, icon: Brain, description: 'Deep learning research and development' },
        { name: 'TensorFlow', level: 88, icon: Brain, description: 'Machine learning model deployment' },
        { name: 'ROS (Robot Operating System)', level: 90, icon: Bot, description: 'Robotics development and integration' },
        { name: 'OpenCV', level: 85, icon: Eye, description: 'Computer vision applications' },
        { name: 'React', level: 80, icon: Monitor, description: 'Modern web application development' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'orange',
      description: 'Development tools and cloud technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: GitBranch, description: 'Version control and collaboration' },
        { name: 'Docker', level: 82, icon: Layers, description: 'Containerization and deployment' },
        { name: 'AWS', level: 78, icon: Cloud, description: 'Cloud computing and ML services' },
        { name: 'Linux/Unix', level: 88, icon: Monitor, description: 'System administration and development' },
        { name: 'CUDA', level: 80, icon: Cpu, description: 'GPU programming for AI acceleration' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        light: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-cyan-500'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        light: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200',
        gradient: 'from-green-500 to-emerald-500'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        light: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-pink-500'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        light: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200',
        gradient: 'from-orange-500 to-red-500'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning AI, robotics, and software development, 
              built through years of hands-on experience and continuous learning.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const colors = getColorClasses(category.color);
              const isActive = activeCategory === key;

              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg` 
                      : `${colors.light} ${colors.text} hover:${colors.bg} hover:text-white`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={18} />
                  <span>{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Description */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className={`bg-gradient-to-r ${getColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color).gradient} p-4 rounded-full`}>
                  {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
                    size: 32,
                    className: 'text-white'
                  })}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {skillCategories[activeCategory as keyof typeof skillCategories].description}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
                const colors = getColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color);

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`${colors.bg} p-3 rounded-lg shrink-0`}>
                            <skill.icon size={20} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Proficiency
                            </span>
                            <span className={`text-sm font-bold ${colors.text}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`bg-gradient-to-r ${colors.gradient} h-full rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: index * 0.1,
                                ease: "easeOut" 
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-0.5 rounded-2xl inline-block">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Continuous Learning & Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  methodologies, and research areas to stay at the forefront of AI and robotics innovation.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Technologies Mastered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">∞</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Learning Mindset</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSkills;