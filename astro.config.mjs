import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: 'https://judahsullivan.dev/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: "hybrid",
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
    remotePatterns: [{ protocol: "https" }],
  }
});
