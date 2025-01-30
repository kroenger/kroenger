import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kroenger.org',
  integrations: [
    react(), 
    sitemap(), 
    tailwind()
  ]
});