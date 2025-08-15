import { ArrowLeft, Rocket, Zap, Clock, BarChart3, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PerformanceOptimization() {
  const deliverables = [
    "Performance Audit & Analysis",
    "Frontend Optimization",
    "Backend Performance Tuning",
    "Database Query Optimization",
    "CDN Implementation",
    "Caching Strategy Setup",
    "Image & Asset Compression",
    "Continuous Monitoring"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Conversions",
      description: "Every 1-second improvement in load time increases conversions by 7%"
    },
    {
      icon: BarChart3,
      title: "Better SEO Rankings",
      description: "Fast websites rank higher on Google, improving organic traffic by 53%"
    },
    {
      icon: Clock,
      title: "Reduced Bounce Rate",
      description: "Optimized sites see 32% lower bounce rates and higher user engagement"
    },
    {
      icon: Zap,
      title: "Lower Server Costs",
      description: "Efficient applications reduce server resource usage by up to 60%"
    }
  ];

  const trends = [
    {
      title: "Core Web Vitals",
      description: "Google's page experience signals now directly impact search rankings and user experience"
    },
    {
      title: "Edge Computing",
      description: "Processing data closer to users reduces latency by 70% and improves global performance"
    },
    {
      title: "Progressive Loading",
      description: "Smart resource loading strategies that prioritize critical content for faster perceived performance"
    },
    {
      title: "WebAssembly (WASM)",
      description: "Near-native performance in browsers, enabling complex applications to run 3x faster"
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
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">Performance Optimization</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Lightning-fast applications optimized for speed and user experience
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
                <h3 className="text-xl font-semibold mb-4">Comprehensive Optimization Package</h3>
                <p className="text-muted-foreground mb-6">
                  We conduct comprehensive performance audits, implement advanced caching strategies, optimize 
                  database queries, compress assets, and utilize CDNs. Our optimization includes both frontend 
                  and backend improvements for maximum efficiency.
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
                <h3 className="text-xl font-semibold mb-4">Optimization Technologies</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['Redis', 'CloudFlare', 'WebP', 'Gzip', 'HTTP/2', 'Lighthouse'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Utilizing cutting-edge optimization tools and techniques for maximum performance gains.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Importance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Why Performance Optimization is Critical</h2>
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
                Amazon found that every 100ms of latency cost them 
                <span className="text-primary font-semibold"> 1% in sales</span>. For a $100M company, 
                that's $1M in lost revenue annually from poor performance.
              </p>
            </div>
          </div>
        </section>

        {/* Current Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Performance Trends & Technologies</h2>
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
              <h3 className="text-xl font-semibold mb-4">Performance Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">53%</div>
                  <p className="text-sm text-muted-foreground">of mobile users abandon sites that take over 3 seconds to load</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2.5x</div>
                  <p className="text-sm text-muted-foreground">Performance improvement with modern optimization techniques</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">40%</div>
                  <p className="text-sm text-muted-foreground">Reduction in server costs with proper optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Performance Guarantee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">&lt;3s</div>
                  <p className="text-sm text-muted-foreground">Load Time Target</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">90+</div>
                  <p className="text-sm text-muted-foreground">Lighthouse Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <p className="text-sm text-muted-foreground">Minimum Speed Improvement</p>
                </div>
              </div>
              
              <Card className="p-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Performance Excellence Promise</h3>
                <p className="text-muted-foreground mb-6">
                  We guarantee measurable performance improvements, provide detailed performance reports, monitor 
                  continuously, and offer ongoing optimization. Our goal is to achieve sub-3-second load times 
                  across all devices.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge variant="outline">Performance Audits</Badge>
                  <Badge variant="outline">Real-time Monitoring</Badge>
                  <Badge variant="outline">Speed Optimization</Badge>
                  <Badge variant="outline">Core Web Vitals</Badge>
                  <Badge variant="outline">Mobile Performance</Badge>
                </div>
              </Card>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Optimize My Application
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