import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import leadsManagementImg from "@/assets/projects/leads-management.jpg";
import speakraftImg from "@/assets/projects/speakraft.jpg";
import aruthaImg from "@/assets/projects/arutha.jpg";
import hotKitchenImg from "@/assets/projects/hot-kitchen.jpg";
import dayataSaviyaImg from "@/assets/projects/dayata-saviya.jpg";
import eventpopImg from "@/assets/projects/eventpop.jpg";
import sparkImg from "@/assets/projects/spark.jpg";

const projects = [
  {
    title: "Leads Management App",
    subtitle: "Facebook & Google Ads Dashboard",
    year: "2025",
    description: "Centralized dashboard for managing ad campaigns and leads with real-time metrics and automation. Implemented secure JWT authentication, data filtering, CSV export, and webhook integrations.",
    role: "Full-stack design and implementation—API architecture, data modeling, deployment",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "MongoDB"],
    category: "Full-Stack Web Application",
    image: leadsManagementImg,
    githubUrl: "https://github.com/Isharam99/Media-Dashboard.git"
  },
  {
    title: "Speakraft",
    subtitle: "AI-Powered Virtual Trainer for Presentation Skills",
    year: "2025",
    description: "AI-driven coaching platform to improve presentation delivery using NLP and motion/signal analytics. Designed the Object & Environment Identification module to track speaking rate, pauses, breathing, and pacing curve.",
    role: "AI module design with instant feedback via modal UI",
    tech: ["AI/ML", "NLP", "React", "TensorFlow"],
    category: "AI & Web Application",
    image: speakraftImg,
    githubUrl: "https://github.com/Isharam99"
  },
  {
    title: "Arutha",
    subtitle: "Sign Language Learning App",
    year: "2024",
    description: "Sinhala/English sign-language learning with gesture recognition and voice prompts. Image-based letter detection using OpenCV and TensorFlow Lite for Android.",
    role: "AI integration and gesture recognition",
    tech: ["Kotlin", "OpenCV", "TensorFlow Lite", "Android"],
    category: "Mobile App Development",
    image: aruthaImg,
    githubUrl: "https://github.com/Isharam99/Research-Signin-Language-ASL-and-SSL.git"
  },
  {
    title: "Hot Kitchen",
    subtitle: "Online Food Ordering System",
    year: "2023",
    description: "Supplier and order management with secure JWT authentication. Optimized backend APIs, improving data load speed by 30%.",
    role: "Backend optimization and API development",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Web Application",
    image: hotKitchenImg,
    githubUrl: "https://github.com/Isharam99"
  },
  {
    title: "Dayata Saviya",
    subtitle: "Economic Support Android App",
    year: "2023",
    description: "Financial aid and transport ticket booking app for low-income communities.",
    role: "Mobile app development",
    tech: ["Kotlin", "Firebase", "Android"],
    category: "Mobile Development",
    image: dayataSaviyaImg,
    githubUrl: "https://github.com/Isharam99/Dayata-Saviya.git"
  },
  {
    title: "EventPOP.lk",
    subtitle: "Online Event Management System",
    year: "2022",
    description: "Firebase authentication, document uploads, and live data sync. Admin and user modules for event scheduling, participant management, and email alerts.",
    role: "Full-stack development",
    tech: ["Java Servlets", "Firebase", "MySQL"],
    category: "Web Application",
    image: eventpopImg,
    githubUrl: "https://github.com/Isharam99"
  },
  {
    title: "Spark.lk",
    subtitle: "Bill & Event Management Platform",
    year: "2021",
    description: "Event booking and billing portal hosted on XAMPP.",
    role: "Full-stack development",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    category: "Web Application",
    image: sparkImg,
    githubUrl: "https://github.com/Isharam99/Spark.lk.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A showcase of my work in AI/ML, full-stack development, and mobile applications
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                if (project.githubUrl) {
                  window.open(project.githubUrl, '_blank');
                }
              }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground ml-2 flex-shrink-0">{project.year}</span>
                </div>

                <Badge variant="outline" className="mb-3 sm:mb-4 border-primary/30 text-xs sm:text-sm">
                  {project.category}
                </Badge>

                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">My Role:</span> {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-background/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-primary group-hover:text-primary/80 transition-colors">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
