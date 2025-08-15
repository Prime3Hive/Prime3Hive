import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle, 
  Search,
  ChevronRight
} from 'lucide-react';

const Support = () => {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      priority: "high"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "Send us a detailed message about your issue",
      availability: "Response within 4 hours",
      action: "Send Email",
      priority: "medium"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts", 
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      priority: "high"
    }
  ];

  const faqItems = [
    {
      question: "How do I get started with my project?",
      answer: "Contact us through any support channel to schedule a consultation where we'll discuss your requirements and create a project roadmap."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity, but most projects take 4-12 weeks from start to launch. We'll provide a detailed timeline during planning."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including updates, security monitoring, and technical support for all our projects."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and can help modernize your current technology stack."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, Supabase, AWS, and many others based on project requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need, when you need it.
            </p>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-background" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <p className="text-muted-foreground">{channel.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge 
                      variant={channel.priority === 'high' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {channel.availability}
                    </Badge>
                  </div>
                  <Button className="w-full">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Describe your issue in detail and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Describe your issue or question..." rows={4} />
                <Button className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Monday - Friday</div>
                    <div className="text-muted-foreground">9:00 AM - 6:00 PM EST</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Saturday</div>
                    <div className="text-muted-foreground">10:00 AM - 2:00 PM EST</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Sunday</div>
                    <div className="text-muted-foreground">Closed</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Emergency Support</h3>
              <p className="text-muted-foreground mb-4">
                For critical issues affecting live systems, contact our emergency support line available 24/7.
              </p>
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Hotline
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search FAQ..." className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground">{item.question}</h3>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;