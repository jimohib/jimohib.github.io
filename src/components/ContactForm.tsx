// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // 'YOUR_FORM_ID' from Formspree form ID
      const response = await fetch('https://formspree.io/f/myzdjwww', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully! ✨",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Track successful submission
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'contact',
            event_label: 'contact_form_success'
          });
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at ioj@andrew.cmu.edu",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Card className="bg-white shadow-lg border-0">
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Mail className="h-5 w-5 text-theme-primary" />
            Send Me a Message
          </h3>
          <p className="text-gray-600">
            I'd love to hear from you! Whether you have a question, collaboration idea, or just want to say hello.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={`${errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-theme-primary"} transition-all`}
              />
              {errors.name && (
                <div className="flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3 text-red-500" />
                  <span className="text-red-500 text-xs">{errors.name}</span>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-theme-primary"} transition-all`}
              />
              {errors.email && (
                <div className="flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3 text-red-500" />
                  <span className="text-red-500 text-xs">{errors.email}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              className={`${errors.subject ? "border-red-500 focus:ring-red-500" : "focus:ring-theme-primary"} transition-all`}
            />
            {errors.subject && (
              <div className="flex items-center gap-1 mt-1">
                <AlertCircle className="h-3 w-3 text-red-500" />
                <span className="text-red-500 text-xs">{errors.subject}</span>
              </div>
            )}
          </div>
          
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, question, or just say hello..."
              value={formData.message}
              onChange={handleChange}
              className={`min-h-[120px] resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-theme-primary"} transition-all`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message ? (
                <div className="flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 text-red-500" />
                  <span className="text-red-500 text-xs">{errors.message}</span>
                </div>
              ) : (
                <div></div>
              )}
              <span className="text-xs text-gray-400">
                {formData.message.length}/500
              </span>
            </div>
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white font-medium py-3 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
          
          {/* Form Footer */}
          <div className="text-center pt-2">
            <p className="text-xs text-gray-500">
              Your message will be sent securely. I typically respond within 24 hours.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;