import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  projectDetails: z.string().min(20, 'Please provide at least 20 characters describing your project'),
  additionalRequirements: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Inventory Management Solutions',
  'Custom Software Development',
  'AI & Robotics Solutions',
  'Web Development',
  'Social Media Optimization',
  'Data Intelligence & Analytics'
];

const budgetRanges = [
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+'
];

const timelines = [
  '1-2 months',
  '3-4 months',
  '5-6 months',
  '6+ months'
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      projectDetails: '',
      additionalRequirements: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual Supabase integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      
      toast({
        title: "Project request submitted!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full text-center">
          <CardHeader>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl">Thank You!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Your project request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-lg">What's Next?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Our team will review your project requirements</li>
                <li>• We'll prepare a customized proposal for your needs</li>
                <li>• Schedule a detailed consultation call</li>
                <li>• Begin planning your digital transformation</li>
              </ul>
            </div>

            <div className="border-t pt-6 space-y-4">
              <h4 className="font-semibold">Need immediate assistance?</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:primehivedigitalsolutions@gmail.com" className="text-primary hover:underline">
                  primehivedigitalsolutions@gmail.com
                </a>
                <a href="https://wa.me/qr/FXLQ3CFIYG52B1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                onClick={() => window.open('https://calendly.com/primehivedigitalsolutions', '_blank')}
                className="bg-gradient-to-r from-primary to-accent"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Link to="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and let's create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Required</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {budgetRanges.map((range) => (
                                    <SelectItem key={range} value={range}>
                                      {range}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Timeline</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timelines.map((timeline) => (
                                    <SelectItem key={timeline} value={timeline}>
                                      {timeline}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="projectDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your project requirements, goals, and any specific features you need..."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalRequirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Requirements (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any additional requirements, integrations, or special considerations..."
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Submitting...</>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit Project Request
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prefer to discuss your project directly? Schedule a consultation call with our team.
                  </p>
                  <Button 
                    onClick={() => window.open('https://calendly.com/primehivedigitalsolutions', '_blank')}
                    className="w-full"
                    variant="outline"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Meeting
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:primehivedigitalsolutions@gmail.com" className="text-primary hover:underline">
                      primehivedigitalsolutions@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/qr/FXLQ3CFIYG52B1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Chat with us
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}