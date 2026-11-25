import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  jsonLd?: object | object[];
  type?: "website" | "article";
  noindex?: boolean;
};

const SITE_URL = "https://www.mamindustries.in";
const DEFAULT_IMAGE = "/og-image.jpg";

const SEO = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  jsonLd,
  type = "website",
  noindex = false,
}: Props) => {
  const fullTitle = title.includes("MAM Industries") ? title : `${title} | MAM Industries`;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const fullUrl = `${SITE_URL}${normalizedPath}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const normalizedJsonLd = jsonLd
    ? Array.isArray(jsonLd)
      ? { "@context": "https://schema.org", "@graph": jsonLd }
      : { "@context": "https://schema.org", ...jsonLd }
    : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={fullUrl} />
      <link rel="alternate" hrefLang="en-in" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Geo / Local SEO Meta Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru, Karnataka" />
      <meta name="geo.position" content="12.8944419;77.5693295" />
      <meta name="ICBM" content="12.8944419, 77.5693295" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="MAM Industries" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {normalizedJsonLd && (
        <script type="application/ld+json">{JSON.stringify(normalizedJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
