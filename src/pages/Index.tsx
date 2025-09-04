// src/pages/Index.tsx
import React from 'react';
import SEO from '@/components/SEO';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import MinimalistNavbar from '@/components/MinimalistNavbar';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedHero1 from '@/components/AnimatedHero1';
import AnimatedHero2 from '@/components/AnimatedHero2';
import MinimalistHero from '@/components/MinimalistHero';
import About from '@/components/About';
import EnhancedAbout from '@/components/EnhancedAbout';
import MinimalistAbout from '@/components/MinimalistAbout';
import MinimalistExperience from '@/components/MinimalistExperience';
import EnhancedProjects from '@/components/EnhancedProjects';
import MinimalistProjects from '@/components/MinimalistProjects';
import Publications from '@/components/Publications';
import EnhancedPublications from '@/components/EnhancedPublications';
import MinimalistPublications from '@/components/MinimalistPublications';
import EnhancedSkills from '@/components/EnhancedSkills';
import Awards from '@/components/Awards';
import EnhancedAwards from '@/components/EnhancedAwards';
import MinimalistAwards from '@/components/MinimalistAwards';
import Blog from '@/components/Blog';
import MinimalistBlog from '@/components/MinimalistBlog';
import Contact from '@/components/Contact';
import EnhancedContact from '@/components/EnhancedContact';
import MinimalistContact from '@/components/MinimalistContact';
import Footer from '@/components/Footer';
import EnhancedFooter from '@/components/EnhancedFooter';
import MinimalistFooter from '@/components/MinimalistFooter';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO 
        title="Ibrahim Jimoh - AI & Robotics"
        description="AI Engineering graduate from Carnegie Mellon University and Research Associate specializing in Human-Robot Interaction, Machine Learning, and Culturally Sensitive Robotics. Explore my research and projects."
        keywords="Ibrahim Jimoh, AI Engineer, Robotics, Carnegie Mellon University, Machine Learning, Human-Robot Interaction, Deep Learning, Computer Vision, Research"
        url="https://jimohib.github.io"
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Use enhanced navbar */}
        {/* <EnhancedNavbar /> */}
        <MinimalistNavbar />
        
        <main>
          {/* <AnimatedHero /> */}
          <MinimalistHero />

          {/* <EnhancedAbout /> */}
          <MinimalistAbout />

          <MinimalistExperience />

          {/* <EnhancedProjects /> */}
          <MinimalistProjects />

          {/* <EnhancedPublications /> */}
          <MinimalistPublications />

          {/* <EnhancedAwards /> */}
          <MinimalistAwards />

          {/* <Blog /> */}
          <MinimalistBlog />

          {/* <EnhancedContact /> */}
          {/* <MinimalistContact /> */}
        </main>
        
        {/* <EnhancedFooter /> */}
        <MinimalistFooter />
      </div>
    </>
  );
};

export default Index;