/**
 * One-time asset generation script.
 * - Downloads the fal.ai generated hero video to public/hero.mp4
 * - Generates 16 OG + section images via fal-ai/bytedance/seedream/v4.5/text-to-image
 * Usage: node scripts/generate-assets.mjs
 */

import { fal } from "@fal-ai/client";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "../public");
const SERVICES_DIR = join(PUBLIC, "services");

fal.config({
    credentials: "bb73ead7-8f52-4d85-981c-ac9a63fdff03:7f49d8a55864370f5f79c4504e7e0402",
});

// ── helpers ──────────────────────────────────────────────────────────────────

async function downloadFile(url, destPath) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Download failed ${url}: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(destPath, buf);
    console.log(`  ✓ saved ${destPath.replace(PUBLIC, "/public")}`);
}

async function generateImage(prompt, outputPath) {
    const result = await fal.run("fal-ai/bytedance/seedream/v4.5/text-to-image", {
        input: {
            prompt,
            image_size: { width: 1200, height: 630 },
            num_images: 1,
            negative_prompt: "text, watermark, logo, blurry, pixelated, low quality, cartoon",
        },
    });
    const imageUrl = result?.data?.images?.[0]?.url;
    if (!imageUrl) throw new Error(`No image URL returned for: ${outputPath}`);
    await downloadFile(imageUrl, outputPath);
}

// ── images to generate ───────────────────────────────────────────────────────

const IMAGES = [
    {
        file: join(PUBLIC, "og-image.jpg"),
        prompt:
            "Professional IT services company branding, deep navy blue abstract technology background with glowing electric blue network nodes and geometric patterns, premium corporate feel, cinematic lighting, photorealistic, 16:9",
    },
    {
        file: join(PUBLIC, "about-feature.jpg"),
        prompt:
            "Professional software development team collaborating in a modern tech office, diverse team working on monitors with code and dashboards, bright open space with glass walls and blue accent lighting, photorealistic, corporate",
    },
    {
        file: join(PUBLIC, "blog-og.jpg"),
        prompt:
            "Technology blog and insights banner, abstract digital content and knowledge visualization, glowing articles and data nodes on deep navy blue background, modern professional, photorealistic, 16:9",
    },
    {
        file: join(PUBLIC, "contact-og.jpg"),
        prompt:
            "Professional global business communication concept, interconnected world map with glowing connection lines, modern office environment, deep navy blue and blue accent, photorealistic, corporate banner, 16:9",
    },
    {
        file: join(PUBLIC, "portfolio-og.jpg"),
        prompt:
            "Digital portfolio showcase, gallery of professional modern websites on MacBook and multiple device screens, clean minimal dark background with soft lighting, photorealistic, corporate technology, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-web-development.jpg"),
        prompt:
            "Professional custom web development concept, modern MacBook showing clean React and TypeScript code on a dark screen, glowing interface elements, deep navy blue background, cinematic product shot, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-mobile-app.jpg"),
        prompt:
            "Professional mobile app development concept, premium smartphone with beautiful app UI on screen, floating design elements and code snippets, dark gradient background with soft blue accent glow, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-seo.jpg"),
        prompt:
            "SEO optimization concept, search engine results climbing upward with analytics charts and keyword graphs, digital marketing data visualization on screens, professional dark navy blue background, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-ecommerce.jpg"),
        prompt:
            "E-commerce solutions concept, modern online shop interface on laptop and mobile, shopping cart and product grid UI, professional dark background with orange and blue accent colors, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-digital-marketing.jpg"),
        prompt:
            "Digital marketing concept, social media and advertising dashboards on multiple screens, analytics graphs with upward trends, deep navy blue professional background, photorealistic, corporate banner, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-aws-cloud.jpg"),
        prompt:
            "AWS cloud infrastructure concept, abstract cloud computing visualization with server nodes and data streams, hexagonal grid pattern with electric blue glow on dark navy background, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-crm.jpg"),
        prompt:
            "CRM customer relationship management concept, professional business pipeline with client cards, data analytics and workflow automation visualization, dark navy blue tech background, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-software-testing.jpg"),
        prompt:
            "Software testing and quality assurance concept, automated test suite running on dark code editor, green checkmarks and bug detection visualization, deep navy blue professional background, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-content-writing.jpg"),
        prompt:
            "Professional content writing concept, clean writing workspace with glowing laptop showing published articles, editorial design elements, warm and cool contrast on dark background, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-backend-automation.jpg"),
        prompt:
            "Backend automation and API development concept, abstract data pipeline visualization with flowing nodes and workflow automation, server infrastructure, deep navy blue with electric blue accents, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-mobile-design.jpg"),
        prompt:
            "Mobile app UI/UX design concept, design wireframes and prototypes displayed on iPad and desktop, Figma-style design tools, creative professional workspace, deep navy blue background with pastel accent colors, photorealistic, 16:9",
    },
    {
        file: join(SERVICES_DIR, "og-web-app.jpg"),
        prompt:
            "Web application development concept, modern SaaS dashboard with charts and data tables on screen, React component architecture visualization, dark navy blue professional banner, photorealistic, 16:9",
    },
];

// ── main ─────────────────────────────────────────────────────────────────────

console.log("=== AMS IT Services Asset Generator ===\n");

// 1. Download hero video
const VIDEO_URL = "https://v3b.fal.media/files/b/0a97cf6c/FtdP-xxDuxw5yZ9Xijdhm_output.mp4";
const VIDEO_DEST = join(PUBLIC, "hero.mp4");
console.log("Downloading hero video...");
await downloadFile(VIDEO_URL, VIDEO_DEST);

// 2. Generate all images in parallel
console.log(`\nGenerating ${IMAGES.length} images in parallel via fal.ai SeedDream v4.5...\n`);

const results = await Promise.allSettled(
    IMAGES.map(({ file, prompt }) =>
        generateImage(prompt, file).catch((err) => {
            console.error(`  ✗ FAILED ${file.replace(PUBLIC, "/public")}: ${err.message}`);
            throw err;
        })
    )
);

const passed = results.filter((r) => r.status === "fulfilled").length;
const failed = results.filter((r) => r.status === "rejected").length;

console.log(`\n=== Done: ${passed} succeeded, ${failed} failed ===`);
