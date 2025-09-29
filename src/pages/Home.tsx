import { Phone, MessageCircle, CheckCircle, Wrench, Home as HomeIcon, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Custom Sizes",
      description: "Tailored to your exact requirements"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "Quick delivery and installation"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "On-site Installation",
      description: "Professional fitting at your location"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Materials",
      description: "Premium glass and fittings"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Service",
      description: "30+ years of experience"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Repairs & Service",
      description: "Maintenance and repair solutions"
    }
  ];

  const services = [
    { name: "Toughened Glass", link: "/services" },
    { name: "Shower Partitions", link: "/services" },
    { name: "UPVC Windows", link: "/services" },
    { name: "Mirrors", link: "/services" },
    { name: "Glazing", link: "/services" },
    { name: "Glass Cutting", link: "/services" }
  ];

  return (
    <>
      <SEOHead 
        title="SABIR GLASS | All Types of Glass Work in Gulbarga/Kalaburagi"
        description="SABIR GLASS - All types of glass work in one place. Custom glass solutions for homes, shops and offices in Gulbarga/Kalaburagi. Call +91 9900673744"
        path="/"
      />
      
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="SABIR GLASS Logo"
              className="h-20 lg:h-24 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary mb-4">
            SABIR GLASS
          </h1>
          <p className="font-heading text-xl lg:text-2xl text-muted-foreground mb-2">
            Gulbarga / Kalaburagi
          </p>
          <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            All type of glass work in one place
          </p>
          <p className="font-body text-base lg:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Custom glass solutions for homes, shops and offices
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

      {/* Quick Highlights */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12">
            Why Choose SABIR GLASS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center glass-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Services Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-card border border-border rounded-lg p-4 text-center hover:bg-secondary transition-colors glass-shadow"
              >
                <p className="font-body font-medium text-sm">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-primary-foreground text-lg">
            Trusted Glass Solutions Since 1989
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;