import { MapPin, ExternalLink, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const Map = () => {
  const address = "National chowk, Noor Bagh, Kalaburagi, Karnataka 585104";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <>
      <SEOHead 
        title="Location & Directions - SABIR GLASS | National Chowk, Kalaburagi"
        description="Find SABIR GLASS at National chowk, Noor Bagh, Kalaburagi, Karnataka 585104. Get directions and visit our glass showroom for all your glass work needs."
        keywords="SABIR GLASS location, National chowk glass shop, Kalaburagi glass shop address, directions to SABIR GLASS"
        path="/map"
      />
      
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
            Visit Our Showroom
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Located in the heart of Gulbarga/Kalaburagi, we're easy to find and ready to serve you.
          </p>
          
          <Card className="glass-shadow max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-heading text-xl">Our Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <address className="font-body text-center not-italic mb-4">
                National chowk, Noor Bagh,<br />
                Kalaburagi, Karnataka 585104
              </address>
              <Button asChild variant="outline" className="w-full">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg overflow-hidden glass-shadow">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y0oApQ&q=${encodeURIComponent(address)}`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SABIR GLASS Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12">
            Visit Us Today
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="glass-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between font-body">
                    <span>Monday - Sunday</span>
                    <span className="font-medium">8:30 AM - 9:00 PM</span>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm mt-4">
                  Open 7 days a week for your convenience
                </p>
              </CardContent>
            </Card>

            <Card className="glass-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Contact Before Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-4">
                  Call ahead to ensure we have your specific glass type or to schedule a consultation.
                </p>
                <div className="space-y-2">
                  <Button asChild size="sm" className="w-full">
                    <a href="tel:+919900673744">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9900673744
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://wa.me/919900673744" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="font-body text-muted-foreground mb-6">
              Looking forward to serving you with quality glass solutions in Gulbarga/Kalaburagi
            </p>
            <Button asChild size="lg">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                View on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;