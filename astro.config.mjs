import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mcqueenstudio.com.br',
  output: 'static',
  build: { format: 'directory' },
});
