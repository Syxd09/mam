import { SITE } from "./site";

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE.name,
  "image": "https://www.mamindustries.in/favicon.png",
  "logo": "https://www.mamindustries.in/favicon.png",
  "@id": "https://www.mamindustries.in/#organization",
  "url": "https://www.mamindustries.in",
  "telephone": [SITE.phone, "+91 63811 63159"],
  "email": SITE.email,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": `${SITE.address.line1}, ${SITE.address.line2}`,
    "addressLocality": SITE.address.city,
    "addressRegion": SITE.address.state,
    "postalCode": SITE.address.pincode,
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.8944419,
    "longitude": 77.5693295
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/mamindustries",
    "https://www.linkedin.com/company/mam-industries",
    "https://www.instagram.com/mamindustries"
  ]
});

export const getServiceSchema = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": title,
  "provider": {
    "@type": "LocalBusiness",
    "name": SITE.name
  },
  "description": description,
  "areaServed": "Bengaluru, Karnataka, India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Metal Fabrication Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": title
        }
      }
    ]
  }
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.mamindustries.in${item.url}`
  }))
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mamindustries.in/#organization",
  "name": SITE.name,
  "url": "https://www.mamindustries.in",
  "logo": "https://www.mamindustries.in/favicon.png",
  "image": "https://www.mamindustries.in/favicon.png",
  "sameAs": [
    "https://www.facebook.com/mamindustries",
    "https://www.linkedin.com/company/mam-industries",
    "https://www.instagram.com/mamindustries"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": SITE.phone,
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "kn", "hi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91 63811 63159",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "kn", "hi"]
    }
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.mamindustries.in/#website",
  "url": "https://www.mamindustries.in",
  "name": SITE.name,
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.mamindustries.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getFAQPageSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
});

