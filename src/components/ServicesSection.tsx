import { Code, Palette, Rocket, Shield, Zap, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and modern frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Elegant, user-centered designs that combine aesthetics with exceptional functionality"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for speed, performance, and user experience"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade security implementations to protect your digital assets"
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business goals"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Next-generation AI solutions to automate and enhance your business processes"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into exceptional digital experiences with our comprehensive suite of services
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="floating-card group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}