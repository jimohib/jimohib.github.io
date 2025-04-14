
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, ExternalLink, Github, BookOpen, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  tags: string[];
  url: string;
  demoUrl?: string;
  type: 'software' | 'academic';
}

const projectData: Project[] = [
  {
    id: 1,
    name: "awesome-react-components",
    description: "A curated collection of reusable React components optimized for performance and accessibility.",
    language: "TypeScript",
    stars: 1245,
    forks: 348,
    tags: ["React", "UI Library", "Components"],
    url: "https://github.com/username/awesome-react-components",
    demoUrl: "https://awesome-react-components.demo.com",
    type: "software"
  },
  {
    id: 2,
    name: "node-api-starter",
    description: "A production-ready Node.js API boilerplate with TypeScript, Express, and MongoDB integration.",
    language: "JavaScript",
    stars: 867,
    forks: 243,
    tags: ["Node.js", "API", "Backend"],
    url: "https://github.com/username/node-api-starter",
    type: "software"
  },
  {
    id: 3,
    name: "data-visualization-toolkit",
    description: "Interactive data visualization components and utilities for modern web applications.",
    language: "TypeScript",
    stars: 631,
    forks: 129,
    tags: ["Visualization", "D3.js", "Charts"],
    url: "https://github.com/username/data-visualization-toolkit",
    demoUrl: "https://data-vis-toolkit.demo.com",
    type: "software"
  },
  {
    id: 4,
    name: "ml-research-framework",
    description: "A framework for machine learning research with implementations of state-of-the-art algorithms.",
    language: "Python",
    stars: 578,
    forks: 142,
    tags: ["Machine Learning", "Research", "AI"],
    url: "https://github.com/username/ml-research-framework",
    type: "academic"
  },
  {
    id: 5,
    name: "distributed-computing-analysis",
    description: "Research code and analysis tools for studying distributed computing performance patterns.",
    language: "Python",
    stars: 426,
    forks: 95,
    tags: ["Distributed Systems", "Research", "Analysis"],
    url: "https://github.com/username/distributed-computing-analysis",
    demoUrl: "https://distributed-computing-results.demo.com",
    type: "academic"
  },
  {
    id: 6,
    name: "smart-form-validator",
    description: "Lightweight form validation library with support for complex validation rules and custom error messages.",
    language: "JavaScript",
    stars: 492,
    forks: 87,
    tags: ["Forms", "Validation", "Frontend"],
    url: "https://github.com/username/smart-form-validator",
    demoUrl: "https://form-validator.demo.com",
    type: "software"
  },
  {
    id: 7,
    name: "academic-citation-network",
    description: "Tools for analyzing citation networks and research impact within academic literature.",
    language: "R",
    stars: 324,
    forks: 78,
    tags: ["Data Science", "Academic Research", "Network Analysis"],
    url: "https://github.com/username/academic-citation-network",
    type: "academic"
  },
  {
    id: 8,
    name: "blockchain-explorer",
    description: "A modern blockchain explorer with support for multiple networks and real-time transaction tracking.",
    language: "TypeScript",
    stars: 256,
    forks: 42,
    tags: ["Blockchain", "Web3", "Explorer"],
    url: "https://github.com/username/blockchain-explorer",
    demoUrl: "https://blockchain-explorer.demo.com",
    type: "software"
  }
];

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  Java: "bg-red-500",
  "C++": "bg-purple-500",
  Go: "bg-cyan-500",
  R: "bg-pink-500"
};

const Projects = () => {
  const [projectType, setProjectType] = useState<'all' | 'software' | 'academic'>('all');
  
  const filteredProjects = projectType === 'all' 
    ? projectData 
    : projectData.filter(project => project.type === projectType);

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">Projects & Research</h2>
        <div className="w-20 h-1 bg-github-accent mb-10 animate-fade-in"></div>
        
        <p className="text-lg mb-6 max-w-3xl animate-fade-in animate-delay-100">
          Explore my portfolio of software projects and academic research. Each repository represents 
          a problem solved or an advancement in knowledge through code and research.
        </p>
        
        <Tabs 
          value={projectType} 
          onValueChange={(value) => setProjectType(value as 'all' | 'software' | 'academic')}
          className="mb-8 animate-fade-in animate-delay-200"
        >
          <TabsList className="inline-flex">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="software" className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              Software
            </TabsTrigger>
            <TabsTrigger value="academic" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              Academic
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              delay={index % 3 * 100} // stagger animation
            />
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in animate-delay-300">
          <Button 
            variant="outline" 
            className="border-github-accent text-github-accent hover:bg-github-accent/10"
            size="lg"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => {
  const delayClass = delay ? `animate-delay-${delay}` : '';
  
  return (
    <Card className={`bg-github-card border-github-border h-full flex flex-col animate-fade-in ${delayClass}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-500"}`}></div>
            <span className="text-xs text-github-muted">{project.language}</span>
          </div>
          {project.type === "academic" && (
            <Badge variant="outline" className="text-xs bg-github-dark border-github-accent text-github-accent">
              <BookOpen className="w-3 h-3 mr-1" /> Academic
            </Badge>
          )}
        </div>
        <h3 className="font-medium text-lg">{project.name}</h3>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-github-muted line-clamp-3 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-github-dark text-xs font-normal">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3 pt-2">
        <div className="flex items-center justify-between w-full text-xs text-github-muted">
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
        <div className="flex gap-2 w-full">
          <Button size="sm" variant="outline" className="w-full border-github-border" asChild>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {project.type === "academic" ? "Repository" : "Code"}
            </a>
          </Button>
          {project.demoUrl && (
            <Button size="sm" className="w-full bg-github-accent hover:bg-github-accent/90 text-github-dark" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {project.type === "academic" ? "Results" : "Demo"}
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Projects;
