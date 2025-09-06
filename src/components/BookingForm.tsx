import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const serviceCategories = [
    'KRA Services',
    'NTSA Services',
    'eCitizen Services',
    'SHA Services',
    'NSSF Services',
    'TSC Services',
    'Business Registration',
    'Police Clearance',
    'HELB Services',
    'KUCCPS Services',
    'ICT Training',
    'Other Services'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll get back to you within 24 hours via your preferred contact method.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" />
          Service Request Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+254 123 456 789"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Service Category *</Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Service Details *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Please describe the specific service you need, any documents you have, and your preferred timeline..."
              rows={4}
              required
            />
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>What happens next?</strong>
              <br />
              1. We'll review your request within 2 hours
              <br />
              2. Our team will contact you to confirm details and pricing
              <br />
              3. Upon agreement, we'll begin processing your service immediately
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full shadow-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;