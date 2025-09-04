import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  },
  {
    id: 5,
    title: "Cross-Cultural Communication in AI Systems",
    excerpt: "How different cultures express emotions, intentions, and social cues differently, and why AI systems need to account for these variations.",
    date: "2024-10-08",
    readTime: 7,
    category: "AI Research",
    slug: "cross-cultural-communication-ai"
  },
  {
    id: 6,
    title: "Machine Learning Approaches to Cultural Adaptation",
    excerpt: "Exploring various ML techniques for helping robots adapt their behavior to different cultural contexts and communication styles.",
    date: "2024-09-25",
    readTime: 9,
    category: "Technical",
    slug: "ml-cultural-adaptation"
  }
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/"
              className="inline-flex items-center text-[rgb(10,93,128)] hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughts on AI research, robotics, and technology's role in bridging cultures.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
            />
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                      <span className="text-[rgb(10,93,128)] font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-[rgb(10,93,128)] transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read More */}
                    <div className="pt-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-[rgb(10,93,128)] hover:text-blue-700 font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 max-w-md mx-auto">
            <div className="text-gray-400 text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">No posts found</h3>
            <p className="text-gray-500 mb-4">Try a different search term.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="text-[rgb(10,93,128)] hover:text-blue-700 font-medium"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;