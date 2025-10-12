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
    image: leadsManagementImg
  },
  {
    title: "Speakraft",
    subtitle: "AI-Powered Virtual Trainer for Presentation Skills",
    year: "2025",
    description: "AI-driven coaching platform to improve presentation delivery using NLP and motion/signal analytics. Designed the Object & Environment Identification module to track speaking rate, pauses, breathing, and pacing curve.",
    role: "AI module design with instant feedback via modal UI",
    tech: ["AI/ML", "NLP", "React", "TensorFlow"],
    category: "AI & Web Application",
    image: speakraftImg
  },
  {
    title: "Arutha",
    subtitle: "Sign Language Learning App",
    year: "2024",
    description: "Sinhala/English sign-language learning with gesture recognition and voice prompts. Image-based letter detection using OpenCV and TensorFlow Lite for Android.",
    role: "AI integration and gesture recognition",
    tech: ["Kotlin", "OpenCV", "TensorFlow Lite", "Android"],
    category: "Mobile App Development",
    image: aruthaImg
  },
  {
    title: "Hot Kitchen",
    subtitle: "Online Food Ordering System",
    year: "2023",
    description: "Supplier and order management with secure JWT authentication. Optimized backend APIs, improving data load speed by 30%.",
    role: "Backend optimization and API development",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Web Application",
    image: hotKitchenImg
  },
  {
    title: "Dayata Saviya",
    subtitle: "Economic Support Android App",
    year: "2023",
    description: "Financial aid and transport ticket booking app for low-income communities.",
    role: "Mobile app development",
    tech: ["Kotlin", "Firebase", "Android"],
    category: "Mobile Development",
    image: dayataSaviyaImg
  },
  {
    title: "EventPOP.lk",
    subtitle: "Online Event Management System",
    year: "2022",
    description: "Firebase authentication, document uploads, and live data sync. Admin and user modules for event scheduling, participant management, and email alerts.",
    role: "Full-stack development",
    tech: ["Java Servlets", "Firebase", "MySQL"],
    category: "Web Application",
    image: eventpopImg
  },
  {
    title: "Spark.lk",
    subtitle: "Bill & Event Management Platform",
    year: "2021",
    description: "Event booking and billing portal hosted on XAMPP.",
    role: "Full-stack development",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    category: "Web Application",
    image: sparkImg
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <Badge variant="outline" className="mb-4 border-primary/30">
                  {project.category}
                </Badge>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">My Role:</span> {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
