
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] relative text-center px-6 bg-white">      
      <Avatar className="w-32 h-32 border-4 border-theme-accent mb-8 shadow-lg animate-fade-in">
        <AvatarImage src="/profile_pic.jpg" alt="Profile Picture" />
        <AvatarFallback>IJ</AvatarFallback>
      </Avatar>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-primary to-theme-accent">
          Ibrahim Jimoh
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-theme-muted max-w-2xl mb-10 animate-fade-in animate-delay-100">
        Artificial Intelligence and Robotics
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
        {/* <Button 
          onClick={scrollToProjects}
          className="bg-theme-primary hover:bg-theme-primary/90 text-white font-medium"
          size="lg"
        >
          View My Projects
        </Button> */}
        <a href="/Ibrahim_Jimoh_CV.pdf" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            className="border-theme-border hover:bg-theme-border/10"
            size="lg"
          >
            Academic CV
          </Button>
        </a>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 animate-bounce rounded-full"
        onClick={scrollToAbout}
      >
        <ChevronDown className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Hero;
