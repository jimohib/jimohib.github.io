import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const MinimalistFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jimohibrahim24",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/jimohib",
      label: "GitHub"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/jhmohib", 
      label: "Twitter",
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="p-2 text-gray-600 hover:text-[rgb(10,93,128)] transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>© {currentYear} Ibrahim Jimoh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalistFooter;