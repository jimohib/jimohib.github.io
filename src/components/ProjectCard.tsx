// src/components/ProjectCard.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Star, GitFork, ExternalLink, Github, Eye, Calendar, Code, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-blue-500", 
    Python: "bg-green-500",
    Java: "bg-red-500",
    "C++": "bg-purple-500",
    "C#": "bg-indigo-500",
    Go: "bg-cyan-500"
  };

  const typeIcons = {
    software: Code,
    academic: BookOpen
  };

  const TypeIcon = typeIcons[project.type];

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card 
          className="bg-white border border-gray-200 h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
          data-project-name={project.name}
        >
          {/* Project Image */}
          {project.image && (
            <div className="relative overflow-hidden rounded-t-lg">
              <OptimizedImage
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge 
                  variant="secondary" 
                  className={`${project.type === 'academic' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'} backdrop-blur-sm`}
                >
                  <TypeIcon className="w-3 h-3 mr-1" />
                  {project.type === 'academic' ? 'Research' : 'Software'}
                </Badge>
              </div>
            </div>
          )}
          
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-500"}`}></div>
                <span className="text-xs text-gray-600 font-medium">{project.language}</span>
              </div>
              
              {!project.image && (
                <Badge 
                  variant="outline" 
                  className={`text-xs ${project.type === 'academic' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-green-50 border-green-200 text-green-700'}`}
                >
                  <TypeIcon className="w-3 h-3 mr-1" />
                  {project.type === 'academic' ? 'Research' : 'Software'}
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-lg text-gray-900 hover:text-theme-primary transition-colors">
              {project.name}
            </h3>
          </CardHeader>
          
          <CardContent className="py-2 flex-grow">
            <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map(tag => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-gray-100 text-gray-700 text-xs hover:bg-theme-primary hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                  +{project.tags.length - 3} more
                </Badge>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-3 pt-2">
            {/* GitHub Stats */}
            <div className="flex items-center justify-between w-full text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  <span>{project.forks}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2 w-full">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 hover:bg-gray-50" 
                asChild
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {project.type === "academic" ? "Repository" : "Code"}
                </a>
              </Button>
              
              {project.demoUrl && (
                <Button 
                  size="sm" 
                  className="flex-1 bg-theme-primary hover:bg-theme-primary/90 text-white" 
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.type === "academic" ? "Demo" : "Live"}
                  </a>
                </Button>
              )}
              
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => setShowDetails(true)}
                className="px-3 hover:bg-theme-primary/10 hover:text-theme-primary"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Project Details Modal */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className={`w-4 h-4 rounded-full ${languageColors[project.language] || "bg-gray-500"}`}></div>
              {project.name}
              <Badge 
                variant="outline" 
                className={`ml-auto ${project.type === 'academic' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}`}
              >
                <TypeIcon className="w-3 h-3 mr-1" />
                {project.type === 'academic' ? 'Research Project' : 'Software Project'}
              </Badge>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Project Image */}
            {project.image && (
              <OptimizedImage
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            
            {/* Description */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Project Overview</h4>
              <p className="text-gray-700 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>
            
            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-theme-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Technologies Used */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* All Tags */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Project Tags</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="text-xs hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* GitHub Stats */}
            <div className="flex items-center gap-6 py-4 px-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">{project.stars} stars</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium">{project.forks} forks</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Active project</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-theme-primary hover:bg-theme-primary/90" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="outline" className="flex-1 hover:bg-gray-50" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.type === 'academic' ? 'View Demo' : 'Live Demo'}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;