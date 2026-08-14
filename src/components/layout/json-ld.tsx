export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ASD Homecare",
    description:
      "ASD Homecare provides compassionate healthcare and everyday home support tailored to the individual needs of each client in the Baltimore area.",
    url: "https://asdhomecare.com",
    email: "hi@asdhomecare.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Little Brook Ct",
      addressLocality: "Windsor Mill",
      addressRegion: "MD",
      postalCode: "21244",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Baltimore",
      addressRegion: "MD",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
