import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

interface BlogPostData {
  id: number;
  title: string;
  content: string;
  date: string;
  readTime: number;
  category: string;
  slug: string;
  author: string;
  excerpt: string;
}

// Blog post content - in a real app, this would come from a CMS or API
const blogPostData: Record<string, BlogPostData> = {
  'culturally-sensitive-ai-social-robotics': {
    id: 1,
    title: "Building Culturally Sensitive Humanoids: Lessons from Social Robotics",
    excerpt: "Exploring how cultural context shapes human-robot interactions and the importance of designing AI systems that respect diverse cultural norms and communication styles.",
    content: `
# Building Culturally Sensitive Humanoids: Lessons from Social Robotics

When I first started working on social robotics at Carnegie Mellon's Human-Robot Interaction Lab, I quickly realized that creating truly effective AI systems requires more than just advanced algorithms and sophisticated hardware. The missing piece that often determines success or failure is cultural sensitivity.

## The Challenge of Cross-Cultural AI

In my research, I've observed how the same robot behavior can be perceived completely differently across cultures. A robot that maintains direct eye contact might be seen as confident and trustworthy in Western contexts, but could be interpreted as disrespectful or aggressive in cultures where direct eye contact with authority figures is discouraged.

This realization led me to focus on developing AI systems that can adapt their behavior based on cultural context. It's not enough to have a one-size-fits-all approach when the "fit" varies so dramatically across different cultural backgrounds.

## Key Insights from Social Robotics Research

Through my work on behavior trees for culturally sensitive robots, I've identified several critical factors that AI systems must consider:

### 1. Communication Styles
Different cultures have vastly different communication norms. Some cultures value direct communication, while others rely heavily on context and implicit understanding. AI systems need to recognize and adapt to these differences.

### 2. Personal Space and Physical Interaction
The appropriate distance for interaction varies significantly across cultures. What feels comfortable in one culture might feel invasive or distant in another.

### 3. Authority and Hierarchy
How AI systems should respond to and acknowledge different social hierarchies is crucial for acceptance and effectiveness.

## Practical Applications

In my current research, I'm developing algorithms that can:

- **Detect cultural context** through various environmental and behavioral cues
- **Adapt communication patterns** based on identified cultural preferences
- **Learn from interactions** to improve cultural sensitivity over time

## Looking Forward

The future of AI lies not just in making systems smarter, but in making them more culturally aware and sensitive. This is particularly important as AI systems are deployed globally and interact with increasingly diverse populations.

## Conclusion

Building culturally sensitive AI isn't just about being politically correct—it's about creating systems that actually work for everyone, regardless of their cultural background. As we continue to advance AI technology, we must ensure that our progress includes everyone, not just those from the cultures where these systems are primarily developed.

The lessons I've learned from social robotics have broader implications for all AI systems. Whether it's a chatbot, a recommendation system, or an autonomous vehicle, cultural sensitivity should be a core design principle, not an afterthought.

---

*This work is part of my ongoing research at Carnegie Mellon University's Human-Robot Interaction Lab, focusing on developing more inclusive and culturally adaptive AI systems.*
    `,
    date: "2024-12-15",
    readTime: 8,
    category: "AI Research",
    slug: "culturally-sensitive-ai-social-robotics",
    author: "Ibrahim"
  },
  'future-hri-africa':{
    id: 2,
    title: "The Future of Human-Robot Interaction in Africa",
    excerpt: "Discussing the unique opportunities and challenges for implementing social robotics in African contexts, with insights from ongoing research projects.",
    content: `
## Introduction

As robotics technology continues to advance, the potential for human-robot interaction (HRI) in Africa is becoming increasingly significant. This blog post explores the unique opportunities and challenges that arise when implementing social robotics in African contexts.

## Opportunities

1. **Cultural Relevance**: African cultures are rich and diverse, providing a unique backdrop for developing culturally sensitive AI systems. By understanding local customs and communication styles, we can create robots that resonate with users on a deeper level.

2. **Community Engagement**: Social robots have the potential to enhance community engagement by facilitating communication and collaboration among individuals. This is particularly important in regions where access to information and resources is limited.

3. **Education and Skill Development**: Robots can play a crucial role in education by providing personalized learning experiences and helping to bridge the digital divide. This is especially relevant in rural areas where educational resources may be scarce.

## Challenges

1. **Infrastructure Limitations**: Many African countries face significant infrastructure challenges, including limited internet access and unreliable power supply. These factors can hinder the deployment and effectiveness of social robots.

2. **Cultural Sensitivity**: Developing robots that are culturally sensitive requires a deep understanding of local customs and values. This necessitates collaboration with local communities and stakeholders throughout the design process.

3. **Ethical Considerations**: The deployment of social robots in Africa raises important ethical questions, particularly regarding privacy, consent, and the potential for bias in AI systems. It is essential to address these concerns proactively to build trust and ensure equitable outcomes.

## Conclusion

The future of human-robot interaction in Africa is filled with potential, but it also requires careful consideration of the unique cultural and contextual factors at play. By prioritizing cultural sensitivity and community engagement, we can develop social robots that truly serve the needs of African communities.

---

*This work is part of my ongoing research at Carnegie Mellon University's Human-Robot Interaction Lab, focusing on developing more inclusive and culturally adaptive AI systems.*
    `,
    date: "2024-11-28",
    readTime: 6,
    category: "Robotics",
    slug: "future-hri-africa",
    author: "Ibrahim"
  }
};

const BlogPosts: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPostData[slug]) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[rgb(10,93,128)] hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const post = blogPostData[slug];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Convert markdown-like content to JSX (simple implementation)
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl font-bold mb-6 text-gray-900">{trimmedLine.slice(2)}</h1>);
      } else if (trimmedLine.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-bold mb-4 mt-8 text-gray-900">{trimmedLine.slice(3)}</h2>);
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-semibold mb-3 mt-6 text-gray-900">{trimmedLine.slice(4)}</h3>);
      } else if (trimmedLine.startsWith('- **') && trimmedLine.includes('**')) {
        const boldPart = trimmedLine.match(/\*\*(.*?)\*\*/)?.[1] || '';
        const restPart = trimmedLine.replace(/- \*\*.*?\*\*/, '').trim();
        elements.push(
          <li key={index} className="mb-2">
            <strong className="text-gray-900">{boldPart}</strong>
            <span className="text-gray-700">{restPart}</span>
          </li>
        );
      } else if (trimmedLine.startsWith('- ')) {
        elements.push(<li key={index} className="mb-2 text-gray-700">{trimmedLine.slice(2)}</li>);
      } else if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*')) {
        elements.push(<p key={index} className="italic text-gray-600 border-l-4 border-[rgb(10,93,128)] pl-4 mb-4">{trimmedLine.slice(1, -1)}</p>);
      } else if (trimmedLine === '---') {
        elements.push(<hr key={index} className="my-8 border-gray-200" />);
      } else if (trimmedLine === '') {
        elements.push(<br key={index} />);
      } else {
        elements.push(<p key={index} className="mb-4 text-gray-700 leading-relaxed">{trimmedLine}</p>);
      }
    });
    
    return elements;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/blog"
            className="inline-flex items-center text-[rgb(10,93,128)] hover:text-blue-700 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Article Header */}
          <header className="mb-8">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="text-[rgb(10,93,128)] font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-4">
              {renderContent(post.content)}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link 
                to="/blog"
                className="inline-flex items-center text-[rgb(10,93,128)] hover:text-blue-700 font-medium transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Link>
              
              <Link 
                to="/#contact"
                className="text-gray-600 hover:text-[rgb(10,93,128)] font-medium transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPosts;