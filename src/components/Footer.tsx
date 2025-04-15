
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-theme-primary">Last Updated</span>
            </div>
            <p className="text-sm text-theme-muted">
              April, 2025.
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-theme-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-theme-primary">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-theme-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-theme-muted">
          <div>© {currentYear} Ibrahim Jimoh. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-theme-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-theme-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
