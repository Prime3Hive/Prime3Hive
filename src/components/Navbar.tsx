import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useSwipeable } from 'react-swipeable';
import { useAuth } from '@/contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(true),
    onSwipedRight: () => setIsOpen(false),
    trackMouse: false,
    trackTouch: true,
  });

  const handleNavClick = (sectionId: string, href?: string) => {
    setIsOpen(false);
    
    if (href && href.startsWith('/')) {
      window.location.href = href;
    } else if (sectionId) {
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        window.location.href = `/#${sectionId}`;
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-primary/20 backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      {...swipeHandlers}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/ac704901-333a-4f62-98d4-62ea1c19621f.png" 
              alt="PrimeHive Digital Solutions"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PrimeHive
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={() => handleNavClick('hero', '/')} 
              className="text-foreground/80 hover:text-primary transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick('', '/projects')} 
              className="text-foreground/80 hover:text-primary transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick('', '/services')} 
              className="text-foreground/80 hover:text-primary transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick('about')} 
              className="text-foreground/80 hover:text-primary transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              onClick={() => handleNavClick('', '/contact')} 
              className="text-foreground/80 hover:text-primary transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                {isAdmin && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" asChild>
                      <Link to="/admin">Admin</Link>
                    </Button>
                  </motion.div>
                )}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    onClick={signOut}
                    className="gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </motion.div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild>
                    <Link to="/auth">Sign In</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all neon-glow"
                    onClick={() => handleNavClick('', '/contact')}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            )}
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
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-primary/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex flex-col space-y-4 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.button 
                  onClick={() => handleNavClick('hero', '/')} 
                  className="text-foreground/80 hover:text-primary transition-colors text-left"
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.button>
                <motion.button 
                  onClick={() => handleNavClick('', '/projects')} 
                  className="text-foreground/80 hover:text-primary transition-colors text-left"
                  whileTap={{ scale: 0.95 }}
                >
                  Projects
                </motion.button>
                <motion.button 
                  onClick={() => handleNavClick('', '/services')} 
                  className="text-foreground/80 hover:text-primary transition-colors text-left"
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.button>
                <motion.button 
                  onClick={() => handleNavClick('about')} 
                  className="text-foreground/80 hover:text-primary transition-colors text-left"
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.button>
                <motion.button 
                  onClick={() => handleNavClick('', '/contact')} 
                  className="text-foreground/80 hover:text-primary transition-colors text-left"
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>

                {user ? (
                  <div className="space-y-2 pt-2 border-t border-border">
                    {isAdmin && (
                      <motion.div whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="/admin">Admin Dashboard</Link>
                        </Button>
                      </motion.div>
                    )}
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        onClick={signOut}
                        className="w-full gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </Button>
                    </motion.div>
                  </div>
                ) : (
                  <div className="space-y-2 pt-2 border-t border-border">
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/auth">Sign In</Link>
                      </Button>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="bg-gradient-to-r from-primary to-accent w-full"
                        onClick={() => handleNavClick('', '/contact')}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}