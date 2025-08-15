import { Code, Palette, Rocket, Shield, Zap, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and modern frameworks",
      link: "/services/web-development",
      details: {
        delivery: "We deliver scalable, responsive web applications using React, Node.js, and cloud technologies. Our development process includes thorough planning, agile development cycles, comprehensive testing, and seamless deployment with ongoing maintenance support.",
        benefits: "Increased online presence, improved customer engagement, streamlined business processes, and enhanced user experience. Our solutions drive measurable ROI through optimized conversion rates and reduced operational costs.",
        commitment: "We guarantee code quality through rigorous testing, provide 24/7 support, ensure 99.9% uptime, and offer continuous optimization. Every project includes comprehensive documentation and team training."
      }
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Elegant, user-centered designs that combine aesthetics with exceptional functionality",
      link: "/services/ui-ux-design",
      details: {
        delivery: "Our design process encompasses user research, wireframing, prototyping, and iterative design refinement. We create intuitive interfaces that prioritize accessibility, usability, and brand consistency across all digital touchpoints.",
        benefits: "Enhanced user satisfaction, increased conversion rates, reduced bounce rates, and improved brand perception. Our designs create emotional connections with users while driving business objectives and increasing customer retention.",
        commitment: "We ensure design consistency across all platforms, conduct extensive user testing, provide detailed design systems, and offer unlimited revisions until perfection. Every design aligns with your brand identity and business goals."
      }
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for speed, performance, and user experience",
      link: "/services/performance-optimization",
      details: {
        delivery: "We conduct comprehensive performance audits, implement advanced caching strategies, optimize database queries, compress assets, and utilize CDNs. Our optimization includes both frontend and backend improvements for maximum efficiency.",
        benefits: "Faster loading times, improved search engine rankings, reduced server costs, enhanced user experience, and increased conversion rates. Studies show every second of improvement can increase conversions by up to 7%.",
        commitment: "We guarantee measurable performance improvements, provide detailed performance reports, monitor continuously, and offer ongoing optimization. Our goal is to achieve sub-3-second load times across all devices."
      }
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade security implementations to protect your digital assets",
      link: "/services/security-solutions",
      details: {
        delivery: "We implement multi-layered security including SSL certificates, data encryption, secure authentication, firewall configuration, regular security audits, and compliance with industry standards like GDPR and ISO 27001.",
        benefits: "Protected customer data, reduced cyber attack risks, regulatory compliance, enhanced customer trust, and avoided potential financial losses from security breaches. Peace of mind for both you and your customers.",
        commitment: "We provide 24/7 security monitoring, regular vulnerability assessments, immediate incident response, and continuous security updates. Your digital assets remain protected with our proactive security approach."
      }
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies tailored to your business goals",
      link: "/services/digital-strategy",
      details: {
        delivery: "We develop holistic digital strategies through market analysis, competitor research, technology roadmapping, and strategic planning. Our approach integrates SEO, social media, content marketing, and digital analytics for maximum impact.",
        benefits: "Increased market reach, improved brand visibility, enhanced customer acquisition, streamlined operations, and sustainable growth. Our strategies align technology with business objectives to drive measurable results.",
        commitment: "We provide quarterly strategy reviews, detailed analytics reporting, continuous optimization, and strategic guidance. Our partnership ensures your digital presence evolves with market trends and business needs."
      }
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Next-generation AI solutions to automate and enhance your business processes",
      link: "/services/ai-integration",
      details: {
        delivery: "We implement custom AI solutions including machine learning models, chatbots, predictive analytics, automated workflows, and intelligent data processing. Our AI solutions are tailored to your specific industry and business requirements.",
        benefits: "Automated routine tasks, improved decision-making through data insights, enhanced customer service, reduced operational costs, and competitive advantage through innovation. AI implementation can increase productivity by up to 40%.",
        commitment: "We ensure ethical AI implementation, provide comprehensive training, offer ongoing model optimization, and guarantee seamless integration. Our AI solutions are designed to augment human capabilities while maintaining data privacy."
      }
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into exceptional digital experiences with our comprehensive suite of services
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="floating-card group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}