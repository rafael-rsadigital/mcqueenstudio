import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mcqueenstudio.vercel.app',
  output: 'static',
  build: { format: 'directory' },
});
