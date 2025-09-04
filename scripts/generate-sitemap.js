// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Needed because __dirname is not available in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = "https://jimohib.github.io";
const currentDate = new Date().toISOString();

const projectRoot = path.join(__dirname, "..");
const pagesDir = path.join(projectRoot, "src/pages");

// Collect static anchors (sections on homepage)
const staticUrls = [
  { loc: "/", priority: "1.0", changefreq: "monthly" },
  { loc: "/#about", priority: "0.8", changefreq: "monthly" },
  { loc: "/#projects", priority: "0.9", changefreq: "weekly" },
  { loc: "/#publications", priority: "0.7", changefreq: "monthly" },
  { loc: "/#awards", priority: "0.6", changefreq: "yearly" },
  { loc: "/#contact", priority: "0.5", changefreq: "yearly" },
];

// Recursively find page files
function getPageFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getPageFiles(fullPath));
    } else if (/\.(jsx|tsx|js|ts)$/.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

// Convert file path -> route
function filePathToRoute(filePath) {
  let relativePath = path.relative(pagesDir, filePath);
  relativePath = relativePath.replace(/\.(jsx|tsx|js|ts)$/, ""); // remove extension
  relativePath = relativePath.replace(/index$/, ""); // turn "about/index.tsx" -> "about/"
  return "/" + relativePath.replace(/\\/g, "/"); // normalize slashes
}

// Gather dynamic routes
const pageFiles = getPageFiles(pagesDir);
const dynamicUrls = pageFiles.map((file) => ({
  loc: filePathToRoute(file),
  priority: "0.7",
  changefreq: "monthly",
}));

// Merge & deduplicate URLs
const allUrls = [...staticUrls, ...dynamicUrls].filter(
  (url, index, self) =>
    index === self.findIndex((u) => u.loc === url.loc) // dedupe by loc
);

// Build sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Ensure public directory exists
const publicDir = path.join(projectRoot, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("Sitemap generated with", allUrls.length, "URLs!");

// Always (re)write robots.txt
const robotsPath = path.join(publicDir, "robots.txt");
const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

fs.writeFileSync(robotsPath, robots);
console.log("robots.txt written successfully!");
