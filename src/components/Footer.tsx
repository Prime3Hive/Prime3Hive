import { Github, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/Primehivesolu", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/primehive-digital-solutions-27b323355", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/qr/FXLQ3CFIYG52B1", label: "WhatsApp" },
    { icon: Mail, href: "mailto:primehivedigitalsolutions@gmail.com", label: "Email" }
  ];

  const footerLinks = [
    { 
      title: "Services", 
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Performance", href: "/services/performance-optimization" },
        { name: "Security", href: "/services/security-solutions" }
      ]
    },
    { 
      title: "Company", 
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" }
      ]
    },
    { 
      title: "Resources", 
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/projects" },
        { name: "Documentation", href: "/documentation" },
        { name: "Support", href: "/support" }
      ]
    }
  ];

  return (
    <footer className="border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="PrimeHive Digital Solutions"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PrimeHive
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Crafting exceptional digital experiences with cutting-edge technology and elegant design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PrimeHive Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}