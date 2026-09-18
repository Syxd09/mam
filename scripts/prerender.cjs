const fs = require("fs");
const path = require("path");

// Provide WebSocket polyfill for Supabase in Node.js environment
if (typeof globalThis.WebSocket === "undefined") {
  globalThis.WebSocket = class WebSocket {
    constructor() {}
    addEventListener() {}
    removeEventListener() {}
    send() {}
    close() {}
  };
}

process.env.VITE_SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://wdmphbzppytabhqgegzn.supabase.co';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_EfMOpQBZnHIAElHgEFbH2Q_5mhsqjqs';
process.env.VITE_SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_EfMOpQBZnHIAElHgEFbH2Q_5mhsqjqs';

const { createServer } = require("vite");

const ROUTES = [
  "/",
  "/services",
  "/gallery",
  "/contact",
  "/laser-cutting-bangalore",
  "/cnc-bending-bangalore",
  "/sheet-metal-fabrication-bangalore",
  "/custom-metal-fabrication-bangalore",
  "/welding-services-bangalore",
  "/powder-coating-bangalore",
  "/laser-marking-bangalore",
];

async function prerender() {
  console.log("\n================================================");
  console.log("🚀 Starting Prerender (SSG) for Static HTML...");
  console.log("================================================\n");

  const distDir = path.resolve(__dirname, "../dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found! Run 'vite build' first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  // Create Vite SSR instance
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

    for (const url of ROUTES) {
      console.log(`Prerendering route: ${url}...`);

      const { html: appHtml, helmet } = render(url);

      let pageHtml = template;

      // 1. Replace Title Tag if helmet title exists
      if (helmet.title) {
        pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, helmet.title);
      }

      // 2. Remove default generic meta description and replace with page-specific meta
      if (helmet.meta) {
        pageHtml = pageHtml.replace(/<meta\s+name="description"[\s\S]*?>/i, "");
        pageHtml = pageHtml.replace("</head>", `  ${helmet.meta}\n</head>`);
      }

      // 3. Inject Canonical Link and alternate links
      if (helmet.link) {
        // Remove any default canonical if present
        pageHtml = pageHtml.replace(/<link\s+rel="canonical"[\s\S]*?>/i, "");
        pageHtml = pageHtml.replace("</head>", `  ${helmet.link}\n</head>`);
      }

      // 4. Inject Page-specific Structured Data (JSON-LD)
      if (helmet.script) {
        pageHtml = pageHtml.replace("</head>", `  ${helmet.script}\n</head>`);
      }

      // 5. Inject Rendered Application HTML into #root
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Verify that H1 is present
      const h1Match = appHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "None";

      // 6. Write output files
      if (url === "/") {
        fs.writeFileSync(path.join(distDir, "index.html"), pageHtml, "utf-8");
        console.log(`  ✓ Wrote dist/index.html (H1: "${h1Text}")`);
      } else {
        const cleanName = url.replace(/^\//, "");
        
        // Write as .html (for cleanUrls)
        const htmlFile = path.join(distDir, `${cleanName}.html`);
        fs.writeFileSync(htmlFile, pageHtml, "utf-8");

        // Write as directory/index.html
        const routeDir = path.join(distDir, cleanName);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, "index.html"), pageHtml, "utf-8");

        console.log(`  ✓ Wrote dist/${cleanName}.html & dist/${cleanName}/index.html (H1: "${h1Text}")`);
      }
    }

    console.log("\n✅ Prerendering completed successfully!");
    console.log(`Generated full static HTML for ${ROUTES.length} routes.\n`);
  } catch (err) {
    console.error("❌ Prerendering failed:", err);
    process.exit(1);
  } finally {
    await vite.close();
  }
}

prerender();
