import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://kroenger.github.io',
  base: '/kroenger',
  integrations: [react()]
});