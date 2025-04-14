
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black/30 border-t border-github-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Github className="w-5 h-5 text-github-accent" />
              <span className="font-bold">Dev Portfolio</span>
            </div>
            <p className="text-sm text-github-muted">
              Showcasing code and creativity
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-github-accent">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-github-accent">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-github-accent">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-github-accent">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-github-border/50 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-github-muted">
          <div>© {currentYear} Developer Portfolio. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-github-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-github-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
