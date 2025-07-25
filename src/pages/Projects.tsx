import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: "Inventory Integration - Thetailorshop Nigeria",
    description: "Complete inventory management system integration for Nigeria's leading tailoring service, featuring real-time stock tracking, automated reordering, and comprehensive analytics dashboard.",
    category: "E-commerce Integration",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
    features: [
      "Real-time inventory tracking",
      "Automated stock alerts",
      "Multi-location management",
      "Sales analytics dashboard",
      "Payment gateway integration"
    ],
    timeline: "3 months",
    team: "4 developers",
    impact: "40% reduction in stock-outs, 25% increase in operational efficiency",
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    title: "Investment Portfolio Platform",
    description: "Modern investment website with portfolio tracking, market analysis, and automated trading capabilities. Features advanced charting, risk assessment, and personalized investment recommendations.",
    category: "FinTech Platform",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Python", "TradingView API"],
    features: [
      "Portfolio performance tracking",
      "Real-time market data",
      "Risk assessment tools",
      "Automated rebalancing",
      "Educational resources hub"
    ],
    timeline: "4 months",
    team: "6 developers",
    impact: "500+ active investors, $2M+ assets under management",
    status: "Completed",
    year: "2024"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
              Our Completed Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful digital solutions that have transformed businesses and delivered exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-glow transition-all duration-500 border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {project.category}
                        </Badge>
                        <Badge variant="outline" className="text-accent border-accent/30">
                          {project.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{project.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-accent/10 border-accent/30 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Project Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all group/btn">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;