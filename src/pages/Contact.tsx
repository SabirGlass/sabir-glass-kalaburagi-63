import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone & WhatsApp",
      content: "+91 9900673744",
      action: "tel:+919900673744",
      note: "Fastest way to reach us"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "sabirglasses@gmail.com",
      action: "mailto:sabirglasses@gmail.com",
      note: "For quotes and inquiries"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "National chowk, Noor Bagh, Kalaburagi, Karnataka 585104",
      action: "https://maps.google.com/?q=National+chowk,+Noor+Bagh,+Kalaburagi,+Karnataka+585104",
      note: "Visit our showroom"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "8:30 AM - 9:00 PM",
      note: "Open 7 days a week"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact SABIR GLASS | Glass Shop in Gulbarga/Kalaburagi"
        description="Contact SABIR GLASS for all glass work needs. Phone: +91 9900673744, Email: sabirglasses@gmail.com. Located at National chowk, Noor Bagh, Kalaburagi."
        keywords="contact SABIR GLASS, glass shop contact Gulbarga, National chowk glass shop, phone number glass shop Kalaburagi"
        path="/contact"
      />
      
      {/* Hero Section with CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to discuss your glass project? We're here to help with expert advice and quality solutions.
          </p>
          
          <div className="bg-primary rounded-lg p-8 mb-8">
            <p className="font-body text-primary-foreground text-lg mb-6">
              Fastest way to reach us is by phone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <a href="tel:+919900673744">
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                <a href="https://wa.me/919900673744" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12">
            Business Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-shadow hover:glass-shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <span className="font-heading text-xl font-semibold">
                      {info.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-body text-base text-foreground hover:text-primary transition-colors block mb-2"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="font-body text-base text-foreground mb-2">
                      {info.content}
                    </p>
                  )}
                  {info.note && (
                    <p className="font-body text-sm text-muted-foreground">
                      {info.note}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preferred Contact Method */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
            How We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold mb-2">Quick Quotes</h3>
              <p className="font-body text-muted-foreground text-sm">
                Call for immediate pricing and availability
              </p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold mb-2">Project Discussion</h3>
              <p className="font-body text-muted-foreground text-sm">
                WhatsApp us your requirements and photos
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold mb-2">Site Visits</h3>
              <p className="font-body text-muted-foreground text-sm">
                Schedule a consultation at your location
              </p>
            </div>
          </div>
          
          <p className="font-body text-muted-foreground">
            We respond quickly to all inquiries and are committed to providing excellent customer service.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;