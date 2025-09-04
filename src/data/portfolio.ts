// src/data/portfolio.ts
export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  language: string;
  stars: number;
  forks: number;
  tags: string[];
  url: string;
  demoUrl?: string;
  type: 'software' | 'academic';
  image?: string;
  features?: string[];
  technologies?: string[];
}

export interface Publication {
  id: number;
  title: string;
  journal: string;
  authors: string;
  year: number;
  abstract: string;
  tags: string[];
  url: string;
  doi?: string;
  type: 'conference' | 'journal' | 'workshop';
}

export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'academic' | 'professional' | 'competition';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'research' | 'education';
}

// Profile Information
export const profileData = {
  name: "Ibrahim Jimoh",
  title: "AI Engineer and Roboticist", 
  bio: `I am a Research Associate at Carnegie Mellon University where I also obtained my Masters in Engineering Artificial Intelligence. 
        I am a Robotics enthusiast researcher passionate about creating intelligent systems 
        that can think, move, and interact like humans.`,
  email: "ibjhmoh@gmail.com",
  linkedin: "https://linkedin.com/in/jimohibrahim24",
  twitter: "@jhmohib",
  github: "https://github.com/jimohib",
  website: "https://jimohib.github.io"
};

// Skills organized by category
export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["Python", "C", "C++", "C#", "Java", "JavaScript", "TypeScript"]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain", 
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "Langchain"]
  },
  {
    category: "Robotics",
    icon: "Bot",
    skills: ["ROS", "Gazebo", "OpenAI Gym", "Computer Vision", "Motion Planning"]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "Linux", "Ubuntu"]
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    skills: ["React", "Node.js", "Django", "Flask", "HTML/CSS", "REST APIs"]
  },
  {
    category: "Research & Analysis",
    icon: "BarChart",
    skills: ["Data Analysis", "Statistical Methods", "Academic Writing", "LaTeX"]
  }
];

// Project portfolio
export const projectsData: Project[] = [
  {
    id: 1,
    name: "Deep RL Mobile Robot Navigation",
    description: "A deep reinforcement learning framework for mobile robot navigation that jointly models both human-robot and human-human interactions in social spaces.",
    longDescription: "This project develops a sophisticated navigation system for mobile robots operating in social environments. Using deep reinforcement learning, the system learns to navigate while considering both human-robot interactions and human-human social dynamics. The framework enables robots to make socially acceptable navigation decisions in crowded environments.",
    language: "Python",
    stars: 15,
    forks: 3,
    tags: ["Deep Learning", "Reinforcement Learning", "Robotics", "Social Navigation", "Human-Robot Interaction"],
    url: "https://github.com/jhmpy/idl24_project",
    type: "academic",
    features: [
      "Multi-agent simulation environment",
      "Social-aware path planning algorithm",
      "Real-time obstacle avoidance",
      "Human behavior prediction models",
      "ROS integration for real robot deployment"
    ],
    technologies: ["Python", "PyTorch", "ROS", "Gazebo", "OpenAI Gym"]
  },
  {
    id: 2,
    name: "LLM Investment Advisor with RAG",
    description: "A scalable LLM-powered investment advisory platform using Retrieval Augmented Generation for personalized financial guidance and portfolio optimization.",
    longDescription: "This platform democratizes financial advice by combining large language models with retrieval augmented generation. It provides personalized investment recommendations, comprehensive risk profiling, and automated portfolio optimization based on individual financial goals and risk tolerance.",
    language: "Python",
    stars: 8,
    forks: 2,
    tags: ["NLP", "LLM", "RAG", "FinTech", "Investment", "Financial Literacy"],
    url: "https://github.com/jhmpy/AI-Investment-Advisor-Capstone",
    demoUrl: "#",
    type: "academic",
    features: [
      "Intelligent risk assessment questionnaire",
      "Personalized portfolio recommendations", 
      "Real-time market analysis integration",
      "Educational financial content generation",
      "Portfolio performance tracking and forecasting"
    ],
    technologies: ["Python", "Langchain", "OpenAI API", "Streamlit", "PostgreSQL", "Pandas"]
  },
  {
    id: 3,
    name: "Deepfake Voice Detection System",
    description: "Deep learning system for detecting AI-generated voice content to prevent fraud and misinformation in audio communications.",
    longDescription: "An advanced deep learning framework designed to identify deepfake audio content with high accuracy. The system uses sophisticated neural network architectures to analyze audio features and detect artificially generated speech, helping combat fraud and misinformation.",
    language: "Python", 
    stars: 12,
    forks: 5,
    tags: ["Deep Learning", "Audio Processing", "Fraud Detection", "Security", "Neural Networks"],
    url: "https://github.com/jhmpy/deepfake_voice_detection",
    type: "software",
    features: [
      "Real-time audio analysis",
      "Multiple model ensemble approach",
      "High accuracy detection rates",
      "Batch processing capabilities"
    ],
    technologies: ["Python", "TensorFlow", "Librosa", "Flask", "scikit-learn"]
  },
  {
    id: 4,
    name: "Eva Robot Head Synchronization",
    description: "Synchronized multimodal behaviors for humanoid robots including speech, gesture, and facial expressions with neural network-based recognition.",
    language: "Python",
    stars: 6,
    forks: 1,
    tags: ["Multimodal", "Robot Head", "Neural Networks", "Facial Expression", "Robotics"],
    url: "https://github.com/jhmpy/humanoid_robotics_and_cognition_project",
    type: "academic",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"]
  },
  {
    id: 5,
    name: "Node.js Core Modules",
    description: "Comprehensive collection of core Node.js modules with detailed documentation and implementation examples for backend development.",
    language: "JavaScript",
    stars: 3,
    forks: 1,
    tags: ["Node.js", "Backend", "JavaScript", "Documentation", "Web Development"],
    url: "https://github.com/jhmpy/node-modules",
    type: "software",
    technologies: ["Node.js", "JavaScript", "Express.js"]
  }
];

// Publications
export const publicationsData: Publication[] = [
  {
    id: 1,
    title: "Poster: Culturally Sensitive Social Robotics for Africa",
    journal: "Cultural Robotics: Diversified Sustainable Practices Workshop at IEEE/ACM HRI Conference",
    authors: "A. Akinade, D. Barros, M. Danso, Y. Haile, E. Birhan, B. Shimelis Girma, C. Osano, P. Ranchod, M. Richard, B. Rosman, I. Jimoh, T. Taye Tefferi, D. Vernon",
    year: 2025,
    abstract: "This research aims to equip robots with the ability to interact sensitively and politely with people in Africa using spatial, non-verbal, and verbal modes of communication.",
    tags: ["Cultural Sensitivity", "Robot Interaction", "Robot Behavior", "Africa", "Social Robotics"],
    url: "https://cssr4africa.github.io/posters/2025_Cultural_Robotics_Workshop_Akinade_et_al_poster.pdf",
    type: "workshop"
  },
  {
    id: 2,
    title: "Abstract: Behavior Trees for Culturally Sensitive Social Robots: African Culture Case Study",
    journal: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    authors: "I. Jimoh, H. Equbay, C. Osano, T. Tefferi, D. Vernon",
    year: 2024,
    abstract: "This paper explores the use of behavior trees to control the behavior of culturally sensitive social robots.",
    tags: ["Behavior Trees", "Social Robotics", "Cultural Sensitivity", "Robot Control"],
    url: "https://cssr4africa.github.io/abstracts/2024_Robotics_in_Africa_Forum_IROS_Jimoh_et_al_abstract.pdf",
    type: "conference"
  },
  {
    id: 3,
    title: "Breaking Mental Health Silence: Men from Different Cultures and Generations",
    journal: "Case Studies in International Education, Vol. 5 No. 2",
    authors: "Y. Underdue Murph, A. Avoka, I. Jimoh, F.Rurangwa",
    year: 2024,
    abstract: "A case study of men from different generations and diverse backgrounds who confront their resistance to openly discussing mental health challenges, influenced by their societal and cultural norms.",
    tags: ["Case Study", "Mental Health", "Culture and Generation", "Social Psychology"],
    url: "https://www.csiepub.org/index.php/csie/article/view/165",
    type: "journal"
  }
];

// Awards and Recognition
export const awardsData: Award[] = [
  {
    id: 1,
    title: "HRI Conference Grant Award",
    issuer: "Association of Computing Machinery (ACM) SIGAI",
    date: "2025",
    description: "Attended, participated and presented research at the Human-Robot Interaction conference held in Melbourne, Australia.",
    type: "academic"
  },
  {
    id: 2,
    title: "Masters Degree Scholarship Award",
    issuer: "Mastercard Foundation Scholarship",
    date: "2023",
    description: "Awarded the mastercard foundation scholarship to pursue a masters degree.",
    type: "academic"
  },
  {
    id: 3,
    title: "Recognition Best School Representative",
    issuer: "International Mathematics Olympiad (IMO)",
    date: "2015",
    description: "Recognised by the school for exemplary performance in the competition.",
    type: "competition"
  }
];

// Work Experience
export const experienceData: Experience[] = [
  {
    title: "Data Scientist",
    company: "Freelance",
    period: "2024 - Present",
    description: "Conducting analysis, designing and implementing predictive models and machine learning algorithms with companies data to generate actionable insights.",
    type: "work"
  },
  {
    title: "Data Analyst",
    company: "Malhub Technologies", 
    period: "Jun 2023 - Dec 2023",
    description: "Performed statistical analysis using machine learning methods, developed data-driven report and visualizations, and streamlined reporting processes.",
    type: "work"
  },
  {
    title: "Software Engineer (Contract)",
    company: "Optimus Bank",
    period: "Jan 2023 - Jun 2023",
    description: "Project lead, designed and developed API for a customer support bot",
    type: "work"
  }
];

// Education
export const educationData: Experience[] = [
  {
    title: "M.S. in Artificial Intelligence",
    company: "Carnegie Mellon University",
    period: "2023 - 2025",
    description: "Specialization in Artificial Intelligence and Robotics. Focus on Human-Robot Interaction and culturally sensitive robotics systems.",
    type: "education"
  },
  {
    title: "B.Eng. in Computer Engineering", 
    company: "Federal University of Technology Minna",
    period: "2015 - 2021",
    description: "Specialization in Software and Hardware Engineering. Graduated with honors.",
    type: "education"
  }
];

// Research Experience
export const researchData: Experience[] = [
  {
    title: "Research Assistant | CMU AI Robotics Laboratory",
    company: "Culturally Sensitive Social Robotics",
    period: "2024 - Present",
    description: "Investigating culturally sensitive robot behaviors through ethnographic research and identifying interaction patterns that are socially and culturally acceptable in Africa as a case study.",
    type: "research"
  },
  {
    title: "Research Assistant",
    company: "Computer Vision-based Driver Assistant and Drowsiness Detection System for Road Safety",
    period: "2021",
    description: "Investigated the use of computer vision algorithm for developing system to better enhance vehicular road safety and developed a prototype system.",
    type: "research"
  }
];