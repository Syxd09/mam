const fs = require("fs");
const path = require("path");

// Configuration
const SITE_URL = "https://www.mamindustries.in";
const PUBLIC_DIR = path.join(__dirname, "../public");
const SITE_TS_PATH = path.join(__dirname, "../src/lib/site.ts");

console.log("Generating sitemap.xml and robots.txt...");

// 1. Core pages
const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "daily" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/gallery", priority: "0.8", changefreq: "weekly" },
  { loc: "/contact", priority: "0.9", changefreq: "monthly" }
];

// 2. Local SEO landing pages
const seoPages = [
  { loc: "/laser-cutting-bangalore", priority: "0.9", changefreq: "weekly" },
  { loc: "/cnc-bending-bangalore", priority: "0.9", changefreq: "weekly" },
  { loc: "/powder-coating-bangalore", priority: "0.9", changefreq: "weekly" },
  { loc: "/laser-marking-bangalore", priority: "0.9", changefreq: "weekly" },
  { loc: "/welding-services-bangalore", priority: "0.9", changefreq: "weekly" },
  { loc: "/custom-metal-fabrication-bangalore", priority: "0.9", changefreq: "weekly" }
];

// 3. Extract dynamic services from site.ts using regex
let servicePages = [];
try {
  const siteTsContent = fs.readFileSync(SITE_TS_PATH, "utf8");
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  let match;
  const slugs = new Set();
  
  while ((match = slugRegex.exec(siteTsContent)) !== null) {
    slugs.add(match[1]);
  }
  
  slugs.forEach(slug => {
    servicePages.push({
      loc: `/services#${slug}`,
      priority: "0.8",
      changefreq: "weekly"
    });
  });
  console.log(`Successfully parsed ${slugs.size} dynamic service slugs from site.ts.`);
} catch (err) {
  console.error("Could not parse site.ts for service slugs. Using empty array. Error:", err.message);
}

// Combine all pages
const allPages = [...staticPages, ...seoPages, ...servicePages];
const today = new Date().toISOString().split("T")[0];

// Generate sitemap XML content
const xmlUrls = allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n");

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

// Write sitemap.xml
fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemapContent, "utf8");
console.log(`Generated sitemap.xml with ${allPages.length} URLs in ${PUBLIC_DIR}.`);

// Generate robots.txt content
const robotsContent = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /login

Sitemap: ${SITE_URL}/sitemap.xml
`;

// Write robots.txt
fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robotsContent, "utf8");
console.log(`Generated robots.txt in ${PUBLIC_DIR}.`);
console.log("Sitemap and robots.txt generation complete.");
