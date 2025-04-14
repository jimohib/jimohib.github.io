
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Medal, Star, GraduationCap } from 'lucide-react';

interface AwardProps {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const AwardItem = ({ icon, title, issuer, date, description }: AwardProps) => {
  return (
    <Card className="border border-github-border bg-github-card hover:bg-github-card/80 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-github-accent/10 p-3 rounded-full text-github-accent">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              <span className="text-xs text-github-muted bg-github-dark px-2 py-1 rounded-full">
                {date}
              </span>
            </div>
            <p className="text-sm text-github-muted mb-2">{issuer}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Awards = () => {
  const awards = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Outstanding Researcher Award",
      issuer: "International Computing Society",
      date: "2023",
      description: "Recognized for contributions to distributed systems research and publications in top-tier journals."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Best Paper Award",
      issuer: "ACM Conference on Software Engineering",
      date: "2022",
      description: "Awarded for the paper 'Novel Approaches to Distributed Computing Optimization'."
    },
    {
      icon: <Medal className="h-6 w-6" />,
      title: "Open Source Contributor of the Year",
      issuer: "GitHub Open Source Awards",
      date: "2022",
      description: "Recognized for significant contributions to major open source projects including over 500 commits."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Dean's List for Academic Excellence",
      issuer: "Advanced Technology University",
      date: "2021",
      description: "Achieved top 5% academic standing across all doctoral candidates in the Computer Science department."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Distinguished Teaching Award",
      issuer: "Computer Science Department",
      date: "2020",
      description: "Recognized for excellence in teaching and mentoring undergraduate students in programming courses."
    }
  ];

  return (
    <section id="awards" className="py-20 container">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">Awards & Recognition</h2>
      <div className="w-20 h-1 bg-github-accent mb-10 animate-fade-in"></div>
      
      <div className="grid grid-cols-1 gap-6 animate-fade-in animate-delay-100">
        {awards.map((award, index) => (
          <AwardItem
            key={index}
            icon={award.icon}
            title={award.title}
            issuer={award.issuer}
            date={award.date}
            description={award.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Awards;
