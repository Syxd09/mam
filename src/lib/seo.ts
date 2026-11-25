import { SITE, SERVICES, PROCESS } from "./site";

const SITE_URL = "https://www.mamindustries.in";
const ORG_ID = `${SITE_URL}/#organization`;

export const AREA_SERVED_ENTITIES = [
  { "@type": "City", "name": "Bengaluru", "sameAs": "https://en.wikipedia.org/wiki/Bengaluru" },
  { "@type": "City", "name": "Mysuru" },
  { "@type": "City", "name": "Tumakuru" },
  { "@type": "City", "name": "Hubballi-Dharwad" },
  { "@type": "City", "name": "Mangaluru" },
  { "@type": "City", "name": "Belagavi" },
  { "@type": "City", "name": "Hosur" },
  { "@type": "AdministrativeArea", "name": "Karnataka", "sameAs": "https://en.wikipedia.org/wiki/Karnataka" },
  { "@type": "Country", "name": "India", "sameAs": "https://en.wikipedia.org/wiki/India" },
];

export const KNOWS_ABOUT_TOPICS = [
  "CNC Fiber Laser Cutting",
  "Metal Cutting Services",
  "CNC Press Brake Bending",
  "Metal Bending and Forming",
  "Fiber Laser Marking and Engraving",
  "Metal Marking and Serialization",
  "Sheet Metal Fabrication",
  "Custom Metal Fabrication",
  "MIG and CO2 Welding",
  "TIG Welding",
  "Fiber Laser Welding",
  "Spot and Arc Welding",
  "Industrial Powder Coating",
  "Mild Steel Fabrication",
  "Stainless Steel Fabrication",
  "Aluminium Fabrication",
  "Rolling Shutters and Industrial Sheds",
];

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  "name": SITE.name,
  "alternateName": "MAM Industries Bengaluru",
  "description": "Precision metal cutting, 3kW CNC fiber laser cutting, 250-ton CNC metal bending, fiber laser metal marking, MIG/TIG/laser welding, powder coating, and custom sheet metal fabrication in Bengaluru, serving Karnataka and pan-India OEMs.",
  "image": `${SITE_URL}/og-image.jpg`,
  "logo": `${SITE_URL}/favicon.png`,
  "url": SITE_URL,
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
  "areaServed": AREA_SERVED_ENTITIES,
  "knowsAbout": KNOWS_ABOUT_TOPICS,
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "85",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Metal Cutting, Bending, Marking & Fabrication Services",
    "itemListElement": SERVICES.map((s) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": s.title,
        "description": s.short
      }
    }))
  },
  "sameAs": [
    "https://www.facebook.com/mamindustries",
    "https://www.linkedin.com/company/mam-industries",
    "https://www.instagram.com/mamindustries"
  ]
});

export const getServiceSchema = (title: string, description: string, path?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": title,
  "serviceType": title,
  ...(path ? { "url": `${SITE_URL}${path}` } : {}),
  "provider": {
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    "name": SITE.name
  },
  "description": description,
  "areaServed": AREA_SERVED_ENTITIES,
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `${SITE_URL}/contact`,
    "servicePhone": SITE.phone
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${title} Specifications`,
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
    "item": `${SITE_URL}${item.url}`
  }))
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  "name": SITE.name,
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.png`,
  "image": `${SITE_URL}/og-image.jpg`,
  "knowsAbout": KNOWS_ABOUT_TOPICS,
  "areaServed": AREA_SERVED_ENTITIES,
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
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": SITE.name,
  "inLanguage": "en-IN",
  "publisher": { "@id": ORG_ID }
});

export const getWebPageSchema = (title: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${path}#webpage`,
  "url": `${SITE_URL}${path}`,
  "name": title,
  "description": description,
  "inLanguage": "en-IN",
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "about": { "@id": ORG_ID },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".h-display", "article h2"]
  }
});

export const getHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Order Custom Metal Cutting, Bending & Fabrication from MAM Industries",
  "description": "Step-by-step process to get custom laser-cut, CNC-bent, welded, and finished metal parts manufactured in Bengaluru and shipped across Karnataka and India.",
  "totalTime": "P3D",
  "step": PROCESS.map((p, idx) => ({
    "@type": "HowToStep",
    "position": idx + 1,
    "name": p.title,
    "text": p.body,
    "url": `${SITE_URL}/contact`
  }))
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
