// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set to the live domain so canonical URLs and the sitemap are correct
  site: 'https://www.taxgeeks.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
