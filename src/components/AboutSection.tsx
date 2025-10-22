import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Target, Leaf, Zap, Globe } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function AboutSection() {
  const stats = [
    { number: "5", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "17", label: "SDG Goals Aligned" }
  ];

  const services = [
    {
      icon: Target,
      title: "Advanced Inventory Management",
      description: "Cutting waste and optimizing resources for responsible consumption"
    },
    {
      icon: Zap,
      title: "AI & Robotics",
      description: "Boosting efficiency and tackling climate change through intelligent automation"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Web development, social media optimization, and data intelligence solutions"
    }
  ];

  const sdgHighlights = [
    "Clean energy systems development (SDG 7)",
    "Quality education platforms (SDG 4)", 
    "Responsible consumption optimization (SDG 12)",
    "Climate action through technology (SDG 13)"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              About PRIMEHIVE
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Innovate. Optimize. Sustain.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A cutting-edge Information Technology service provider, dedicated to revolutionizing 
              businesses through next-generation digital solutions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left content - Main description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>PRIMEHIVE DIGITAL SOLUTIONS</strong> is established with a vision to bridge innovation 
                with sustainability. We specialize in advanced inventory management, software engineering, 
                artificial intelligence (AI) and robotics, web development, social media optimization, 
                and data intelligence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering enterprises from startups to Fortune 500 companies, PRIMEHIVE harnesses 
                emerging technologies to solve complex business challenges. Our team of industry-leading 
                engineers, data scientists, and strategists drive digital transformation through scalable, 
                high-performance solutions designed for the future.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At PRIMEHIVE, we don't just adapt to technological evolution—we define it. With an 
                unwavering commitment to quality, client success, and environmental responsibility, 
                we continue to push the boundaries of IT innovation, shaping the digital landscape of tomorrow.
              </p>
            </div>
            
            {/* Right content - Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl glass-effect border border-primary/20">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          {/* Services section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/40 transition-all group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          {/* SDG Alignment section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Aligned with 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Sustainability Goals</span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Each solution is crafted to help our clients thrive while tackling some of the world's 
                biggest challenges. What sets us apart? Our commitment to aligning every project with 
                the Sustainable Development Goals, ensuring technology doesn't just solve problems—it 
                creates a sustainable future.
              </p>

              <div className="space-y-4">
                {sdgHighlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl glass-effect border border-primary/20">
                <h4 className="font-semibold text-lg mb-3 text-primary">Our Impact</h4>
                <p className="text-muted-foreground leading-relaxed">
                  PRIMEHIVE DIGITAL SOLUTIONS makes a real difference. Our inventory management cuts 
                  waste and optimizes resources. Our programmers build software for clean energy systems, 
                  environmental monitoring, and online education. Meanwhile, AI and robotics boost 
                  efficiency and tackle climate change through smarter agriculture and eco-friendly automation.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-effect border border-accent/20">
                <h4 className="font-semibold text-lg mb-3 text-accent">Our Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  At PRIMEHIVE DIGITAL SOLUTIONS, we believe technology is a force for good—empowering 
                  businesses, connecting communities, and driving us toward a world where sustainability 
                  isn't just a goal, it's a reality. We're not just coding solutions; we're coding a 
                  greener planet—one project at a time.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}