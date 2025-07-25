import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Cloud, Palette, ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications tailored to your needs with modern frameworks and responsive design.',
      icon: Code,
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Friendly'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: Smartphone,
      features: ['iOS & Android', 'React Native', 'Native Performance', 'App Store Optimization'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
      icon: Cloud,
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto Scaling'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user engagement and satisfaction.',
      icon: Palette,
      features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      color: 'from-orange-500 to-orange-600'
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
            Comprehensive Digital{' '}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions 
            that drive growth and innovation for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="card-gradient p-8 relative overflow-hidden group hover:shadow-large transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full transform translate-x-16 -translate-y-16" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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