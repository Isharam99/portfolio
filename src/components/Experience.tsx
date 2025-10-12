import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          My journey in the tech industry
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <Card className="p-8 card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 relative animate-fade-in">
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
            
            <div className="md:ml-12">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <h3 className="text-2xl font-bold text-primary">Software Engineering Trainee</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Jul 2024 – Jul 2025</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-6 text-lg">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="font-semibold">SKYREK (Pvt) Ltd</span>
                <span className="text-muted-foreground">— Colombo (Remote)</span>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Contributed to web and mobile development using the <span className="text-foreground font-medium">MERN stack</span> and <span className="text-foreground font-medium">Kotlin</span> in an agile environment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Implemented AI modules with <span className="text-foreground font-medium">TensorFlow</span> and <span className="text-foreground font-medium">OpenCV</span> for image classification and automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Improved scalability and reliability by integrating real-time APIs and cloud-based services</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
