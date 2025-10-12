import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"]
  },
  {
    title: "Frontend Development",
    skills: ["Next.js", "React", "Tailwind CSS", "Bootstrap", "Material UI"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "RESTful APIs", "JWT Auth", "Firebase"]
  },
  {
    title: "AI/ML & Data Science",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Data Preprocessing", "Model Deployment"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firestore"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Vercel", "AWS CloudShell", "CI/CD", "Postman", "Git/GitHub"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable, and intelligent applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 card-gradient animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
