import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail, Github, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jimohibrahim24",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/jhmohib", 
      label: "Twitter",
      color: "hover:text-sky-500"
    },
    {
      icon: Github,
      href: "https://github.com/jimohib",
      label: "GitHub", 
      color: "hover:text-gray-800"
    },
    {
      icon: Mail,
      href: "mailto:ibjhmoh@gmail.com",
      label: "Email",
      color: "hover:text-green-600"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-theme-primary">Ibrahim Jimoh</h3>
            {/* <p className="text-gray-300 mb-4">
              AI Engineer and Roboticist passionate about creating intelligent systems 
              that can think, move, and interact like humans.
            </p> */}
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : "_blank"}
                  rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className={`p-2 bg-gray-800 rounded-lg ${color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Publications', id: 'publications' },
                { name: 'Awards', id: 'awards' },
                { name: 'Contact', id: 'contact' }
              ].map(({ name, id }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(id);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-theme-primary transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-theme-primary" />
                <a href="mailto:ibjhmoh@gmail.com" className="text-gray-300 hover:text-white">
                  ibjhmoh@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-theme-primary" />
                <span className="text-gray-300">jimohib.github.io</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-1 mb-4 md:mb-0">
              <span>© {currentYear} Ibrahim Jimoh. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span>Last Updated: July 2025</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;