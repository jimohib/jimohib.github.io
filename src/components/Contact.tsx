
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 container bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">Get In Touch</h2>
      <div className="w-20 h-1 bg-theme-primary mb-10 animate-fade-in"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-fade-in animate-delay-100">
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-white border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-white border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="bg-white border-gray-200 min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>

        <div className="animate-fade-in animate-delay-200">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <ContactCard
              icon={<Mail className="h-5 w-5 text-theme-primary" />}
              title="Email"
              contact="ibjhmoh@gmail.com"
            />
            <ContactCard
              icon={<Linkedin className="h-5 w-5 text-theme-primary" />}
              title="LinkedIn"
              contact="linkedin.com/in/jimohibrahim24"
            />
            <ContactCard
              icon={<Twitter className="h-5 w-5 text-theme-primary" />}
              title="Twitter"
              contact="@jhmohib"
            />
            <ContactCard
              icon={<Globe className="h-5 w-5 text-theme-primary" />}
              title="Website"
              contact="jimohib.github.io"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="font-medium mb-4">Let's collaborate!</h4>
            <p className="text-sm text-theme-muted mb-4">
              I'm always open to discussing new projects, research, creative ideas or opportunities to be part of your vision.
            </p>
            <p className="text-sm text-theme-muted">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ 
  icon, 
  title, 
  contact 
}: { 
  icon: React.ReactNode, 
  title: string, 
  contact: string 
}) => {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="bg-gray-50 p-2 rounded-full">
          {icon}
        </div>
        <div>
          <p className="text-xs text-theme-muted">{title}</p>
          <p className="text-sm font-medium">{contact}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
