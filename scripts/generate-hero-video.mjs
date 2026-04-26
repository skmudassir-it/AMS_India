/**
 * Run once to generate the hero background video via fal.ai Kling v3 Pro.
 * Usage: node scripts/generate-hero-video.mjs
 * Result is written to public/hero-video-meta.json for use in the hero section.
 */

import { fal } from "@fal-ai/client";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

fal.config({
    credentials: "bb73ead7-8f52-4d85-981c-ac9a63fdff03:7f49d8a55864370f5f79c4504e7e0402",
});

const PROMPT =
    "Abstract technology network visualization, glowing electric blue nodes connected by pulsing lines of light on a deep dark navy background, 3D depth, flowing data streams, cinematic motion graphics loop, professional and modern, smooth seamless animation";

console.log("Generating hero video via fal.ai Kling v3 Pro...");
console.log("This may take a few minutes.\n");

try {
    const result = await fal.run("fal-ai/kling-video/v3/pro/text-to-video", {
        input: {
            prompt: PROMPT,
            duration: "5",
            aspect_ratio: "16:9",
            negative_prompt: "text, watermark, logo, blurry, low quality",
        },
    });

    const videoUrl = result.data?.video?.url;
    if (!videoUrl) {
        console.error("No video URL in response:", JSON.stringify(result, null, 2));
        process.exit(1);
    }

    const meta = { url: videoUrl, generatedAt: new Date().toISOString() };
    const outPath = join(__dirname, "../public/hero-video-meta.json");
    writeFileSync(outPath, JSON.stringify(meta, null, 2));

    console.log("Video generated successfully!");
    console.log("URL:", videoUrl);
    console.log("Saved to: public/hero-video-meta.json");
} catch (err) {
    console.error("Generation failed:", err);
    process.exit(1);
}
