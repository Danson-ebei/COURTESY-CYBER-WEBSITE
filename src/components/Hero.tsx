import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-cyber-services.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Courtesy Cyber
            </span>
            <br />
            Your Trusted Digital Partner
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fast, Reliable & Affordable Cyber Services at Your Convenience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="shadow-primary">
              <Link to="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone size={20} />
                Contact Us
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-2">Fast</h3>
              <p className="text-muted-foreground">Quick turnaround on all services</p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-2">Reliable</h3>
              <p className="text-muted-foreground">Trusted by hundreds of clients</p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-2">Affordable</h3>
              <p className="text-muted-foreground">Competitive prices for quality service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;