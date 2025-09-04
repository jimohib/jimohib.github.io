
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
    title: "Poster: Culturally Sensitive Social Robotics for Africa",
    journal: "Cultural Robotics: Diversified Sustainable Practices Workshop at IEEE/ACM HRI Conference",
    authors: "A. Akinade, D. Barros, M. Danso, Y. Haile, E. Birhan, B. Shimelis Girma, C. Osano, P. Ranchod, M. Richard, B. Rosman, I. Jimoh, T. Taye Tefferi, D. Vernon",
    year: 2025,
    abstract: "This research aim to equip robots with the ability to interact sensitively and politely with people in Africa using spatial, non-verbal, and verbal modes of communication.",
    tags: ["Cultural Sensitivity", "Robot Interaction", "Robot Behavior"],
    url: "https://cssr4africa.github.io/posters/2025_Cultural_Robotics_Workshop_Akinade_et_al_poster.pdf",
    doi: ""
  },
  {
    id: 2,
    title: "Abstract: Behavior Trees for Culturally Sensitive Social Robots: African Culture Case Study",
    journal: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    authors: "I. Jimoh, H. Equbay, C. Osano, T. Tefferi, D. Vernon",
    year: 2024,
    abstract: "This paper explores the use of behavior trees to control the behavior of culturally sensitive social robots.",
    tags: ["Behavior Trees", "Social Robotics", "Cultural Sensitivity"],
    url: "https://cssr4africa.github.io/abstracts/2024_Robotics_in_Africa_Forum_IROS_Jimoh_et_al_abstract.pdf",
    doi: ""
  },
  {
    id: 3,
    title: "Breaking Mental Health Silence: Men from Different Cultures and Generations",
    journal: "Case Studies in International Education, Vol. 5 No. 2",
    authors: "Y. Underdue Murph, A. Avoka, I. Jimoh, F.Rurangwa",
    year: 2024,
    abstract: "A case study of men from different generations and diverse backgrounds who confront their resistance to openly discussing mental health challenges, influenced by their societal and cultural norms.",
    tags: ["Case Study", "Mental Health", "Culture and Generation"],
    url: "https://www.csiepub.org/index.php/csie/article/view/165",
    doi: ""
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 container">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">Academic Publications</h2>
      <div className="w-20 h-1 bg-github-accent mb-10 animate-fade-in"></div>
      
      <p className="text-lg mb-12 max-w-3xl animate-fade-in animate-delay-100">
        Research contribution in social robotics, human-robot interaction, and culturally sensitive AI.
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
