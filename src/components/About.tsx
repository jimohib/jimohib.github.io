
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Monitor, Cpu, Cloud, Bot, Wrench, BarChart, Laptop, Server, Database, Brain, GraduationCap, BookOpen, Award, FileText } from 'lucide-react';
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
              <AvatarImage src="/photo1.jpg" alt="Profile Picture" />
              <AvatarFallback>Dev</AvatarFallback>
            </Avatar>
            {/* <div>
              <h3 className="text-xl font-semibold mb-2">Ibrahim Jimoh</h3>
              <p className="text-github-muted">Masters in Artificial Intelligence</p>
              <p className="text-github-muted">AI Engineer and Roboticist</p>
            </div> */}
          </div>
          <p className="text-lg">
            Hi there! Welcome to my website!
          </p>
          <p className="text-lg">
            I am a Masters student in Artificial Intelligence at Carnegie Mellon University. I am a Robotics enthusiast
            researcher passionate about creating intelligent systems that can think, move, and interact like humans. 
            My journey into robotics began with a fascination for the science marvel fiction—yes, Iron Man played a role—but it quickly 
            evolved into a deeper curiosity about how machines can learn, adapt, and solve real-world problems.
          </p>
          <p className="text-lg">
          Currently, I am focused on Human-Robot Interaction (HRI), exploring how robots can understand, collaborate with, and
          support people in meaningful and culturally aware ways. I've had the opportunity to present my research at international 
          conferences and work with cutting-edge platforms like ROS and the Pepper robot. I am driven by a belief that robotics 
          can be a force for good especially when designed inclusively and thoughtfully.
          </p>
          <p className="text-lg">
          When I'm not knee-deep in code or research, you'll find me enjoying great conversation, learning something new, 
          or exploring new corners of the world. I am a ping-pong lover, fascinated by the hand-eye coordination and reflex involved in playing it.
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
                  title="Language"
                  skills={['Python, C, C++, C#, Java, JavaScript']}
                />
                <SkillCard
                  icon={<Monitor className="h-5 w-5 text-github-accent" />}
                  title="Frontend"
                  skills={['HTML, CSS, Bootstrap']}
                />
                <SkillCard
                  icon={<Server className="h-5 w-5 text-github-accent" />}
                  title="Backend"
                  skills={['Python, PHP, C#, Django, .Net']}
                />
                <SkillCard
                  icon={<Cpu className="h-5 w-5 text-github-accent" />}
                  title="AI"
                  skills={['Pandas, Numpy, Scikit-Learn, Matplotlib, Seaborn, PyTorch, Tensorflow, RAG, Langchain, APIs']}
                />
                <SkillCard
                  icon={<Bot className="h-5 w-5 text-github-accent" />}
                  title="Robotics"
                  skills={['ROS, Gazebo, OpenAI Gym']}
                />
                <SkillCard
                  icon={<Cloud className="h-5 w-5 text-github-accent" />}
                  title="Cloud Technology"
                  skills={['AWS, GCP, Docker, Kubernetes']}
                />
                <SkillCard
                  icon={<Database className="h-5 w-5 text-github-accent" />}
                  title="Database"
                  skills={['MySQL']}
                />
                <SkillCard
                  icon={<Wrench className="h-5 w-5 text-github-accent" />}
                  title="Developer Tools"
                  skills={['Git, Github, Linux, Ubuntu, LaTex, Unity3D']}
                />
                <SkillCard
                  icon={<Brain className="h-5 w-5 text-github-accent" />}
                  title="Research"
                  skills={['Data Analysis, Machine Learning, Statistical Methods, Academic Writing']}
                />
              </div>
            </TabsContent>
            <TabsContent value="experience">
              <div className="space-y-4">
                <ExperienceCard 
                  title="Data Scientist"
                  company="Freelance"
                  period="2024 - Present"
                  description="Conducting analysis, designing and implementing predictive models and machine learning algorithms with companies data to generate actionable insights."
                />
                <ExperienceCard 
                  title="Data Analyst"
                  company="Malhub Technologies"
                  period="Jun 2023 - Dec 2023"
                  description="Performed statistical analysis using machine learning methods, developed data-driven report and visualizations, and streamlined reporting processes."
                />
                <ExperienceCard 
                  title="Software Engineer (Contract)"
                  company="Optimus Bank"
                  period="Jan 2023 - Jun 2023"
                  description="Project lead, designed and developed API for a customer support bot"
                />
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="space-y-4">
                <ExperienceCard 
                  title="M.S. in Artificial Intelligence"
                  company="Carnegie Mellon University"
                  period="2023 - 2025"
                  description="Specialization in Artificial Intelligence and Robotics."
                />
                <ExperienceCard 
                  title="B.Eng. in Computer Engineering"
                  company="Federal University of Technology Minna"
                  period="2015 - 2021"
                  description="Specialization in Software and Hardware Engineering."
                />
              </div>
            </TabsContent>
            <TabsContent value="research">
              <div className="space-y-4">
                <ExperienceCard 
                  title="Research Assistant | CMU AI Robotics Laboratory"
                  company="Culturally Sensitive Social Robotics"
                  period="2024 - Present"
                  description="Investigating culturally sensitive robot behaviors through ethnographic research and identifying interaction patterns that are socially and culturally acceptable in Africa as a case study."
                />
                <ExperienceCard 
                  title="Research Assistant"
                  company="Computer Vision-based Driver Assistant and Drowsiness Detection System for Road Safety"
                  period="2021"
                  description="Investigated the use of computer vision algorithm for developing system to better enhance vehicular road safety and developed a prototype system."
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
