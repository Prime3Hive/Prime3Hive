import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every pixel, every interaction, every detail crafted to perfection"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning solutions that exceed expectations and industry standards"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              About PrimeHive
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a team of passionate digital craftsmen, dedicated to creating 
              extraordinary web experiences that push the boundaries of technology and design.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Modern, responsive web applications",
                "Cutting-edge technology stack",
                "User-centered design approach",
                "Performance-optimized solutions"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl glass-effect">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}