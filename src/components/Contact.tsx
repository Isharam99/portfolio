import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="mailto:ishara835@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-sm sm:text-base">ishara835@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+94765286878"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">+94 76 528 6878</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium">Waliwita Road, Kaduwela</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 card-gradient border-primary/20 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Isharam99" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 flex-1 flex items-center justify-center"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/ishara-madushan-3919ab217" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 flex-1 flex items-center justify-center"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </Card>
          </div>

          {/* CTA Card */}
          <div className="space-y-6">
            <Card className="p-8 card-gradient border-primary/20 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm passionate about creating impactful solutions and always excited to collaborate on innovative projects. 
                  Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 transition-all duration-300 glow"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:ishara835@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Me an Email
                </Button>

                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                  onClick={() => window.open('/Ishara_Madushan_Resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
