import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              © {currentYear} Ishara Madushan. Made with 
              <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> 
              using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/Isharam99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ishara-madushan-3919ab217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ishara835@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Transforming ideas into intelligent, scalable solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
