import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "primehivedigitalsolutions@gmail.com",
      description: "Send us a message anytime"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "Chat with us",
      description: "Quick response guaranteed"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "San Francisco, CA",
      description: "Come say hello at our office"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Start Your Project?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life with our expertise and passion
            </p>
          </div>
          
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.title === "WhatsApp" ? "https://wa.me/qr/FXLQ3CFIYG52B1" : method.title === "Email Us" ? "mailto:primehivedigitalsolutions@gmail.com" : "#"} target="_blank" rel="noopener noreferrer">
                <Card className="floating-card text-center group cursor-pointer h-full">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold mb-2">{method.info}</p>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
                </Card>
              </a>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a clear vision or just an idea, we're here to help you 
                turn it into a digital masterpiece that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all neon-glow">
                  <Send className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="border border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open('https://calendly.com/primehivedigitalsolutions', '_blank')}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}