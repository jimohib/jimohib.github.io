// src/components/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Ibrahim Jimoh - AI Engineer and Robotics Researcher",
  description = "AI Engineer, Roboticist, and Researcher at Carnegie Mellon University currently specializing in Human-Robot Interaction, Machine Learning, and Reinforcement Learning.",
  keywords = "AI Engineer, Robotics, Machine Learning, Reinforcement Learning, Carnegie Mellon, Human-Robot Interaction, Social Robotics, Python, Deep Learning",
  image = "/profile_pic.jpg",
  url = "https://jimohib.github.io",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ibrahim Jimoh" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jhmohib" />
      <meta name="twitter:creator" content="@jhmohib" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ibrahim Jimoh",
          "jobTitle": "AI Engineer and Robotics Researcher",
          "affiliation": {
            "@type": "Organization", 
            "name": "Carnegie Mellon University"
          },
          "alumniOf": [
            {
              "@type": "Organization",
              "name": "Carnegie Mellon University"
            },
            {
              "@type": "Organization", 
              "name": "Federal University of Technology Minna"
            }
          ],
          "email": "ioj@andrew.cmu.edu",
          "url": "https://jimohib.github.io",
          "sameAs": [
            "https://linkedin.com/in/jimohibrahim24",
            "https://github.com/jimohib",
            "https://twitter.com/jhmohib"
          ],
          "knowsAbout": [
            "Artificial Intelligence",
            "Robotics", 
            "Machine Learning",
            "Human-Robot Interaction",
            "Deep Learning",
            "Computer Vision",
            "Reinforcement Learning"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;