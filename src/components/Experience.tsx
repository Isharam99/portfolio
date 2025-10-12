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
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden sm:block" />

          <Card className="p-4 sm:p-6 lg:p-8 card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300 relative animate-fade-in">
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background hidden sm:block" />
            
            <div className="sm:ml-8 lg:ml-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">Software Engineering Trainee</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Jul 2024 – Jul 2025</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="font-semibold">SKYREK (Pvt) Ltd</span>
                <span className="text-muted-foreground hidden sm:inline">— Colombo (Remote)</span>
                <span className="text-muted-foreground sm:hidden text-xs">Colombo (Remote)</span>
              </div>

              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
                  <span>Contributed to web and mobile development using the <span className="text-foreground font-medium">MERN stack</span> and <span className="text-foreground font-medium">Kotlin</span> in an agile environment</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
                  <span>Implemented AI modules with <span className="text-foreground font-medium">TensorFlow</span> and <span className="text-foreground font-medium">OpenCV</span> for image classification and automation</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
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
