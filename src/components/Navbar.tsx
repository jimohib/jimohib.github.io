import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, User, Mail, FileText, Trophy, BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking an item
    }
  };

  // Function to scroll to the very top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMobileMenuOpen(false); // Close mobile menu if it's open
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Clickable title returns to top */}
          <button
            onClick={scrollToTop}
            className="font-bold text-lg text-theme-primary focus:outline-none"
          >
            Ibrahim Jimoh
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Button onClick={() => scrollToSection('about')} variant="ghost" className="text-sm">
            <User className="mr-2 h-4 w-4" />
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
          <Button onClick={() => scrollToSection('publications')} variant="ghost" className="text-sm">
            <BookOpen className="mr-2 h-4 w-4" />
            Publications
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="ghost" className="text-sm">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button variant="outline" className="text-sm bg-theme-primary/10 text-theme-primary border-theme-primary/30 hover:bg-theme-primary/20">
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          <Button onClick={() => scrollToSection('about')} variant="ghost" className="text-sm w-full text-left">
            <User className="mr-2 h-4 w-4" />
            About
          </Button>
          <Button onClick={() => scrollToSection('projects')} variant="ghost" className="text-sm w-full text-left">
            <LinkIcon className="mr-2 h-4 w-4" />
            Projects
          </Button>
          <Button onClick={() => scrollToSection('awards')} variant="ghost" className="text-sm w-full text-left">
            <Trophy className="mr-2 h-4 w-4" />
            Awards
          </Button>
          <Button onClick={() => scrollToSection('publications')} variant="ghost" className="text-sm w-full text-left">
            <BookOpen className="mr-2 h-4 w-4" />
            Publications
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="ghost" className="text-sm w-full text-left">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button variant="outline" className="text-sm w-full text-left bg-theme-primary/10 text-theme-primary border-theme-primary/30 hover:bg-theme-primary/20">
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
