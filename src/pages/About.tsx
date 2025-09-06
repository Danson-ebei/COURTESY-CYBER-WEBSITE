import React from 'react';
import Navigation from '@/components/Navigation';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Professionalism",
      description: "We maintain the highest standards of professionalism in all our services, ensuring quality and reliability."
    },
    {
      icon: Award,
      title: "Affordability",
      description: "Our competitive pricing makes quality digital services accessible to everyone without compromising on excellence."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We go above and beyond to ensure every client receives exceptional service."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "We value your time and deliver fast, efficient services without delays or unnecessary complications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-primary-gradient bg-clip-text text-transparent">Courtesy Cyber</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in navigating the digital landscape of government and business services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Courtesy Cyber was founded with a simple mission: to bridge the gap between individuals, businesses, 
                and the increasingly digital world of government services. We recognized that many people struggle 
                with online government platforms, paperwork, and digital processes that are essential for modern life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What started as a small initiative to help community members navigate KRA services has grown into 
                a comprehensive digital service provider. Today, we serve hundreds of satisfied clients across Kenya, 
                offering everything from government service assistance to ICT training and business registration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced professionals understands the complexities of digital government services 
                and is committed to making these processes simple, fast, and stress-free for our clients. We take 
                pride in our track record of successful service delivery and the trust our clients place in us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Courtesy Cyber?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-lg font-semibold mb-2">Satisfied Clients</div>
                <p className="text-muted-foreground">We've successfully helped hundreds of individuals and businesses</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Support Available</div>
                <p className="text-muted-foreground">Get assistance whenever you need it through multiple channels</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-lg font-semibold mb-2">Success Rate</div>
                <p className="text-muted-foreground">High success rate in completing all requested services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;