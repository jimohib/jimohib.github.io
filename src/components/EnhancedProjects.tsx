// src/components/EnhancedProjects.tsx
import React, { useState, useMemo, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/portfolio';

const EnhancedProjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  // Filter projects based on search only
  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projectsData;
    
    return projectsData.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesSearch;
    });
  }, [searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of software projects, research work, and academic contributions 
            in AI, robotics, and machine learning.
          </p>
        </motion.div>
        
        {/* Simple Search */}
        <motion.div className="mb-8 max-w-md mx-auto" variants={itemVariants}>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
            />
          </div>
        </motion.div>

        {/* Results Count */}
        {searchTerm && (
          <motion.div className="mb-6 text-sm text-gray-600 text-center" variants={itemVariants}>
            Showing {filteredProjects.length} of {projectsData.length} projects
          </motion.div>
        )}
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          // No Results State
          <motion.div className="text-center py-12" variants={itemVariants}>
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">No projects found</h3>
            <p className="text-gray-500 mb-4">
              Try a different search term to find what you're looking for.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </Button>
          </motion.div>
        )}
        
        {/* GitHub Button */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Button 
            variant="outline" 
            className="border-[rgb(10,93,128)] text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)] hover:text-white"
            size="lg"
            asChild
          >
            <a href="https://github.com/jimohib?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EnhancedProjects;