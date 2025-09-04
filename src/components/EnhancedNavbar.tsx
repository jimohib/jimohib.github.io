// src/components/EnhancedNavbar.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User, Mail, FileText, Trophy, BookOpen, Menu, X, Code } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const EnhancedNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollToSection, scrollToTop } = useSmoothScroll();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'projects', 'awards', 'publications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: User, label: 'About', id: 'about' },
    { icon: Code, label: 'Projects', id: 'projects' },
    { icon: Trophy, label: 'Awards', id: 'awards' },
    { icon: BookOpen, label: 'Publications', id: 'publications' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={scrollToTop}
            className={`font-bold text-lg transition-all ${
              isScrolled ? 'text-[rgb(10,93,128)]' : 'text-[rgb(10,93,128)]'
            } hover:text-blue-700`}
          >
            Ibrahim Jimoh
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ icon: Icon, label, id }) => (
              <Button
                key={id}
                onClick={() => handleNavClick(id)}
                variant={activeSection === id ? "default" : "ghost"}
                className={`text-sm transition-all ${
                  activeSection === id 
                    ? 'bg-[rgb(10,93,128)] text-white hover:bg-blue-700' 
                    : 'hover:text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)]/10'
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              className="text-sm bg-[rgb(10,93,128)]/10 text-[rgb(10,93,128)] border-[rgb(10,93,128)]/30 hover:bg-[rgb(10,93,128)]/20 ml-2"
              asChild
            >
              <a href="/Ibrahim_Jimoh_CV.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[rgb(10,93,128)]"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/30 pt-4 bg-white/95 rounded-lg backdrop-blur-md">
            <div className="space-y-2">
              {navItems.map(({ icon: Icon, label, id }) => (
                <Button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  variant={activeSection === id ? "default" : "ghost"}
                  className={`w-full justify-start text-sm ${
                    activeSection === id 
                      ? 'bg-[rgb(10,93,128)] text-white hover:bg-blue-700' 
                      : 'hover:text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)]/10'
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {label}
                </Button>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full justify-start text-sm bg-[rgb(10,93,128)]/10 text-[rgb(10,93,128)] border-[rgb(10,93,128)]/30 mt-4"
                asChild
              >
                <a href="/Ibrahim_Jimoh_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavbar;