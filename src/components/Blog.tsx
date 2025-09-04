import React, { useState, useMemo, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Culturally Sensitive AI: Lessons from Social Robotics",
    excerpt: "Exploring how cultural context shapes human-robot interactions and the importance of designing AI systems that respect diverse cultural norms and communication styles.",
    date: "2024-12-15",
    readTime: 8,
    category: "AI Research",
    slug: "culturally-sensitive-ai-social-robotics"
  },
  {
    id: 2,
    title: "The Future of Human-Robot Interaction in Africa",
    excerpt: "Discussing the unique opportunities and challenges for implementing social robotics in African contexts, with insights from ongoing research projects.",
    date: "2024-11-28",
    readTime: 6,
    category: "Robotics",
    slug: "future-hri-africa"
  },
  {
    id: 3,
    title: "From Carnegie Mellon to Global Impact: My AI Journey",
    excerpt: "Reflections on my academic journey, research experiences, and how education shapes our approach to solving global challenges through technology.",
    date: "2024-11-10",
    readTime: 5,
    category: "Personal",
    slug: "cmu-ai-journey"
  },
  {
    id: 4,
    title: "Understanding Behavior Trees in Social Robotics",
    excerpt: "A technical deep-dive into how behavior trees can be used to create more natural and contextually appropriate robot behaviors in social settings.",
    date: "2024-10-22",
    readTime: 10,
    category: "Technical",
    slug: "behavior-trees-social-robotics"
  }
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return blogPosts;
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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
      id="blog" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts on AI research, robotics, and technology's role in bridging cultures.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div className="mb-8 max-w-md mx-auto" variants={itemVariants}>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
            />
          </div>
        </motion.div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime} min
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read More */}
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-[rgb(10,93,128)] hover:text-blue-700 font-medium"
                        asChild
                      >
                        <a href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div className="text-center py-12" variants={itemVariants}>
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">No posts found</h3>
            <p className="text-gray-500 mb-4">Try a different search term.</p>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Clear Search
            </Button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Blog;