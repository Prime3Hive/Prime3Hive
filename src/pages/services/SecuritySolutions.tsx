import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function SecuritySolutions() {
  const deliverables = [
    "Security Audit & Assessment",
    "SSL Certificate Implementation",
    "Data Encryption Systems",
    "Multi-Factor Authentication",
    "Firewall Configuration",
    "Vulnerability Testing",
    "Compliance Implementation",
    "24/7 Security Monitoring"
  ];

  const benefits = [
    {
      icon: Lock,
      title: "Data Protection",
      description: "Advanced encryption protects sensitive customer and business data from breaches"
    },
    {
      icon: TrendingUp,
      title: "Business Continuity",
      description: "Robust security prevents costly downtime and maintains operational integrity"
    },
    {
      icon: Eye,
      title: "Customer Trust",
      description: "Visible security measures increase customer confidence and brand reputation"
    },
    {
      icon: AlertTriangle,
      title: "Risk Mitigation",
      description: "Proactive security reduces cyber attack risks by 95% and prevents financial losses"
    }
  ];

  const trends = [
    {
      title: "Zero Trust Architecture",
      description: "\"Never trust, always verify\" approach reducing security breaches by 68% in 2024"
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Machine learning algorithms detecting and preventing 99.7% of advanced persistent threats"
    },
    {
      title: "Passwordless Authentication",
      description: "Biometric and hardware-based authentication eliminating 81% of password-related breaches"
    },
    {
      title: "Cloud Security Mesh",
      description: "Distributed security architecture providing comprehensive protection for multi-cloud environments"
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
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">Security Solutions</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Enterprise-grade security implementations to protect your digital assets
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
                <h3 className="text-xl font-semibold mb-4">Comprehensive Security Package</h3>
                <p className="text-muted-foreground mb-6">
                  We implement multi-layered security including SSL certificates, data encryption, secure authentication, 
                  firewall configuration, regular security audits, and compliance with industry standards like GDPR and ISO 27001.
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
                <h3 className="text-xl font-semibold mb-4">Security Technologies</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['WAF', 'OWASP', 'GDPR', 'ISO 27001', '2FA', 'AES-256'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Implementing industry-standard security protocols and compliance frameworks.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Importance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Why Security is Mission-Critical</h2>
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
                The average cost of a data breach in 2024 is 
                <span className="text-primary font-semibold"> $4.88 million</span>, while comprehensive 
                security implementation costs less than 2% of potential breach damages.
              </p>
            </div>
          </div>
        </section>

        {/* Current Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Current Security Trends</h2>
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
              <h3 className="text-xl font-semibold mb-4">Security Threat Landscape</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">91%</div>
                  <p className="text-sm text-muted-foreground">of cyber attacks start with a phishing email</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">204</div>
                  <p className="text-sm text-muted-foreground">days average time to identify a breach</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$10.93M</div>
                  <p className="text-sm text-muted-foreground">Average cost of a data breach in the US</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Security Commitment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Security Monitoring</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <p className="text-sm text-muted-foreground">Threat Prevention Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">&lt;15min</div>
                  <p className="text-sm text-muted-foreground">Incident Response Time</p>
                </div>
              </div>
              
              <Card className="p-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Security Excellence Promise</h3>
                <p className="text-muted-foreground mb-6">
                  We provide 24/7 security monitoring, regular vulnerability assessments, immediate incident response, 
                  and continuous security updates. Your digital assets remain protected with our proactive security approach.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge variant="outline">Penetration Testing</Badge>
                  <Badge variant="outline">Compliance Audits</Badge>
                  <Badge variant="outline">Incident Response</Badge>
                  <Badge variant="outline">Security Training</Badge>
                  <Badge variant="outline">Threat Intelligence</Badge>
                </div>
              </Card>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Secure My Business
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