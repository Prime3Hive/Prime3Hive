import { ArrowLeft, Code, Zap, Shield, Globe, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function WebDevelopment() {
  const deliverables = [
    "Custom Web Applications",
    "Responsive Design Implementation",
    "Backend API Development",
    "Database Design & Optimization",
    "Cloud Deployment & Hosting",
    "Performance Optimization",
    "Security Implementation",
    "Ongoing Maintenance & Support"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Up to 200% increase in online conversions through optimized user experience"
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Automated workflows reduce manual processes by 60-80%"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "24/7 accessibility to customers worldwide, expanding market presence"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security protecting sensitive business and customer data"
    }
  ];

  const trends = [
    {
      title: "Progressive Web Apps (PWAs)",
      description: "App-like experiences in browsers with offline capabilities, increasing user engagement by 52%"
    },
    {
      title: "AI-Powered Development",
      description: "Integration of AI tools accelerating development speed by 40% while maintaining quality"
    },
    {
      title: "Headless Architecture",
      description: "Decoupled frontend and backend systems providing 3x faster content delivery"
    },
    {
      title: "Edge Computing",
      description: "Reduced latency by 70% through distributed computing closer to users"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft size={20} />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">Web Development</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Custom web applications built with cutting-edge technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">What You Get</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Complete Development Package</h3>
                <p className="text-muted-foreground mb-6">
                  We deliver scalable, responsive web applications using React, Node.js, and cloud technologies. 
                  Our development process includes thorough planning, agile development cycles, comprehensive testing, 
                  and seamless deployment with ongoing maintenance support.
                </p>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built with modern technologies ensuring scalability, maintainability, and future-proof architecture.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Importance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Why This Service is Critical for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                In today's digital economy, businesses with professional web applications see 
                <span className="text-primary font-semibold"> 3x higher growth rates</span> compared 
                to those relying solely on traditional marketing methods.
              </p>
            </div>
          </div>
        </section>

        {/* Current Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Current Industry Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trends.map((trend, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{trend.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{trend.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Market Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">73%</div>
                  <p className="text-sm text-muted-foreground">of companies plan to increase web development budgets in 2024</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$8.2T</div>
                  <p className="text-sm text-muted-foreground">Global e-commerce market size by 2026</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5.2s</div>
                  <p className="text-sm text-muted-foreground">Average time users wait before leaving a slow website</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Premium Service Commitment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">&lt;3s</div>
                  <p className="text-sm text-muted-foreground">Load Time Target</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Code Quality Assurance</p>
                </div>
              </div>
              
              <Card className="p-8 text-left">
                <h3 className="text-xl font-semibold mb-4">What Makes Us Different</h3>
                <p className="text-muted-foreground mb-6">
                  We guarantee code quality through rigorous testing, provide 24/7 support, ensure 99.9% uptime, 
                  and offer continuous optimization. Every project includes comprehensive documentation and team training.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge variant="outline">Agile Development</Badge>
                  <Badge variant="outline">Code Reviews</Badge>
                  <Badge variant="outline">Continuous Integration</Badge>
                  <Badge variant="outline">Performance Monitoring</Badge>
                  <Badge variant="outline">Security Audits</Badge>
                </div>
              </Card>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Start Your Web Development Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}