import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
const {
  APP_SITE
} = loadEnv(process.env.APP_SITE, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  site: APP_SITE,
  integrations: [preact()]
});