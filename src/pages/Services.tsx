import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServicesSection } from '@/components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive growth
            </p>
          </div>
        </div>
        
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;