
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, Github, Mail, UserCircle, BookOpen, Trophy } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-github-dark/80 backdrop-blur-lg border-b border-github-border py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="w-6 h-6 text-github-accent" />
          <span className="font-bold text-lg">Dev & Academic Portfolio</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Button onClick={() => scrollToSection('about')} variant="ghost" className="text-sm">
            <UserCircle className="mr-2 h-4 w-4" />
            About
          </Button>
          <Button onClick={() => scrollToSection('projects')} variant="ghost" className="text-sm">
            <LinkIcon className="mr-2 h-4 w-4" />
            Projects
          </Button>
          <Button onClick={() => scrollToSection('awards')} variant="ghost" className="text-sm">
            <Trophy className="mr-2 h-4 w-4" />
            Awards
          </Button>
          <Button variant="ghost" className="text-sm">
            <BookOpen className="mr-2 h-4 w-4" />
            Publications
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="ghost" className="text-sm">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button variant="outline" className="text-sm border-github-accent text-github-accent hover:bg-github-accent/10">
            <Github className="mr-2 h-4 w-4" />
            GitHub Profile
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
