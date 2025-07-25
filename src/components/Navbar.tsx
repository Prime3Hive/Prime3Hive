import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PrimeHive
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
            <a href="/projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-primary/20">
            <div className="flex flex-col space-y-4 p-6">
              <a href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
              <a href="/projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-primary to-accent mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}