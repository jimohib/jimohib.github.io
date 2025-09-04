import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

const MinimalistBlog: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  // Featured blog post
  const featuredPost = {
    id: 1,
    title: "Building Culturally Sensitive Robots: Lessons from Social Robotics",
    excerpt: "Exploring how cultural context shapes human-robot interactions and the importance of designing systems that respect diverse cultural norms and communication styles. In this post, I share insights from my research and discuss the challenges of creating robots that can adapt to different cultural contexts.",
    date: "2025-04-15",
    readTime: 8,
    category: "AI Robotic Research",
    slug: "culturally-sensitive-ai-social-robotics"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="blog" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from myBlog</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts on AI research, robotics, and technology.
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
          <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} min read
                  </span>
                  <span className="text-[rgb(10,93,128)] font-medium">
                    {featuredPost.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* <a 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-[rgb(10,93,128)] hover:text-blue-700 font-medium transition-colors"
                  >
                    Read Full Post
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  
                  <a 
                    href="/blog"
                    className="text-gray-600 hover:text-[rgb(10,93,128)] font-medium transition-colors"
                  >
                    View All Posts
                  </a> */}
                  <span className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed">
                    Read Full Post
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  
                  <span className="text-gray-400 font-medium cursor-not-allowed">
                    View All Posts
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MinimalistBlog;