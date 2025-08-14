import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Mail, RefreshCw } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LoadingProgress } from '@/components/LoadingProgress';
import { useToast } from '@/hooks/use-toast';

interface CalendlyEvent {
  uri: string;
  name: string;
  start_time: string;
  end_time: string;
  status: string;
  event_type: string;
  invitees?: Array<{
    name: string;
    email: string;
    status: string;
  }>;
}

const Admin = () => {
  const [events, setEvents] = useState<CalendlyEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const fetchEvents = async (isRefresh = false) => {
    try {
      if (isRefresh) setRefreshing(true);
      
      const response = await fetch('/api/calendly-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data = await response.json();
      setEvents(data.events || []);
      
      if (isRefresh) {
        toast({
          title: "Events Updated",
          description: "Successfully refreshed meeting data",
        });
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: "Error",
        description: "Failed to fetch meeting data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'canceled':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
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
              <p className="text-muted-foreground">Manage your Calendly meetings</p>
            </div>
            <Button 
              onClick={() => fetchEvents(true)} 
              disabled={refreshing}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Scheduled Meetings ({events.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {events.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No meetings scheduled yet
                  </div>
                ) : (
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <div
                        key={event.uri}
                        className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{event.name}</h3>
                            <div className="flex items-center gap-4 text-muted-foreground mt-1">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(event.start_time)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {formatTime(event.start_time)} - {formatTime(event.end_time)}
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(event.status)}>
                            {event.status}
                          </Badge>
                        </div>
                        
                        {event.invitees && event.invitees.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground">Attendees:</h4>
                            {event.invitees.map((invitee, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 bg-muted/30 rounded p-2"
                              >
                                <User className="w-4 h-4 text-muted-foreground" />
                                <span className="font-medium">{invitee.name}</span>
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{invitee.email}</span>
                                <Badge 
                                  variant="outline" 
                                  className={getStatusColor(invitee.status)}
                                >
                                  {invitee.status}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Admin;