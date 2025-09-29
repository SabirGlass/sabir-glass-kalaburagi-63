import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
}

const SEOHead = ({ 
  title = "SABIR GLASS | Glass Shop in Gulbarga/Kalaburagi", 
  description = "SABIR GLASS — All types of glass work: toughened glass, shower partitions, UPVC windows, mirrors, glazing, cutting & repairs in Gulbarga/Kalaburagi.",
  keywords = "glass shop in Gulbarga, Best Glass Shop in Kalaburagi, New Sabir Glass, Sabir Glass, Glass Shop, Sabir decor",
  path = "/"
}: SEOHeadProps) => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const fullUrl = `${siteUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SABIR GLASS",
    "image": `${siteUrl}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "National chowk, Noor Bagh",
      "addressLocality": "Kalaburagi",
      "addressRegion": "Karnataka",
      "postalCode": "585104",
      "addressCountry": "IN"
    },
    "telephone": "+91 9900673744",
    "email": "sabirglasses@gmail.com",
    "openingHours": "Mo-Su 08:30-21:00",
    "areaServed": "Gulbarga / National chowk",
    "sameAs": [],
    "url": fullUrl
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}/logo.png`} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/logo.png`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;