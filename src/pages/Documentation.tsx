import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book, Code, FileText, Download, ExternalLink } from 'lucide-react';

const Documentation = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Quick start guides and setup instructions for our services",
      items: [
        { name: "Project Setup Guide", type: "Guide", link: "#" },
        { name: "Development Environment", type: "Tutorial", link: "#" },
        { name: "Best Practices", type: "Reference", link: "#" }
      ]
    },
    {
      title: "API Documentation", 
      icon: Code,
      description: "Comprehensive API references and integration guides",
      items: [
        { name: "REST API Reference", type: "API", link: "#" },
        { name: "Authentication", type: "Guide", link: "#" },
        { name: "Rate Limiting", type: "Reference", link: "#" }
      ]
    },
    {
      title: "Design Resources",
      icon: FileText,
      description: "UI components, design systems, and style guides",
      items: [
        { name: "Component Library", type: "Components", link: "#" },
        { name: "Design Tokens", type: "Reference", link: "#" },
        { name: "Brand Guidelines", type: "Guide", link: "#" }
      ]
    }
  ];

  const downloadableResources = [
    {
      title: "Project Template",
      description: "Ready-to-use project template with best practices",
      format: "ZIP",
      size: "2.5 MB"
    },
    {
      title: "Brand Assets",
      description: "Logos, icons, and brand elements in various formats",
      format: "ZIP", 
      size: "15.2 MB"
    },
    {
      title: "Style Guide",
      description: "Complete visual identity and usage guidelines",
      format: "PDF",
      size: "8.7 MB"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to get started and make the most of our services
            </p>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {documentationSections.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <div className="font-medium text-foreground">{item.name}</div>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {item.type}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={item.link}>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Downloadable Resources */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Downloadable Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-background" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span>Format: {resource.format}</span>
                      <span>Size: {resource.size}</span>
                    </div>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;