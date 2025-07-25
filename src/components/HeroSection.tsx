import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export function HeroSection() {
  console.log('HeroSection: Component rendering...');
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">PrimeHive Digital Solutions</h1>
        <p className="text-xl text-muted-foreground mb-8">Testing if the component renders...</p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}