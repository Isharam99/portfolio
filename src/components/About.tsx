import profileImg from "@/assets/profile.png";
import { Code2, Database, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-xl opacity-30 animate-pulse" />
              <img 
                src={profileImg} 
                alt="Ishara Madushan" 
                className="relative rounded-2xl w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover border-2 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up order-1 md:order-2">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">BSc (Hons) in Information Technology</span> graduate 
              from SLIIT with a passion for building intelligent, user-centered solutions that make a real impact.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              As a results-driven engineer, I specialize in <span className="text-primary font-semibold">Full-Stack Web Development</span> and 
              <span className="text-primary font-semibold"> AI/ML Engineering</span>, transforming complex ideas into production-grade systems.
            </p>
            
            <div className="grid gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Full-Stack Development</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Building scalable web applications with Next.js, React, TypeScript, and Node.js
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">AI/ML Engineering</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Developing intelligent systems with TensorFlow, PyTorch, and OpenCV
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Cloud & DevOps</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Deploying and scaling applications with Docker, AWS, and CI/CD pipelines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
