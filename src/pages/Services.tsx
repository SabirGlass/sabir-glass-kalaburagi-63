import { Phone, MessageCircle, Shield, Droplets, Home, CircleDot, Scissors, Wrench, HelpCircle, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import toughenedGlass from "@/assets/toughened-glass.jpg";
import showerPartition from "@/assets/shower-partition.jpg";
import upvcWindows from "@/assets/upvc-windows.jpg";
import mirrors from "@/assets/mirrors.jpg";
import glazing from "@/assets/glazing.jpg";
import glassCutting from "@/assets/glass-cutting.jpg";
import glassRepair from "@/assets/glass-repair.jpg";
import customGlass from "@/assets/custom-glass.jpg";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Toughened Glass",
      description: "Strong, safe, and durable toughened glass for windows, doors, and partitions. Perfect for high-traffic areas and enhanced security.",
      image: toughenedGlass
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Shower Partitions",
      description: "Custom shower enclosures and bathroom partitions. Waterproof, elegant designs that transform your bathroom space.",
      image: showerPartition
    },
    {
      icon: <Square className="w-12 h-12" />,
      title: "UPVC Windows",
      description: "Energy-efficient UPVC windows with excellent insulation. Durable, low-maintenance, and available in various styles.",
      image: upvcWindows
    },
    {
      icon: <CircleDot className="w-12 h-12" />,
      title: "Mirrors",
      description: "Custom mirrors for homes and commercial spaces. Decorative mirrors, bathroom mirrors, and designer mirror installations.",
      image: mirrors
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Glazing",
      description: "Professional glazing services for storefronts, offices, and residential properties. Quality installation and finishing.",
      image: glazing
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Glass Cutting",
      description: "Precision glass cutting to your exact specifications. Any size, any shape, cut with professional accuracy.",
      image: glassCutting
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Repairs",
      description: "Expert glass repair services. Window repairs, glass replacement, and maintenance for all types of glass installations.",
      image: glassRepair
    },
    {
      icon: <HelpCircle className="w-12 h-12" />,
      title: "Custom Work",
      description: "Ask for any custom glass work. We specialize in unique projects and bespoke glass solutions for any requirement.",
      image: customGlass
    }
  ];

  return (
    <>
      <SEOHead 
        title="Glass Services - SABIR GLASS | Gulbarga/Kalaburagi"
        description="Professional glass services in Gulbarga: toughened glass, shower partitions, UPVC windows, mirrors, glazing, cutting & repairs. Expert installation & custom work."
        keywords="glass services Gulbarga, toughened glass Kalaburagi, shower partitions, UPVC windows, glass cutting, glass repairs"
        path="/services"
      />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Glass Services
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            From precision cutting to toughened glass installations, we deliver clean finishes and reliable service.
          </p>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Every project is handled with expert craftsmanship and attention to detail, ensuring your complete satisfaction.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full glass-shadow hover:glass-shadow-medium transition-shadow overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="font-heading text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
            Ready to Start Your Glass Project?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Contact us today for a consultation and quote. We're here to help with all your glass needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="tel:+919900673744">
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <a href="https://wa.me/919900673744" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;