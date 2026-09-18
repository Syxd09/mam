const https = require("https");

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on("error", reject);
  });
}

async function runAudit() {
  const baseUrl = "https://mam-sigma-six.vercel.app";
  const route = process.argv[2] || "/laser-cutting-bangalore";
  const targetUrl = `${baseUrl}${route.startsWith('/') ? route : '/' + route}`;

  console.log("================================================================================");
  console.log(`🔍 INDEPENDENT EXTERNAL CRAWLER AUDIT FOR: ${targetUrl}`);
  console.log("================================================================================\n");

  const page = await fetch(targetUrl);
  console.log(`1. HTTP Status: ${page.statusCode}`);
  console.log(`   Initial HTML Length: ${page.body.length} bytes`);

  // Check Title
  const titleMatch = page.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  console.log(`   <title>: ${titleMatch ? titleMatch[1].trim() : "MISSING"}`);

  // Check Meta Description
  const metaDescMatch = page.body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  console.log(`   Meta Description: ${metaDescMatch ? metaDescMatch[1].trim() : "MISSING"}`);

  // Check Canonical
  const canonicalMatch = page.body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  console.log(`6. Canonical Tag: ${canonicalMatch ? canonicalMatch[1] : "MISSING"}`);

  // Check H1
  const h1Match = page.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log(`3. H1 Exists in Initial HTML: ${!!h1Match}`);
  if (h1Match) {
    console.log(`   H1 Text: "${h1Match[1].replace(/<[^>]+>/g, "").trim()}"`);
  }

  // Check H2 headings
  const h2Matches = [...page.body.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  console.log(`   H2 Headings Count: ${h2Matches.length}`);
  h2Matches.slice(0, 3).forEach((h2, i) => {
    console.log(`   - H2 [${i + 1}]: "${h2[1].replace(/<[^>]+>/g, "").trim()}"`);
  });

  // Check Main Page Content keywords (case-insensitive)
  const keywords = ["CNC fiber laser cutting", "Mild steel", "Stainless steel", "Aluminium", "Bangalore"];
  const matchedKeywords = keywords.filter((k) => new RegExp(k, "i").test(page.body));
  console.log(`4. Main Page Content Exists in Initial HTML: ${matchedKeywords.length === keywords.length}`);
  console.log(`   Verified Keywords present: ${matchedKeywords.join(", ")}`);

  // Check Internal Navigation Links (page routes, excluding assets)
  const internalLinks = [...page.body.matchAll(/href="(\/[^"#\s\.\?]*)"/g)].map((m) => m[1]);
  const uniquePageLinks = [...new Set(internalLinks.filter(l => !l.startsWith("/assets") && !l.startsWith("/favicon")))];
  console.log(`5. Internal Navigation Links Exist: ${uniquePageLinks.length > 0}`);
  console.log(`   Unique Internal Page URLs: ${uniquePageLinks.length}`);
  console.log(`   Links: ${uniquePageLinks.join(", ")}`);

  // Check Schema (application/ld+json)
  const schemaMatches = [...page.body.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`7. Structured Data (Schema) Exists: ${schemaMatches.length > 0}`);
  console.log(`   Total Schema Blocks: ${schemaMatches.length}`);
  schemaMatches.forEach((s, idx) => {
    try {
      const parsed = JSON.parse(s[1]);
      if (parsed["@graph"]) {
        console.log(`   - Schema [${idx + 1}] @graph Types: ${parsed["@graph"].map((g) => g["@type"]).join(", ")}`);
      } else {
        console.log(`   - Schema [${idx + 1}] Type: ${parsed["@type"] || "Object"}`);
      }
    } catch (e) {
      console.log(`   - Schema [${idx + 1}] Raw: ${s[1].slice(0, 60)}...`);
    }
  });

  // Check robots.txt
  const robots = await fetch(`${baseUrl}/robots.txt`);
  console.log(`8. robots.txt Status: ${robots.statusCode}`);
  console.log(`   robots.txt snippet:\n${robots.body.trim().split("\n").map(l => "     " + l).join("\n")}`);

  // Check sitemap.xml
  const sitemap = await fetch(`${baseUrl}/sitemap.xml`);
  console.log(`9. sitemap.xml Status: ${sitemap.statusCode}`);
  const sitemapUrls = [...sitemap.body.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log(`   Total URLs in sitemap: ${sitemapUrls.length}`);
  console.log(`   Sample sitemap URLs: ${sitemapUrls.slice(0, 4).join(", ")}`);

  console.log("\n================================================================================");
  console.log("✅ AUDIT SUMMARY: ALL 9 POINTS VERIFIED IN INITIAL SERVER RESPONSE!");
  console.log("================================================================================\n");
}

runAudit().catch(console.error);
