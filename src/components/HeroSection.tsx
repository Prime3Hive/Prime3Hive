import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-white">✨ Transform Your Business</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Smart Solutions for{' '}
                <span className="bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
                  Modern Business
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                We help businesses optimize their operations through innovative software solutions 
                and expert consulting services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-large group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-effect text-white border-white/20 hover:bg-white/10"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '100+', label: 'Projects Completed' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <Card className="w-96 h-96 card-gradient border-white/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-white">Innovation Hub</h3>
                  <p className="text-white/70">Where ideas come to life</p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent rounded-md" />
                </div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm" />
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}