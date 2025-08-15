import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ibitomi Theophius",
      role: "CEO & Founder",
      bio: "AI engineer and Python developer passionate about building innovative digital solutions.",
      image: null, // Placeholder for headshot image
      skills: ["AI Engineering", "Python", "Machine Learning", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented individuals behind PrimeHive's innovative digital solutions. More team members will be added soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={`${member.name} headshot`}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/20"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-primary/30">
                        <span className="text-background font-bold text-2xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;