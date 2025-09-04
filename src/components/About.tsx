
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
            I am a Robotics enthusiast and researcher passionate about creating intelligent systems that can think, move, and interact like humans. 
            My journey into robotics began with a fascination for the science Marvel fiction (yes, Iron Man played a role) but it quickly
            evolved into a deeper curiosity about how machines can learn, adapt, and solve real-world problems.
          </p>
          <p className="text-lg">
          Currently, I am focused on Human Robot Interaction (HRI), exploring how robots can understand, collaborate with, and
          support people in meaningful and culturally aware ways. I've had the opportunity to present my research at international
          conferences like IROS and work with cutting edge robot platforms like Robot Operating System (ROS) and the Pepper humanoid robot. I am driven by a belief that robotics
          can be a force for good especially when designed inclusively and thoughtfully.
          </p>
          <p className="text-lg">
          When I'm not knee-deep in code or research, you'll find me involved in community services, learning something new, 
          or playing ping pong. I am an avid ping pong player, fascinated by the hand-eye coordination and reflex involved in playing it.
          </p>
        </div>
        
        <div className="animate-fade-in animate-delay-200">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Work Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<Code className="h-5 w-5 text-github-accent" />}
                  title="Language"
                  skills={['Python, C++, C#, Java, JavaScript']}
                />
                <SkillCard
                  icon={<Monitor className="h-5 w-5 text-github-accent" />}
                  title="Web Frontend"
                  skills={['HTML, CSS, Bootstrap']}
                />
                <SkillCard
                  icon={<Server className="h-5 w-5 text-github-accent" />}
                  title="Web Backend"
                  skills={['Python, PHP, C#, Django, .Net']}
                />
                <SkillCard
                  icon={<Cpu className="h-5 w-5 text-github-accent" />}
                  title="AI and Machine Learning"
                  skills={['Pandas, Numpy, Scikit-Learn, PyTorch, Tensorflow, RAG, Langchain, APIs']}
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
                  title="Software Engineer Intern"
                  company="Optimus Bank"
                  period="Jan 2023 - Jun 2023"
                  description="As project lead, I coordinated project timelines, ensured deliverables were met, and fostered collaboration between development and business units. 
                  Served in a scrum master role, where I facilitated daily stand-ups, sprint planning, and retrospectives, which led to improved team productivity and task completion rates. 
                  I also designed and developed APIs using C# and .Net framework for a customer support virtual assistant, enabling seamless integration with the bank’s existing infrastructure and enhancing service efficiency. 
                  Additionally, I maintained data security and ensured full adherence to industry compliance standards, achieving 100% regulatory compliance with banking security protocols."
                />
                <ExperienceCard 
                  title="IT Engineer Intern"
                  company="Protogy Global Services Limited"
                  period="Jan 2022 - Dec 2022"
                  description="I managed the company’s meter software, overseeing updates, maintenance, and utility performance. 
                  To improve operations, I developed a Python based entry application for product inventory, which enhanced production and time efficiency by over 60%. 
                  I also resolved software and hardware issues affecting meters in the pipeline systems. 
                  During this period, I was recognized as the best performing and most efficient intern in the company."
                />
                <ExperienceCard 
                  title="Hardware and Software Technician"
                  company="Canaanland Technologies"
                  period="May 2016 - May 2019"
                  description="I maintained, troubleshot, and repaired computer systems and devices for both corporate and individual clients. 
                  In addition, I provided technical support and delivered software solutions tailored to client needs. 
                  This role also gave me valuable experience in customer relations, enhancing my ability to communicate effectively and support clients."
                />
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="space-y-4">
                <ExperienceCard 
                  title="MSc in Engineering Artificial Intelligence"
                  company="Carnegie Mellon University"
                  period="2023 - 2025"
                  description="Specialization in Artificial Intelligence and Robotics."
                />
                <ExperienceCard 
                  title="BEng in Computer Engineering"
                  company="Federal University of Technology Minna (FUT)"
                  period="2015 - 2021"
                  description="Specialization in Software and Hardware Engineering."
                />
              </div>
            </TabsContent>
            <TabsContent value="research">
              <div className="space-y-4">
                <ExperienceCard 
                  title="Research Associate | AI Robotics Lab, Carnegie Mellon College of Engineering"
                  company="Culturally Sensitive Social Robotics"
                  period="Jun 2025 - Present"
                  description="I am working on developing a robot localization ROS software module designed to estimate a Pepper robot's absolute position by triangulation and trilateration using visual landmarks within a known environment, enabling more effective interaction and navigation."
                />
                <ExperienceCard 
                  title="Research Assistant | AI Robotics Lab, Carnegie Mellon College of Engineering"
                  company="Culturally Sensitive Social Robotics"
                  period="Jun 2024 - May 2025"
                  description="Investigated culturally sensitive robot behaviors through ethnographic research, focusing on identifying interaction patterns that are socially and culturally acceptable in Africa. 
                  To operationalize these, I implemented a Behavior Tree Domain-Specific Language (DSL) for modeling human–robot interaction scenarios. 
                  Additionally, I designed a software module for robot localization that determines the robot’s pose in a Cartesian world frame by integrating relative and absolute position estimation. 
                  Relative estimation leveraged odometry and the robot’s inertial measurement unit, while absolute estimation is being achieved using visual landmarks."
                />
                <ExperienceCard 
                  title="Research Assistant | Computer Engineering Lab, FUT"
                  company="Computer Vision Driver Assistant and Detection System for Road Safety"
                  period="Jan 2021 - Sep 2021"
                  description="Investigated the use of computer vision algorithms to develop systems aimed at enhancing vehicular road safety. 
                  As part of this work, I conducted surveys and gathered statistical data on vehicular accident reports to inform system design. 
                  I subsequently developed an in-vehicle system for detecting driver drowsiness, capable of triggering a sound alarm and transmitting a distress signal containing driver and vehicle information to the nearest road safety authority. 
                  The system employed a Histogram of Oriented Gradient (HOG) facial predictor in combination with eye aspect ratio analysis for robust eye monitoring and drowsiness detection."
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
