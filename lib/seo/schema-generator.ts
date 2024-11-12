export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABS Studios",
    url: "https://absstudios.com",
    logo: "https://absstudios.com/logo.png",
    description: "Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.",
    sameAs: [
      "https://twitter.com/absstudios",
      "https://linkedin.com/company/abs-studios",
      "https://youtube.com/absstudios"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@absstudios.com",
      areaServed: "Worldwide"
    }
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Marketing Automation",
    provider: {
      "@type": "Organization",
      name: "ABS Studios"
    },
    description: "Transform your marketing with neural pattern recognition and AI-powered automation",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Automation",
            description: "AI-powered content creation and distribution"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Voice AI",
            description: "Neural pattern recognition for brand voice optimization"
          }
        }
      ]
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}