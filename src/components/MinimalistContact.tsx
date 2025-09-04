import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const MinimalistContact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ibjhmoh[at]gmail[dot]com",
      href: "#",
      description: "Best way to reach me"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/ibrahim-jimoh",
      description: "Professional networking"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/jimohib",
      description: "Projects and repositories"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Website",
      value: "Portfolio",
      href: "https://jimohib.github.io",
      description: "This website"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaborating or discussing AI research? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={itemVariants}>
                {method.href === "#" ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(10,93,128)]/10 rounded-full mb-4">
                      <div className="text-[rgb(10,93,128)]">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{method.label}</h3>
                    <p className="text-[rgb(10,93,128)] font-medium mb-2">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                ) : (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md hover:border-[rgb(10,93,128)]/20 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(10,93,128)]/10 rounded-full mb-4">
                      <div className="text-[rgb(10,93,128)]">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{method.label}</h3>
                    <p className="text-[rgb(10,93,128)] font-medium mb-2">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Simple CTA */}
          <motion.div className="text-center mt-8" variants={itemVariants}>
            <p className="text-gray-600">
              Currently based in Pittsburgh, PA, with a focus on culturally sensitive AI research.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MinimalistContact;