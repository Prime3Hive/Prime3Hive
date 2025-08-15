import { ArrowLeft, Zap, Brain, Cpu, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function AIIntegration() {
  const deliverables = [
    "AI Strategy & Planning",
    "Custom Machine Learning Models",
    "Intelligent Chatbots & Assistants",
    "Predictive Analytics Systems",
    "Automated Workflow Implementation",
    "Natural Language Processing",
    "Computer Vision Solutions",
    "AI Performance Monitoring"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Productivity Boost",
      description: "AI automation increases productivity by 40% and reduces manual task time by 80%"
    },
    {
      icon: Brain,
      title: "Intelligent Insights",
      description: "Machine learning provides predictive insights with 95% accuracy for better decisions"
    },
    {
      icon: Cpu,
      title: "Process Automation",
      description: "Automate repetitive tasks, reducing operational costs by 30-50%"
    },
    {
      icon: Sparkles,
      title: "Competitive Edge",
      description: "AI-powered innovations provide significant competitive advantages in the market"
    }
  ];

  const trends = [
    {
      title: "Generative AI Integration",
      description: "Custom GPT models for content creation, code generation, and customer service automation"
    },
    {
      title: "Edge AI Computing",
      description: "Real-time AI processing on devices for 90% faster response times and improved privacy"
    },
    {
      title: "Multimodal AI Systems",
      description: "AI that processes text, images, and voice simultaneously for comprehensive understanding"
    },
    {
      title: "Explainable AI (XAI)",
      description: "Transparent AI decision-making processes ensuring trust and regulatory compliance"
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
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">AI Integration</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Next-generation AI solutions to automate and enhance your business processes
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
                <h3 className="text-xl font-semibold mb-4">Complete AI Solution Package</h3>
                <p className="text-muted-foreground mb-6">
                  We implement custom AI solutions including machine learning models, chatbots, predictive analytics, 
                  automated workflows, and intelligent data processing. Our AI solutions are tailored to your specific 
                  industry and business requirements.
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
                <h3 className="text-xl font-semibold mb-4">AI Technologies & Frameworks</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS AI', 'Azure AI'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Leveraging cutting-edge AI frameworks and cloud services for scalable, reliable AI solutions.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Importance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Why AI Integration is the Future</h2>
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
                McKinsey reports that companies using AI see 
                <span className="text-primary font-semibold"> 15% increase in revenue</span> and 
                <span className="text-primary font-semibold"> 25% reduction in costs</span> within two years of implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Current Trends Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">AI Innovation Trends</h2>
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
              <h3 className="text-xl font-semibold mb-4">AI Market Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">$1.8T</div>
                  <p className="text-sm text-muted-foreground">Global AI market value by 2030</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">75%</div>
                  <p className="text-sm text-muted-foreground">of enterprises will use AI by 2025</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">38%</div>
                  <p className="text-sm text-muted-foreground">Annual growth rate of AI adoption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our AI Excellence Commitment</h2>
              
              <Card className="p-8 text-left mb-8">
                <h3 className="text-xl font-semibold mb-4">Ethical AI Implementation</h3>
                <p className="text-muted-foreground mb-6">
                  We ensure ethical AI implementation, provide comprehensive training, offer ongoing model optimization, 
                  and guarantee seamless integration. Our AI solutions are designed to augment human capabilities while 
                  maintaining data privacy and security.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Ethical AI Guidelines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Data Privacy Protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Continuous Model Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Human-AI Collaboration</span>
                  </div>
                </div>
              </Card>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Natural Language Processing</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Predictive Analytics</Badge>
                <Badge variant="outline">Process Automation</Badge>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Transform with AI
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