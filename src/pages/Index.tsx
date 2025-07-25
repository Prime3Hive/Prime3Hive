import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  console.log('Index.tsx: Index component rendering...');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Temporarily comment out useAuth to see if it's causing issues
  // const { user, signOut } = useAuth();
  // console.log('Index.tsx: useAuth hook result:', { user, signOut });
  
  const user = null;
  const signOut = () => {};
  console.log('Index.tsx: Using mock auth values');

  return (
    <div className="min-h-screen">
      <Navbar 
        isAuthenticated={!!user}
        onSignOut={signOut}
      />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default Index;
