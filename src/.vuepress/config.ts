import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: './dist',
  lang: "id",
  title: "Himastatut Docs",
  description: "Dokumentasi Kegiatan Himpunan Mahasiswa Statistika",
  head: [
    ['meta', { name: 'algolia-site-verification', content: '9755C654639A3777' }]
  ],
  theme,
  

  // Enable it with pwa
  // shouldPrefetch: false,
});
