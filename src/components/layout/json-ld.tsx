export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeHealthCareService",
    name: "ASD Homecare",
    description:
      "ASD Homecare provides compassionate home care services including skilled nursing, personal care, companion care, dementia care, and home support in the Baltimore, Maryland area.",
    url: "https://asdhomecare.com",
    email: "asdhomecare@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Little Brook Ct",
      addressLocality: "Windsor Mill",
      addressRegion: "MD",
      postalCode: "21244",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Baltimore",
        addressRegion: "MD",
        addressCountry: "US",
      },
      {
        "@type": "Place",
        name: "Windsor Mill",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Windsor Mill",
          addressRegion: "MD",
          addressCountry: "US",
        },
      },
      {
        "@type": "Place",
        name: "Woodlawn",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Woodlawn",
          addressRegion: "MD",
          addressCountry: "US",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Care Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skilled Nursing Care" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Care Assistance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medication Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehabilitation Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Companion Care" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alzheimer's & Dementia Care" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopping Assistance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Cleaning Services" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
