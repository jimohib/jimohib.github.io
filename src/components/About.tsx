
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, BarChart, Laptop, Server, Database, Brain, GraduationCap, BookOpen, Award, FileText } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 container">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">About Me</h2>
      <div className="w-20 h-1 bg-github-accent mb-10 animate-fade-in"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in animate-delay-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <Avatar className="w-24 h-24 border-2 border-github-accent">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Profile Picture" />
              <AvatarFallback>Dev</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ibrahim Jimoh</h3>
              <p className="text-github-muted">Masters in Artificial Intelligence</p>
              <p className="text-github-muted">AI Engineer & Roboticist</p>
            </div>
          </div>
          <p className="text-lg">
            Hi there! I'm a multifaceted professional with expertise in both software development and academia.
            I combine technical innovation with academic rigor to create impactful solutions that bridge theory and practice.
          </p>
          <p className="text-lg">
            With a foundation in computer science and research methodologies, I contribute to both open source communities
            and academic discourse through publications, collaborative projects, and mentorship. My work spans developing
            practical applications while advancing knowledge in my field of expertise.
          </p>
        </div>
        
        <div className="animate-fade-in animate-delay-200">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<Code className="h-5 w-5 text-github-accent" />}
                  title="Programming"
                  skills={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
                />
                <SkillCard
                  icon={<Server className="h-5 w-5 text-github-accent" />}
                  title="AI"
                  skills={['Node.js', 'Express', 'Python', 'Java']}
                />
                <SkillCard
                  icon={<Database className="h-5 w-5 text-github-accent" />}
                  title="Robotics"
                  skills={['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']}
                />
                <SkillCard
                  icon={<Brain className="h-5 w-5 text-github-accent" />}
                  title="Cloud Technologies"
                  skills={['Data Analysis', 'Machine Learning', 'Statistical Methods', 'Academic Writing']}
                />
              </div>
            </TabsContent>
            <TabsContent value="experience">
              <div className="space-y-4">
                <ExperienceCard 
                  title="Data Scientist"
                  company="Freelance"
                  period="2022 - Present"
                  description="Leading development of cloud-native applications and mentoring junior developers."
                />
                <ExperienceCard 
                  title="Data Analyst"
                  company="Malhub Technologies"
                  period="2021 - Present"
                  description="Conducting research in AI applications for healthcare, resulting in 3 published papers."
                />
                <ExperienceCard 
                  title="Software Engineer (Contract)"
                  company="Optimus Bank"
                  period="2020 - 2022"
                  description="Built and maintained modern web applications using React and Node.js."
                />
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="space-y-4">
                <ExperienceCard 
                  title="Ph.D. in Computer Science"
                  company="Advanced Technology University"
                  period="2019 - 2023"
                  description="Dissertation: 'Advanced Algorithms for Distributed Computing Systems'"
                />
                <ExperienceCard 
                  title="M.S. in Artificial Intelligence"
                  company="Carnegie Mellon University"
                  period="2016 - 2018"
                  description="Specialized in artificial intelligence and distributed systems."
                />
                <ExperienceCard 
                  title="B.S. in Computer Engineering"
                  company="Federal University of Technology"
                  period="2012 - 2016"
                  description="Graduated with honors. Active in coding competitions and hackathons."
                />
              </div>
            </TabsContent>
            <TabsContent value="research">
              <div className="space-y-4">
                <ExperienceCard 
                  title="Distributed Systems Optimization"
                  company="Journal of Advanced Computing"
                  period="2023"
                  description="Published research on novel approaches to optimize distributed computing systems."
                />
                <ExperienceCard 
                  title="Machine Learning in Healthcare"
                  company="International Conference on AI Applications"
                  period="2022"
                  description="Presented work on ML models for early disease detection with 92% accuracy."
                />
                <ExperienceCard 
                  title="Open Source Contribution Analysis"
                  company="Software Engineering Symposium"
                  period="2021"
                  description="Research on collaboration patterns in major open source projects."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) => {
  return (
    <Card className="bg-github-card border-github-border">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <ul className="space-y-1">
          {skills.map((skill) => (
            <li key={skill} className="text-sm text-github-muted">{skill}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description 
}: { 
  title: string, 
  company: string, 
  period: string, 
  description: string 
}) => {
  return (
    <div className="p-4 border border-github-border rounded-lg bg-github-card">
      <div className="flex justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs text-github-muted bg-github-dark px-2 py-1 rounded-full">
          {period}
        </span>
      </div>
      <p className="text-sm text-github-muted mb-1">{company}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default About;
