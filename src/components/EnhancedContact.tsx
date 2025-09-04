import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, Globe, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

const EnhancedContact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      contact: "ibjhmoh@gmail.com",
      href: "mailto:ibjhmoh@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      contact: "jimohibrahim24",
      href: "https://linkedin.com/in/jimohibrahim24"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      title: "Twitter",
      contact: "@jhmohib",
      href: "https://twitter.com/jhmohib"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Website",
      contact: "jimohib.github.io",
      href: "https://jimohib.github.io"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss research opportunities, collaborations, or just have a conversation about AI and robotics.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200 focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200 focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white border-gray-200 min-h-[150px] focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)]-700 text-white transition-all duration-300"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <ContactCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  contact={info.contact}
                  href={info.href}
                />
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="font-medium mb-4 text-gray-900">Let's Collaborate!</h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                I'm always open to discussing new research projects, academic collaborations, 
                or opportunities in AI and robotics. Whether you have questions about my work 
                or want to explore potential partnerships, I'd love to hear from you.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Feel free to reach out through any of the channels above, and I'll get back to you as soon as possible!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const ContactCard: React.FC<{ 
  icon: React.ReactNode;
  title: string;
  contact: string;
  href: string;
}> = ({ icon, title, contact, href }) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="bg-[rgb(10,93,128)]/10 p-2 rounded-full text-[rgb(10,93,128)]">
            {icon}
          </div>
          <div>
            <p className="text-xs text-gray-500">{title}</p>
            <p className="text-sm font-medium text-gray-900">{contact}</p>
          </div>
        </CardContent>
      </Card>
    </motion.a>
  );
};

export default EnhancedContact;