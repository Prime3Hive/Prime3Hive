import { ArrowLeft, Globe, Target, BarChart3, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DigitalStrategy() {
  const deliverables = [
    "Market & Competitor Analysis",
    "Digital Transformation Roadmap",
    "SEO & Content Strategy",
    "Social Media Planning",
    "Analytics & KPI Framework",
    "Technology Stack Planning",
    "Budget & ROI Projections",
    "Quarterly Strategy Reviews"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Strategic digital approaches increase revenue by 15-25% within first year"
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Reach new customer segments and geographic markets with 300% efficiency"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Analytics insights improve decision accuracy by 85% and reduce risks"
    },
    {
      icon: Users,
      title: "Customer Acquisition",
      description: "Optimized strategies reduce customer acquisition costs by 40-60%"
    }
  ];

  const trends = [
    {
      title: "Omnichannel Experience",
      description: "Seamless customer journey across all touchpoints increases retention by 89%"
    },
    {
      title: "AI-Driven Personalization",
      description: "Machine learning algorithms delivering personalized experiences improving engagement by 74%"
    },
    {
      title: "Voice & Conversational Commerce",
      description: "Voice search optimization becoming critical with 55% of teens using voice search daily"
    },
    {
      title: "Sustainability Focus",
      description: "73% of consumers willing to pay more for sustainable brands, driving green digital strategies"
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
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">Digital Strategy</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Comprehensive digital transformation strategies tailored to your business goals
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
                <h3 className="text-xl font-semibold mb-4">Complete Strategy Package</h3>
                <p className="text-muted-foreground mb-6">
                  We develop holistic digital strategies through market analysis, competitor research, technology 
                  roadmapping, and strategic planning. Our approach integrates SEO, social media, content marketing, 
                  and digital analytics for maximum impact.
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
                <h3 className="text-xl font-semibold mb-4">Strategy Tools & Frameworks</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['Google Analytics', 'SEMrush', 'HubSpot', 'Tableau', 'Hootsuite', 'Salesforce'].map((tool) => (
                      <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Using industry-leading analytics and strategy tools for comprehensive digital transformation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Importance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Why Digital Strategy is Essential</h2>
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
                Companies with documented digital strategies are 
                <span className="text-primary font-semibold"> 2.5x more likely</span> to be profitable 
                and achieve sustainable growth in competitive markets.
              </p>
            </div>
          </div>
        </section>

        {/* Current Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Digital Strategy Trends</h2>
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
              <h3 className="text-xl font-semibold mb-4">Digital Transformation Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">87%</div>
                  <p className="text-sm text-muted-foreground">of senior business leaders say digitalization is a priority</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$6.8T</div>
                  <p className="text-sm text-muted-foreground">Global digital transformation spending by 2025</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5x</div>
                  <p className="text-sm text-muted-foreground">Faster growth for digitally mature companies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Strategic Partnership Commitment</h2>
              
              <Card className="p-8 text-left mb-8">
                <h3 className="text-xl font-semibold mb-4">Long-term Success Partnership</h3>
                <p className="text-muted-foreground mb-6">
                  We provide quarterly strategy reviews, detailed analytics reporting, continuous optimization, 
                  and strategic guidance. Our partnership ensures your digital presence evolves with market 
                  trends and business needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Quarterly Business Reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Real-time Performance Tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Strategic Pivoting Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Technology Roadmap Updates</span>
                  </div>
                </div>
              </Card>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Badge variant="outline">Market Research</Badge>
                <Badge variant="outline">Competitive Analysis</Badge>
                <Badge variant="outline">ROI Optimization</Badge>
                <Badge variant="outline">Growth Planning</Badge>
                <Badge variant="outline">Digital Analytics</Badge>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Plan My Digital Strategy
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