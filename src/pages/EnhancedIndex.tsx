// src/pages/EnhancedIndex.tsx
import React from 'react';
import SEO from '@/components/SEO';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import AnimatedHero from '@/components/AnimatedHero';
import EnhancedAbout from '@/components/EnhancedAbout';
import EnhancedProjects from '@/components/EnhancedProjects';
import Publications from '@/components/Publications';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import EnhancedFooter from '@/components/EnhancedFooter';

const EnhancedIndex: React.FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO 
        title="Ibrahim Jimoh - AI Engineer & Robotics Researcher | Carnegie Mellon University"
        description="Graduate of Carnegie Mellon University and Research Associate specializing in Human-Robot Interaction, Machine Learning, and Social Robotics. Explore my research and projects."
        keywords="Ibrahim Jimoh, AI Engineer, Robotics, Carnegie Mellon University, Machine Learning, Reinforcement Learning, Human-Robot Interaction, Deep Learning, Computer Vision, Research"
        url="https://jimohib.github.io"
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <EnhancedNavbar />
        
        {/* Main Content */}
        <main>
          <AnimatedHero />
          <EnhancedAbout />
          <EnhancedProjects />
          <Publications />
          <Awards />
          <Contact />
        </main>
        
        {/* Footer */}
        <EnhancedFooter />
      </div>
    </>
  );
};

export default EnhancedIndex;