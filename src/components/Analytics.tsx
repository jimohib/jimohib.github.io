// src/components/Analytics.tsx
import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 ID
    const GA_ID = process.env.VITE_GA_ID || 'G-6B64TLXRSB';
    
    // Only load analytics in production
    if (process.env.NODE_ENV !== 'production') {
      console.log('Analytics disabled in development mode');
      return;
    }
    
    // Load Google Analytics 4 script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);
    
    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);
    
    // Custom event tracking helper
    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'engagement',
          ...parameters
        });
      }
    };
    
    // Track specific interactions
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Track CV downloads
      if (target.closest('[href*="CV"]') || target.closest('[href*="resume"]')) {
        trackEvent('cv_download', {
          event_category: 'document_download',
          file_name: 'Ibrahim_Jimoh_CV.pdf'
        });
      }
      
      // Track project repository clicks
      if (target.closest('[href*="github.com"]')) {
        const projectCard = target.closest('[data-project-name]');
        if (projectCard) {
          const projectName = projectCard.getAttribute('data-project-name');
          trackEvent('project_view', {
            project_name: projectName,
            event_category: 'project_engagement'
          });
        }
      }
      
      // Track social media clicks
      if (target.closest('[href*="linkedin.com"]')) {
        trackEvent('social_click', { platform: 'linkedin' });
      }
      if (target.closest('[href*="twitter.com"]')) {
        trackEvent('social_click', { platform: 'twitter' });
      }
      
      // Track email clicks
      if (target.closest('[href^="mailto:"]')) {
        trackEvent('contact_click', { method: 'email' });
      }
      
      // Track external demo links
      if (target.closest('[href*="demo"]') || target.closest('a[href*="http"]:not([href*="github"])')) {
        trackEvent('demo_view', {
          event_category: 'project_engagement'
        });
      }
    };
    
    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScrollDepth && scrollPercent % 25 === 0) {
        maxScrollDepth = scrollPercent;
        trackEvent('scroll_depth', {
          scroll_depth: scrollPercent,
          event_category: 'engagement'
        });
      }
    };
    
    // Track time on page
    const startTime = Date.now();
    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        time_spent: timeSpent,
        event_category: 'engagement'
      });
    };
    
    // Add event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleUnload);
    
    // Cleanup function
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleUnload);
      
      // Remove analytics scripts
      const scripts = document.querySelectorAll('script[src*="googletagmanager"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything visual
};

export default Analytics;