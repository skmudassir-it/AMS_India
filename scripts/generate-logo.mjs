/**
 * Generate professional logo variants for AMS IT Services via fal.ai SeedDream v4.5.
 * Saves square logo (512×512) and wide banner logo (800×200) to public/.
 * Usage: node scripts/generate-logo.mjs
 */

import { fal } from "@fal-ai/client";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "../public");

fal.config({
    credentials: "bb73ead7-8f52-4d85-981c-ac9a63fdff03:7f49d8a55864370f5f79c4504e7e0402",
});

async function downloadFile(url, destPath) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Download failed: ${res.status}`);
    writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
    console.log(`  ✓ saved ${destPath.replace(PUBLIC, "/public")}`);
}

async function generate(prompt, size, outPath) {
    const result = await fal.run("fal-ai/bytedance/seedream/v4.5/text-to-image", {
        input: {
            prompt,
            image_size: size,
            num_images: 1,
            negative_prompt: "blurry, pixelated, low quality, text, watermark, realistic photo, people, hands",
        },
    });
    const url = result?.data?.images?.[0]?.url;
    if (!url) throw new Error("No image URL returned");
    await downloadFile(url, outPath);
}

console.log("Generating AMS IT Services logo variants...\n");

await Promise.all([
    // Square icon logo (used in navbar)
    generate(
        "Professional IT technology company logo icon, bold capital letter A made of interconnected circuit lines and nodes, deep navy blue background, electric blue and orange-red gradient accent glow, minimalist flat vector style, clean white geometric lines, corporate tech branding, square format, centered composition",
        { width: 512, height: 512 },
        join(PUBLIC, "logo-icon.jpg")
    ),
    // Wide wordmark logo for navbar
    generate(
        "Professional IT services company wordmark logo, bold modern sans-serif letters AMS IT SERVICES, deep navy blue background, electric blue accent color on the letters, subtle circuit pattern in background, clean minimal corporate design, horizontal banner format, high contrast, professional branding",
        { width: 800, height: 200 },
        join(PUBLIC, "logo-wordmark.jpg")
    ),
]);

console.log("\n✓ Logo generation complete.");
