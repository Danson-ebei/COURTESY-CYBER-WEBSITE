import React from 'react';
import Navigation from '@/components/Navigation';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookingForm from '@/components/BookingForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+254 123 456 789",
      action: "tel:+254123456789",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+254 123 456 789",
      action: "https://wa.me/254123456789",
      description: "Quick responses via WhatsApp chat"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@courtesycyber.co.ke",
      action: "mailto:info@courtesycyber.co.ke",
      description: "Send us your detailed requirements"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      action: "#",
      description: "Visit our physical location"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="bg-primary-gradient bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us today. We're here to help with all your digital service needs.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm"
                            className="w-full"
                          >
                            <a href={info.action} target="_blank" rel="noopener noreferrer">
                              {info.value}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="mt-6 shadow-soft">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Map integration available</p>
                      <p className="text-sm text-muted-foreground">Contact us for exact location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Request a Service</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;