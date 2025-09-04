import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from './OptimizedImage';

const AnimatedHero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block hidden sm:block"
                >
                  <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                    Welcome
                  </span>
                </motion.div>

                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-900 to-slate-700 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                    Ibrahim
                  </span>
                </motion.h1>

                <motion.div
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    Research Associate & AI Engineer
                  </p>
                  <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                    Carnegie Mellon Grad
                  </p>
                </motion.div>

                <motion.p
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Passionate about advancing Human-Robot Interaction, developing culturally sensitive 
                  social robotics, and creating AI systems that bridge the gap between technology and humanity.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-row gap-3 items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-400 hover:to-blue-400 text-white px-4 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-none sm:min-w-[160px] h-11 sm:h-12"
                  onClick={() => window.open('/Ibrahim_Jimoh_CV.pdf', '_blank')}
                >
                  <Download size={14} className="sm:hidden" />
                  <Download size={18} className="hidden sm:block" />
                  <span className="text-white font-medium text-sm sm:text-base">Peek my CV</span>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 flex-1 sm:flex-none sm:min-w-[160px] h-11 sm:h-12"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="font-medium text-sm sm:text-base">Let's Connect</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center order-1 lg:order-2 lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated background circle */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-slate-500 opacity-22"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                />
                
                {/* Profile image container */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl mx-auto">
                  <OptimizedImage
                    src="/photo1.jpg"
                    alt="Ibrahim Jimoh - AI Engineering Student"
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;