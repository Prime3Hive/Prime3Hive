import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Cloud, Palette, ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Next-generation web applications built with React, TypeScript, and modern frameworks for scalable performance.',
      icon: Code,
      features: ['React & Next.js', 'TypeScript', 'Microservices', 'Progressive Web Apps'],
      color: 'from-blue-500 to-blue-600',
      gradient: 'from-primary to-primary-hover'
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile solutions with React Native and Flutter, delivering native performance across all devices.',
      icon: Smartphone,
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'Cross-Platform'],
      color: 'from-green-500 to-green-600',
      gradient: 'from-accent to-cyan-500'
    },
    {
      title: 'Cloud Solutions',
      description: 'Enterprise-grade cloud infrastructure with AWS, Azure, and containerized deployment for unlimited scalability.',
      icon: Cloud,
      features: ['AWS & Azure', 'Kubernetes', 'Docker', 'DevOps Automation'],
      color: 'from-purple-500 to-purple-600',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and AI-powered solutions that transform data into actionable business insights.',
      icon: Palette,
      features: ['Machine Learning', 'Data Analytics', 'AI Automation', 'Predictive Models'],
      color: 'from-orange-500 to-orange-600',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Advanced Technology{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge technologies and proven methodologies to build scalable, 
            high-performance solutions that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="card-gradient p-8 relative overflow-hidden group hover:shadow-tech transition-all duration-500 hover:-translate-y-2 border border-primary/10"
              >
                {/* Tech Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full transform translate-x-16 -translate-y-16`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Tech Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Action */}
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary-hover"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="card-gradient p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold">Ready to Transform Your Business?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals and drive success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-medium">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}