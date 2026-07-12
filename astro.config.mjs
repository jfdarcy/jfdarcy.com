// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.jfdarcy.com',
  output: 'static',
  redirects: {
    '/': {
      status: 301,
      destination: '/home',
    },
  },
});
