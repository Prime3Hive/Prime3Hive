import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Mail, RefreshCw, Plus, Edit, Trash2, Settings, MessageSquare, Briefcase, FolderOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LoadingProgress } from '@/components/LoadingProgress';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  project_url?: string;
  github_url?: string;
  status: string;
  featured: boolean;
  created_at: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price_range: string;
  status: string;
  created_at: string;
}

const AdminContent = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts');
  const { toast } = useToast();
  const { signOut } = useAuth();

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast({
        title: "Error",
        description: "Failed to fetch contacts",
        variant: "destructive",
      });
    }
  };

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      });
    }
  };

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive",
      });
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([fetchContacts(), fetchProjects(), fetchServices()]);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'read':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'unread':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const markContactAsRead = async (contactId: string) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status: 'read' })
        .eq('id', contactId);

      if (error) throw error;
      
      setContacts(contacts.map(c => 
        c.id === contactId ? { ...c, status: 'read' } : c
      ));
      
      toast({
        title: "Contact Updated",
        description: "Marked as read",
      });
    } catch (error) {
      console.error('Error updating contact:', error);
      toast({
        title: "Error",
        description: "Failed to update contact",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed Out",
      description: "Successfully signed out",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <LoadingProgress isLoading={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your website content and interactions</p>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={fetchAllData} 
                disabled={loading}
                variant="outline"
                className="gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button 
                onClick={handleSignOut}
                variant="destructive"
                className="gap-2"
              >
                <Settings className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="contacts" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Contacts ({contacts.filter(c => c.status === 'unread').length})
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-2">
                <FolderOpen className="w-4 h-4" />
                Projects ({projects.length})
              </TabsTrigger>
              <TabsTrigger value="services" className="gap-2">
                <Briefcase className="w-4 h-4" />
                Services ({services.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Contact Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {contacts.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No contact messages yet
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {contacts.map((contact) => (
                        <div
                          key={contact.id}
                          className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{contact.name}</h3>
                                <Badge className={getStatusColor(contact.status)}>
                                  {contact.status}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground text-sm mb-2">{contact.email}</p>
                              <p className="font-medium text-sm mb-2">{contact.subject}</p>
                              <p className="text-sm">{contact.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {formatDate(contact.created_at)}
                              </p>
                            </div>
                            {contact.status === 'unread' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markContactAsRead(contact.id)}
                              >
                                Mark as Read
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="w-5 h-5" />
                      Projects
                    </div>
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Project
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {projects.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No projects yet
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">{project.title}</h3>
                                <Badge className={getStatusColor(project.status)}>
                                  {project.status}
                                </Badge>
                                {project.featured && (
                                  <Badge variant="secondary">Featured</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(project.created_at)}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Services
                    </div>
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Service
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {services.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No services yet
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">{service.title}</h3>
                                <Badge className={getStatusColor(service.status)}>
                                  {service.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {service.description}
                              </p>
                              <p className="text-sm font-medium mb-2">
                                {service.price_range}
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {service.features.map((feature, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(service.created_at)}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </div>
  );
};

const Admin = () => {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AdminContent />
    </ProtectedRoute>
  );
};

export default Admin;