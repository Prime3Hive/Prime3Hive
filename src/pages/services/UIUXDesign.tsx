import { ArrowLeft, Palette, Users, Eye, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function UIUXDesign() {
  const deliverables = [
    "User Research & Analysis",
    "Wireframes & Prototypes",
    "Visual Design Systems",
    "Interactive Prototypes",
    "Usability Testing",
    "Accessibility Compliance",
    "Brand Integration",
    "Design Documentation"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Well-designed interfaces increase conversion rates by up to 400%"
    },
    {
      icon: Users,
      title: "Enhanced User Satisfaction",
      description: "Intuitive designs reduce user frustration and increase engagement by 75%"
    },
    {
      icon: Eye,
      title: "Brand Recognition",
      description: "Consistent visual design improves brand recall by 80%"
    },
    {
      icon: Sparkles,
      title: "Competitive Advantage",
      description: "Superior UX design sets you apart from 85% of competitors"
    }
  ];

  const trends = [
    {
      title: "Minimalist Design",
      description: "Clean, uncluttered interfaces that focus on essential elements, reducing cognitive load by 60%"
    },
    {
      title: "Dark Mode Interfaces",
      description: "Preferred by 82% of users for reduced eye strain and modern aesthetic appeal"
    },
    {
      title: "Micro-interactions",
      description: "Subtle animations that provide feedback and enhance user engagement by 45%"
    },
    {
      title: "Voice User Interfaces",
      description: "Integration of voice commands with 71% of users expecting voice interaction capabilities"
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
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">UI/UX Design</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Elegant, user-centered designs that combine aesthetics with functionality
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
                <h3 className="text-xl font-semibold mb-4">Complete Design Package</h3>
                <p className="text-muted-foreground mb-6">
                  Our design process encompasses user research, wireframing, prototyping, and iterative design refinement. 
                  We create intuitive interfaces that prioritize accessibility, usability, and brand consistency across 
                  all digital touchpoints.
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
                <h3 className="text-xl font-semibold mb-4">Design Tools & Process</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'].map((tool) => (
                      <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Using industry-leading design tools to create pixel-perfect designs and interactive prototypes.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Importance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Why UI/UX Design is Critical for Your Business</h2>
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
                Studies show that every dollar invested in UX design returns 
                <span className="text-primary font-semibold"> $100 in ROI</span>, making it one of the 
                highest-impact investments for digital businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Current Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Current Design Trends</h2>
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
              <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">88%</div>
                  <p className="text-sm text-muted-foreground">of users won't return to a site with poor UX</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">0.05s</div>
                  <p className="text-sm text-muted-foreground">Time users take to form an opinion about your site</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">200%</div>
                  <p className="text-sm text-muted-foreground">ROI improvement with good UX design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Premium Design Commitment</h2>
              
              <Card className="p-8 text-left mb-8">
                <h3 className="text-xl font-semibold mb-4">Design Excellence Guarantee</h3>
                <p className="text-muted-foreground mb-6">
                  We ensure design consistency across all platforms, conduct extensive user testing, provide detailed 
                  design systems, and offer unlimited revisions until perfection. Every design aligns with your brand 
                  identity and business goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Unlimited Design Revisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>User Testing & Validation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Accessibility Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cross-Platform Consistency</span>
                  </div>
                </div>
              </Card>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Badge variant="outline">Design Thinking</Badge>
                <Badge variant="outline">User Research</Badge>
                <Badge variant="outline">Prototyping</Badge>
                <Badge variant="outline">A/B Testing</Badge>
                <Badge variant="outline">Design Systems</Badge>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Start Your Design Project
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