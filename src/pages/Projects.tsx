import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, Zap, Home } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectCardSkeleton } from '@/components/ui/loading-skeleton';
import { LoadingProgress } from '@/components/LoadingProgress';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    technologies: ["Supabase", "TypeScript", "Node.js", "Python"],
    features: [
      "Portfolio performance tracking",
      "Real-time market data",
      "Risk assessment tools",
      "Automated rebalancing",
      "Educational resources hub"
    ],
    timeline: "1 month and 2 weeks",
    team: "1 developer",
    impact: "500+ active investors, $2M+ assets under management",
    status: "Completed",
    year: "2025"
  }
];

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen">
        <LoadingProgress isLoading={loading} />
        <Navbar />
        <div className="pt-24 pb-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumbs */}
      <motion.div 
        className="pt-20 pb-4 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </motion.div>
      
      {/* Hero Section */}
      <AnimatedSection direction="up" className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Completed Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our portfolio of successful digital solutions that have transformed businesses and delivered exceptional results
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id}
                delay={index * 0.2}
                direction="up"
              >
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <Card className="group hover:shadow-glow transition-all duration-500 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div whileHover={{ scale: 1.05 }}>
                              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                                {project.category}
                              </Badge>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }}>
                              <Badge variant="outline" className="text-accent border-accent/30">
                                {project.year}
                              </Badge>
                            </motion.div>
                          </div>
                          <CardTitle className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-base text-muted-foreground leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{project.timeline}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Users className="w-4 h-4 text-accent" />
                            <span>{project.team}</span>
                          </motion.div>
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
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge variant="outline" className="bg-accent/10 border-accent/30 text-accent cursor-pointer">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <motion.div 
                        className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                        whileHover={{ scale: 1.01 }}
                      >
                        <h4 className="font-semibold text-foreground mb-2">Project Impact</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </motion.div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all group/btn">
                            <span>View Case Study</span>
                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection direction="up" delay={0.5}>
            <motion.div 
              className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ready to Start Your Project?
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all" asChild>
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;