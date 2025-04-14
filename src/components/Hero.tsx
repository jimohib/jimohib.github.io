
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

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] relative text-center px-6">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-[20rem] font-bold tracking-tighter">GitHub</div>
      </div>
      
      <Avatar className="w-32 h-32 border-4 border-github-accent mb-8 animate-fade-in">
        <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Profile Picture" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-github-accent to-github-secondary">
          Developer & Academic
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-github-muted max-w-2xl mb-10 animate-fade-in animate-delay-100">
        Bridging the worlds of software development and academic research through innovative solutions
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
        <Button 
          onClick={scrollToProjects}
          className="bg-github-accent hover:bg-github-accent/90 text-github-dark font-medium"
          size="lg"
        >
          View My Projects
        </Button>
        <Button 
          variant="outline" 
          className="border-github-border hover:bg-github-border/10"
          size="lg"
        >
          Download CV
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 animate-bounce rounded-full"
        onClick={scrollToProjects}
      >
        <ChevronDown className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Hero;
