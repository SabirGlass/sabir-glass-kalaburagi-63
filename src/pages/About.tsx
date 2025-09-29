import { Phone, MessageCircle, Calendar, User, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const About = () => {
  const timeline = [
    {
      year: "1989",
      icon: <Calendar className="w-8 h-8" />,
      title: "Founded by Ibrahim Ali",
      description: "Ibrahim Ali laid the foundation of SABIR GLASS with a vision to bring quality glass products and expert craftsmanship to Gulbarga. His dedication, honesty, and customer-first approach built strong trust in the community."
    },
    {
      year: "Next Generation",
      icon: <User className="w-8 h-8" />,
      title: "Asgar Ali",
      description: "After Ibrahim Ali, his son Asgar Ali carried forward the family legacy. With his commitment to service excellence and innovation, Asgar expanded the shop's offerings and strengthened its reputation as a dependable name in glass solutions."
    },
    {
      year: "Current Leadership",
      icon: <Crown className="w-8 h-8" />,
      title: "Shabaz Ali",
      description: "Today, the shop is managed by Shabaz Ali, the son of Asgar Ali. Known for his leadership and modern management skills, Shabaz has introduced new techniques, efficient operations, and customer-centric improvements, ensuring SABIR GLASS continues to grow while maintaining its family values."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Us - SABIR GLASS | 30+ Years in Gulbarga/Kalaburagi"
        description="Learn about SABIR GLASS - serving Gulbarga/Kalaburagi since 1989. Three generations of craftsmanship in glass solutions. Family-owned business with modern techniques."
        keywords="SABIR GLASS history, glass shop Gulbarga since 1989, Ibrahim Ali, Asgar Ali, Shabaz Ali, family business"
        path="/about"
      />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8">
            Craftsmanship in Glass Since 1989
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            SABIR GLASS has been serving Gulbarga/Kalaburagi for more than three decades, delivering reliable, 
            high-quality glass solutions for homes, shops, and offices.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center mb-12">
            Our Family Legacy
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="glass-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-body text-sm text-muted-foreground font-medium mb-1">
                        {item.year}
                      </div>
                      <CardTitle className="font-heading text-2xl font-semibold">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
            Three Generations of Excellence
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            From generation to generation, SABIR GLASS has remained dedicated to quality workmanship, 
            timely service, and customer satisfaction—making it the trusted glass shop in Gulbarga/Kalaburagi.
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

export default About;