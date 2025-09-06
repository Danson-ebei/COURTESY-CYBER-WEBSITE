import React from 'react';
import Navigation from '@/components/Navigation';
import { Check, Building2, Car, Globe, Shield, GraduationCap, Monitor, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, title, services }: { icon: any, title: string, services: string[] }) => (
  <Card className="h-full shadow-soft hover:shadow-primary transition-all duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-3 text-lg">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{service}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Services = () => {
  const serviceCategories = [
    {
      icon: Building2,
      title: "Kenya Revenue Authority (KRA) Services",
      services: [
        "New PIN Registration",
        "PIN Retrieval",
        "Email Update",
        "Filing Returns",
        "Tax Compliance Certificate (TCC)"
      ]
    },
    {
      icon: Car,
      title: "National Transport and Safety Authority (NTSA) Services",
      services: [
        "TIMS Account Registration",
        "Vehicle Transfer",
        "Inspection Booking",
        "Driving License Renewal",
        "Vehicle Search",
        "New Generation Plates"
      ]
    },
    {
      icon: Globe,
      title: "eCitizen Services",
      services: [
        "Account Creation",
        "Phone Number Update",
        "Passport Services"
      ]
    },
    {
      icon: Shield,
      title: "Social Health Authority (SHA) Services",
      services: [
        "SHA Registration",
        "Phone Number Change",
        "Contribution Adjustment",
        "Payments"
      ]
    },
    {
      icon: Building2,
      title: "National Social Security Fund (NSSF) Services",
      services: [
        "NSSF Registration",
        "Card Replacement"
      ]
    },
    {
      icon: GraduationCap,
      title: "Teachers Service Commission (TSC) Services",
      services: [
        "TSC Number Application",
        "Status Check"
      ]
    },
    {
      icon: Building2,
      title: "Business Registration Services",
      services: [
        "Business Name Registration",
        "Company Registration"
      ]
    },
    {
      icon: Shield,
      title: "Police Clearance (Good Conduct)",
      services: [
        "Application and Renewal",
        "Certificate Download"
      ]
    }
  ];

  const academicServices = [
    {
      icon: GraduationCap,
      title: "Higher Education Loans Board (HELB) Services",
      services: [
        "Undergraduate Loan Application",
        "TVET Loan Application",
        "HELB Clearance Certificate"
      ]
    },
    {
      icon: GraduationCap,
      title: "Kenya Universities and Colleges Central Placement Service (KUCCPS)",
      services: [
        "KUCCPS Application",
        "Placement Check"
      ]
    },
    {
      icon: FileText,
      title: "KCSE Results",
      services: [
        "Result Checking"
      ]
    }
  ];

  const ictServices = [
    {
      icon: Monitor,
      title: "ICT Training & Certification",
      services: [
        "Computer Applications",
        "Graphic Design Course",
        "Web Design/Development Course"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: "Additional Digital Services",
      services: [
        "Typing Services",
        "Photocopy/Scanning Services",
        "Photoshop Requests",
        "Windows Installation",
        "Social Media Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-primary-gradient bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions for all your government and business needs
          </p>
        </div>
      </section>

      {/* Government Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Government Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <ServiceCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            🎓 Academic & Student Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicServices.map((category, index) => (
              <ServiceCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* ICT Training */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            💻 ICT Training & Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ictServices.map((category, index) => (
              <ServiceCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Digital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((category, index) => (
              <ServiceCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;