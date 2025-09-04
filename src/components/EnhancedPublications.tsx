import React, { useState, useMemo, useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  ExternalLink, 
  BookOpen, 
  Calendar, 
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

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
  type: 'poster' | 'abstract' | 'journal' | 'conference';
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
    doi: "",
    type: 'poster'
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
    doi: "",
    type: 'abstract'
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
    doi: "",
    type: 'journal'
  }
];

const EnhancedPublications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef);

  // Filter publications based on search only
  const filteredPublications = useMemo(() => {
    if (!searchTerm) return publicationsData;
    
    return publicationsData.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
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

  const getTypeLabel = (type: string) => {
    const labels = {
      poster: 'Poster',
      abstract: 'Abstract', 
      journal: 'Journal',
      conference: 'Conference'
    };
    return labels[type as keyof typeof labels] || 'Publication';
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="publications" 
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Publications</h2>
          <div className="w-20 h-1 bg-[rgb(10,93,128)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Research contributions in social robotics, human-robot interaction, and culturally sensitive AI systems.
          </p>
        </motion.div>

        {/* Simple Search */}
        <motion.div className="mb-8 max-w-md mx-auto" variants={itemVariants}>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:ring-[rgb(10,93,128)] focus:border-[rgb(10,93,128)]"
            />
          </div>
        </motion.div>

        {/* Results Count */}
        {searchTerm && (
          <motion.div className="mb-6 text-sm text-gray-600 text-center" variants={itemVariants}>
            Showing {filteredPublications.length} of {publicationsData.length} publications
          </motion.div>
        )}
        
        {/* Publications List */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-4">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {getTypeLabel(publication.type)}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-gray-600">
                          {publication.year}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg text-gray-900 leading-tight">
                        {publication.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600">
                        {publication.journal}
                      </p>
                      
                      <p className="text-sm text-gray-500">
                        {publication.authors}
                      </p>
                      
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {publication.abstract}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {publication.tags.map(tag => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="bg-gray-100 text-gray-600 text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant="outline"
                      className="w-full border-[rgb(10,93,128)] text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)] hover:text-white" 
                      asChild
                    >
                      <a href={publication.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Publication
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          // No Results State
          <motion.div className="text-center py-12" variants={itemVariants}>
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">No publications found</h3>
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
        
        {/* Footer CTA */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Button 
            variant="outline" 
            className="border-[rgb(10,93,128)] text-[rgb(10,93,128)] hover:bg-[rgb(10,93,128)] hover:text-white"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Discuss Research Collaboration
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EnhancedPublications;