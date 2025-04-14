
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink, BookOpen, Calendar } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  journal: string;
  authors: string;
  year: number;
  abstract: string;
  tags: string[];
  url: string;
  doi?: string;
}

const publicationsData: Publication[] = [
  {
    id: 1,
    title: "Advanced Techniques for Distributed Computing in Cloud Environments",
    journal: "Journal of Cloud Computing Research",
    authors: "Your Name, Collaborator One, Collaborator Two",
    year: 2023,
    abstract: "This paper presents novel techniques for optimizing distributed computing tasks in cloud environments, improving efficiency by 45% compared to traditional approaches.",
    tags: ["Distributed Computing", "Cloud", "Performance Optimization"],
    url: "https://example.com/publication1",
    doi: "10.1234/jccr.2023.01.123"
  },
  {
    id: 2,
    title: "Machine Learning Models for Early Disease Detection in Medical Imaging",
    journal: "International Journal of Medical Informatics",
    authors: "Your Name, Medical Researcher, Data Scientist",
    year: 2022,
    abstract: "We developed and validated machine learning models for detecting early signs of disease in medical images with 92% accuracy, significantly improving upon existing methods.",
    tags: ["Machine Learning", "Healthcare", "Medical Imaging"],
    url: "https://example.com/publication2",
    doi: "10.1234/ijmi.2022.05.678"
  },
  {
    id: 3,
    title: "Analyzing Contribution Patterns in Major Open Source Software Projects",
    journal: "ACM Transactions on Software Engineering",
    authors: "Your Name, Software Analyst",
    year: 2021,
    abstract: "This research examines contribution patterns in open source projects, identifying key factors that influence long-term sustainability and community health.",
    tags: ["Open Source", "Software Engineering", "Community"],
    url: "https://example.com/publication3",
    doi: "10.1234/acmtse.2021.03.321"
  },
  {
    id: 4,
    title: "Privacy-Preserving Methods for Collaborative Data Analysis",
    journal: "IEEE Security and Privacy",
    authors: "Your Name, Privacy Expert, Security Researcher",
    year: 2021,
    abstract: "A comprehensive analysis of methods for enabling collaborative data analysis while maintaining privacy guarantees, with implementations and performance evaluations.",
    tags: ["Privacy", "Security", "Data Analysis"],
    url: "https://example.com/publication4",
    doi: "10.1234/ieeesp.2021.07.456"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 container">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">Academic Publications</h2>
      <div className="w-20 h-1 bg-github-accent mb-10 animate-fade-in"></div>
      
      <p className="text-lg mb-12 max-w-3xl animate-fade-in animate-delay-100">
        My research contributions span multiple disciplines, with a focus on applying computational methods
        to solve complex problems in various domains.
      </p>
      
      <div className="space-y-6">
        {publicationsData.map((publication, index) => (
          <PublicationCard 
            key={publication.id} 
            publication={publication}
            delay={index * 100}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center animate-fade-in animate-delay-300">
        <Button 
          variant="outline" 
          className="border-github-accent text-github-accent hover:bg-github-accent/10"
          size="lg"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          View All Publications
        </Button>
      </div>
    </section>
  );
};

const PublicationCard = ({ publication, delay }: { publication: Publication, delay: number }) => {
  const delayClass = delay ? `animate-delay-${delay}` : '';
  
  return (
    <Card className={`bg-github-card border-github-border animate-fade-in ${delayClass}`}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-2 text-github-accent">
          <FileText className="h-5 w-5" />
          <Badge variant="outline" className="border-github-accent">
            <Calendar className="h-3 w-3 mr-1" /> {publication.year}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-2">{publication.title}</h3>
        <p className="text-sm text-github-muted mb-2">
          <span className="font-medium">{publication.journal}</span>
        </p>
        <p className="text-sm text-github-muted mb-4">{publication.authors}</p>
        <p className="text-sm mb-4 line-clamp-3">{publication.abstract}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-github-dark text-xs font-normal">{tag}</Badge>
          ))}
        </div>
        {publication.doi && (
          <p className="text-xs text-github-muted mb-2">DOI: {publication.doi}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full bg-github-accent hover:bg-github-accent/90 text-github-dark" asChild>
          <a href={publication.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Read Publication
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Publications;
