import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, Zap, CheckCircle } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '100+', label: 'Projects Delivered' },
    { icon: Target, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge technologies and methodologies.'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We work as partners to achieve your goals.'
    },
    {
      title: 'Quality Delivery',
      description: 'We maintain the highest standards in everything we create and deliver.'
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication and regular updates throughout every project.'
    }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
    'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Figma', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Empowering Businesses Through{' '}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Who We Are</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PrimeHive Digital Solutions is a forward-thinking technology company dedicated 
                to transforming businesses through innovative digital solutions. We combine 
                technical expertise with creative problem-solving to deliver exceptional results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of passionate developers, designers, and strategists work collaboratively 
                to bring your vision to life, ensuring every project exceeds expectations and 
                drives meaningful business growth.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Why Choose PrimeHive?</h4>
              <div className="grid gap-3">
                {[
                  'Expert team with 5+ years of experience',
                  'Proven track record of successful projects',
                  'End-to-end development and support',
                  'Agile methodology and transparent communication',
                  'Competitive pricing and flexible engagement models'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="card-gradient p-6 text-center group hover:shadow-medium transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="card-gradient p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Technologies We Use</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We leverage modern, proven technologies to build scalable and robust solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}